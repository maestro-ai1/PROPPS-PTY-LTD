// src/config/keyword-links.js
// Secondary-keyword interlinking, derived from the keyword map (src/config/keyword-map.js).
// Rule: every secondary keyword is an anchor that points at the URL that owns the primary keyword it supports.
//   1. Related-searches block: each secondary is assigned to two relevant host pages (never its own target),
//      at most one anchor per target per host, so link equity is spread without repeating one anchor everywhere.
//   2. In-body links: the first natural mention of a secondary inside a blog paragraph becomes a link (max 3 a post).
// Everything here is deterministic, so the build output is stable.
import { KEYWORD_PAGES, KEYWORD_PRODUCTS } from './keyword-map.js';
import { PRODUCTS, CATEGORIES, POSTS } from './site.js';

const HOSTS_PER_SECONDARY = 2;
const MAX_PER_HOST = 6;
const MAX_BODY_LINKS = 3;

const hash = (s) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};

const pageHref = (key) => (key === '/' ? '/' : `${key}/`);

// target url -> { href, cat, prod, kind, secondaries[] }
function buildTargets() {
  const out = [];
  for (const [key, v] of Object.entries(KEYWORD_PAGES)) {
    const m = /^\/shop\/([^/]+)$/.exec(key);
    out.push({ href: pageHref(key), cat: m ? m[1] : null, prod: null, kind: key, secondary: v.secondary.map((s) => s.keyword) });
  }
  for (const [slug, v] of Object.entries(KEYWORD_PRODUCTS)) {
    const p = PRODUCTS.find((x) => x.slug === slug);
    if (!p) continue;
    out.push({ href: `/shop/${p.category}/${p.slug}/`, cat: p.category, prod: p.slug, kind: 'product', secondary: v.secondary.map((s) => s.keyword) });
  }
  return out;
}

// pages that can carry a related-searches block
function buildHosts() {
  const hosts = [];
  for (const post of POSTS) hosts.push({ href: `/blog/${post.slug}/`, cats: post.relatedCategories ?? [], prods: post.relatedProducts ?? [], postCategory: post.category, slug: post.slug });
  for (const c of CATEGORIES) hosts.push({ href: `/shop/${c.slug}/`, cats: [c.slug], prods: PRODUCTS.filter((p) => p.category === c.slug).map((p) => p.slug), postCategory: '', slug: c.slug });
  for (const p of PRODUCTS) hosts.push({ href: `/shop/${p.category}/${p.slug}/`, cats: [p.category], prods: [p.slug], postCategory: '', slug: p.slug });
  return hosts;
}

const relevance = (host, target) => {
  let s = 0;
  if (target.prod && host.prods.includes(target.prod)) s += 3;
  if (target.cat && host.cats.includes(target.cat)) s += 2;
  if (target.kind === '/compliance' && host.postCategory === 'Compliance & Legal') s += 3;
  if (target.kind === '/wholesale' && host.postCategory === 'Wholesale') s += 3;
  if (target.kind === '/shop/event-and-party-props' && /play-money|toy|kids|party|classroom/.test(host.slug)) s += 1;
  return s;
};

const TARGETS = buildTargets();
const HOSTS = buildHosts();

// host href -> [{ keyword, href }]
const ASSIGNED = new Map(HOSTS.map((h) => [h.href, []]));
const load = (href) => ASSIGNED.get(href).length;

for (const t of TARGETS) {
  const eligible = HOSTS.filter((h) => h.href !== t.href)
    .map((h) => ({ h, score: relevance(h, t), tie: hash(h.href + t.href) }))
    .sort((a, b) => b.score - a.score || a.tie - b.tie);
  const usedHosts = new Set();
  // two passes so each secondary gets HOSTS_PER_SECONDARY distinct hosts
  for (let pass = 0; pass < HOSTS_PER_SECONDARY; pass++) {
    for (const kw of t.secondary) {
      const pick = eligible.find((e) => !usedHosts.has(e.h.href) && load(e.h.href) < MAX_PER_HOST) ?? eligible.find((e) => !usedHosts.has(e.h.href));
      if (!pick) continue;
      usedHosts.add(pick.h.href);
      ASSIGNED.get(pick.h.href).push({ keyword: kw, href: t.href });
    }
  }
}

/** Related-search anchors for a host page: [{ keyword, href }] */
export function searchLinksFor(hostHref) {
  return ASSIGNED.get(hostHref) ?? [];
}

/** Every secondary keyword and where it is linked from (used by the audit script). */
export function secondaryCoverage() {
  const rows = [];
  for (const t of TARGETS) {
    for (const kw of t.secondary) {
      const hosts = [];
      for (const [host, list] of ASSIGNED) if (list.some((l) => l.keyword === kw && l.href === t.href)) hosts.push(host);
      rows.push({ keyword: kw, target: t.href, hosts });
    }
  }
  return rows;
}

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const INLINE = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;
const SECONDARIES = TARGETS.flatMap((t) => t.secondary.filter((k) => k.length >= 8).map((k) => ({ keyword: k, href: t.href })))
  .sort((a, b) => b.keyword.length - a.keyword.length);

/**
 * Turns the first natural mention of a secondary keyword in plain paragraphs into a [keyword](target) link.
 * Skips headings, lists, tables, text already inside links or bold, the page's own URL, and any target the post already links to.
 */
export function autoLinkContent(content, selfHref) {
  const blocks = content.split('\n\n');
  const linkedTargets = new Set();
  let added = 0;
  const alreadyLinked = (href) => content.includes(`](${href})`);
  return blocks
    .map((block) => {
      if (added >= MAX_BODY_LINKS) return block;
      if (/^(#|\||- |\d+\. )/.test(block) || block.includes('\n')) return block;
      const parts = block.split(INLINE);
      for (let i = 0; i < parts.length && added < MAX_BODY_LINKS; i += 2) {
        for (const s of SECONDARIES) {
          if (s.href === selfHref || linkedTargets.has(s.href) || alreadyLinked(s.href)) continue;
          const re = new RegExp(`(^|[^\\w$])(${esc(s.keyword)})(?![\\w])`, 'i');
          const m = re.exec(parts[i]);
          if (!m) continue;
          const start = m.index + m[1].length;
          parts[i] = `${parts[i].slice(0, start)}[${m[2]}](${s.href})${parts[i].slice(start + m[2].length)}`;
          linkedTargets.add(s.href);
          added++;
          break;
        }
      }
      return parts.join('');
    })
    .join('\n\n');
}
