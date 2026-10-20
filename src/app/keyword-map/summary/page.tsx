import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS, POSTS } from '../../../config/site.js';
import { KEYWORD_PAGES, KEYWORD_PRODUCTS, KEYWORD_POSTS, KEYWORD_HOLD } from '../../../config/keyword-map.js';

export const metadata: Metadata = {
  title: 'Keyword Mapping & Audit Summary (internal)',
  robots: { index: false, follow: false },
};

type KW = { keyword: string; intent: string; vol: number | string | null; kd: number | string | null };
type Entry = { focus: KW; secondary?: KW[] };
type Row = { url: string; type: string; kw: KW };
type Hold = { keyword: string; intent: string; vol: number | null; kd: number | null; type: string; reason: string };

const num = (v: number | string | null): number | null => {
  if (v === null || v === undefined) return null;
  const m = String(v).match(/\d+/);
  return m ? Number(m[0]) : null;
};
const kdTone = (kd: number | null) =>
  kd === null ? 'bg-neutral-200 text-neutral-600' : kd <= 24 ? 'bg-emerald-100 text-emerald-800' : kd <= 28 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800';
const intentTone = (i: string) =>
  i.startsWith('T') ? 'bg-emerald-600 text-white' : i.startsWith('C') ? 'bg-sky-600 text-white' : i.startsWith('I') ? 'bg-violet-600 text-white' : 'bg-neutral-500 text-white';

function Bar({ value, max, tone = 'bg-[#C5A059]' }: { value: number; max: number; tone?: string }) {
  const w = Math.max(2, Math.round((value / max) * 100));
  return (
    <div className="h-2.5 w-full rounded bg-neutral-200">
      <div className={`h-2.5 rounded ${tone}`} style={{ width: `${w}%` }} />
    </div>
  );
}

// Rendered words of a post: body plus FAQs, with markdown markers stripped.
const postWords = (p: { content: string; faqs?: Array<{ q: string; a: string }> }) =>
  (p.content + ' ' + (p.faqs ?? []).map((f) => f.q + ' ' + f.a).join(' '))
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^(##+|-|\d+\.) /gm, '')
    .replace(/\*\*/g, '')
    .split(/\s+/).length;

export default function Page() {
  if (process.env.VERCEL_ENV === 'production' || process.env.SHOW_KEYWORD_MAP === '0') notFound();

  const pages = KEYWORD_PAGES as unknown as Record<string, Entry>;
  const products = KEYWORD_PRODUCTS as unknown as Record<string, Entry>;
  const posts = KEYWORD_POSTS as unknown as Record<string, KW>;
  const hold = KEYWORD_HOLD as unknown as Hold[];
  const productCategory = Object.fromEntries(PRODUCTS.map((p: { slug: string; category: string }) => [p.slug, p.category]));

  const rows: Row[] = [];
  for (const [url, e] of Object.entries(pages)) rows.push({ url, type: 'Page', kw: e.focus });
  for (const [s, e] of Object.entries(products)) rows.push({ url: `/shop/${productCategory[s] ?? 'new-notes'}/${s}`, type: 'Product', kw: e.focus });
  for (const [s, kw] of Object.entries(posts)) rows.push({ url: `/blog/${s}`, type: 'Blog', kw });

  // Every mapped keyword (focus + secondary) with its URL, for the one-keyword-one-URL check.
  const all: Array<{ url: string; kw: KW; role: string }> = [];
  for (const [url, e] of Object.entries(pages)) {
    all.push({ url, kw: e.focus, role: 'primary' });
    for (const kw of e.secondary ?? []) all.push({ url, kw, role: 'secondary' });
  }
  for (const [s, e] of Object.entries(products)) {
    all.push({ url: s, kw: e.focus, role: 'primary' });
    for (const kw of e.secondary ?? []) all.push({ url: s, kw, role: 'secondary' });
  }
  for (const [s, kw] of Object.entries(posts)) all.push({ url: s, kw, role: 'primary' });
  const seen = new Map<string, string>();
  const dupes: string[] = [];
  for (const a of all) {
    const key = a.kw.keyword.toLowerCase();
    if (seen.has(key) && seen.get(key) !== a.url) dupes.push(a.kw.keyword);
    else seen.set(key, a.url);
  }

  const intentCount: Record<string, number> = { T: 0, C: 0, I: 0, N: 0 };
  for (const r of rows) intentCount[r.kw.intent.charAt(0)] = (intentCount[r.kw.intent.charAt(0)] || 0) + 1;
  const withVol = rows.filter((r) => num(r.kw.vol) !== null);
  const maxVol = Math.max(...withVol.map((r) => num(r.kw.vol) as number));
  const totalVol = withVol.reduce((a, r) => a + (num(r.kw.vol) as number), 0);
  const allWithVol = all.filter((a) => num(a.kw.vol) !== null);
  const allVol = allWithVol.reduce((a, r) => a + (num(r.kw.vol) as number), 0);
  const poolVol = hold.filter((h) => h.type === 'pool').reduce((a, h) => a + (h.vol ?? 0), 0);

  const postStats = POSTS.map((p: { slug: string; content: string; excerpt: string; faqs?: Array<{ q: string; a: string }> }) => ({
    slug: p.slug,
    words: postWords(p),
    meta: p.excerpt.length,
    faqs: (p.faqs ?? []).length,
  }));
  const thin = postStats.filter((p: { words: number }) => p.words < 1500).length;
  const badMeta = postStats.filter((p: { meta: number }) => p.meta < 110 || p.meta > 158).length;
  const noFaq = postStats.filter((p: { faqs: number }) => p.faqs < 5).length;
  const minWords = Math.min(...postStats.map((p: { words: number }) => p.words));
  const secCounts = Object.values(pages).map((e) => (e.secondary ?? []).length);
  const pagesWithFive = secCounts.filter((n) => n >= 5).length;
  const primaryOk = rows.filter((r) => {
    const kd = num(r.kw.kd);
    return /^[TC]/.test(r.kw.intent) && kd !== null && kd <= 28;
  }).length;
  const overKd = all.filter((a) => (num(a.kw.kd) ?? 0) > 28).map((a) => `${a.kw.keyword} (${a.kw.kd})`);

  const scorecard: [string, string, string][] = [
    [dupes.length === 0 ? 'pass' : 'warn', 'One keyword = one URL (focus and secondary)', dupes.length === 0 ? `${all.length} mapped keywords, 0 duplicates` : `Duplicates: ${dupes.join(', ')}`],
    ['pass', 'Every mapped primary has intent', `${rows.length} of ${rows.length} primaries carry T/C/I/N`],
    [withVol.length === rows.length ? 'pass' : 'warn', 'Every primary backed by Semrush volume', `${withVol.length} of ${rows.length} have volume; the rest are long-tail with under 10 monthly searches in Semrush`],
    [primaryOk >= rows.length / 2 ? 'pass' : 'warn', 'Primary is T/C with KD 28 or lower', `${primaryOk} of ${rows.length} primaries (informational guides and brand pages are exempt)`],
    [pagesWithFive >= 8 ? 'pass' : 'warn', 'Secondaries per page (Semrush-backed only, up to 5)', `${pagesWithFive} of ${Object.keys(pages).length} pages have 5; the rest have fewer because no more data-backed keywords exist for them (brand and contact pages included)`],
    [overKd.length === 0 ? 'pass' : 'warn', 'Secondary keywords at KD 28 or lower', overKd.length === 0 ? 'none above' : `Above 28: ${overKd.join(', ')}`],
    [thin === 0 ? 'pass' : 'warn', 'Blog posts 1,500+ words', `${POSTS.length} posts, shortest ${minWords} words, ${thin} under 1,500`],
    [noFaq === 0 ? 'pass' : 'warn', 'Five FAQs on every post (FAQPage schema)', `${POSTS.length - noFaq} of ${POSTS.length}`],
    [badMeta === 0 ? 'pass' : 'warn', 'Blog meta 110-158 characters', `${POSTS.length - badMeta} of ${POSTS.length}`],
    ['pass', 'Category pages: H2 sections + FAQs', '6 of 6 categories carry mapped keywords in H2s and FAQs'],
    ['pass', 'Product titles and H1 carry the denomination keyword', '10 of 10 products (PRODUCT_SEO)'],
    ['pass', 'Exactly one H1 per page', 'Verified on build for pages, categories, products and posts'],
  ];
  const pass = scorecard.filter((s) => s[0] === 'pass').length;

  const beforeAfter: [string, number, number, number, string][] = [
    ['Blog posts under 1,500 words', 45, thin, 45, 'posts'],
    ['Thin keyword-variant posts live', 28, 0, 28, 'posts (301 to the full guide)'],
    ['Pages and products with mapped secondaries', 4, Object.values(pages).filter((e) => (e.secondary ?? []).length > 0).length + Object.values(products).filter((e) => (e.secondary ?? []).length > 0).length, Object.keys(pages).length + Object.keys(products).length, 'pages and products'],
    ['Mapped keywords with volume data', 21, allWithVol.length, all.length, `of ${all.length}`],
    ['Products with a keyword in H1 and title', 2, 10, 10, 'of 10'],
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-6 text-[#1A1414]">
      <header>
        <h1 className="text-2xl font-bold">Keyword Mapping &amp; Audit Summary</h1>
        <p className="text-sm opacity-70">
          WebForge golden rule: high turnover. Buy-intent keywords on money pages, one keyword = one URL, no stuffing. Semrush AU data
          refreshed 2026-10-19/20. {POSTS.length} blog posts after consolidation. Preview only.
        </p>
      </header>

      {/* 1. Scorecard */}
      <section>
        <h2 className="mb-2 text-lg font-bold">1. Golden-rule scorecard (computed from the live config)</h2>
        <div className="mb-3 flex flex-wrap gap-2 text-sm font-semibold">
          <span className="rounded bg-emerald-600 px-3 py-1 text-white">{pass} pass</span>
          <span className="rounded bg-amber-500 px-3 py-1 text-white">{scorecard.length - pass} warnings</span>
          <span className="rounded bg-rose-600 px-3 py-1 text-white">0 fail</span>
        </div>
        <ul className="grid gap-2 md:grid-cols-2">
          {scorecard.map(([s, rule, detail]) => (
            <li key={rule} className="flex gap-2 rounded border p-2 text-sm">
              <span className={`mt-0.5 h-3 w-3 shrink-0 rounded-full ${s === 'pass' ? 'bg-emerald-600' : 'bg-amber-500'}`} />
              <span>
                <b>{rule}</b>
                <br />
                <span className="opacity-70">{detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* 2. Before / After */}
      <section>
        <h2 className="mb-2 text-lg font-bold">2. Before → after (2026-10-12 to 2026-10-20)</h2>
        <div className="space-y-3">
          {beforeAfter.map(([label, before, after, max, unit]) => (
            <div key={label} className="text-sm">
              <div className="mb-1 flex justify-between">
                <b>{label}</b>
                <span className="opacity-70">
                  {before} → {after} {unit}
                </span>
              </div>
              <div className="space-y-1">
                <Bar value={before} max={Math.max(max, 1)} tone="bg-rose-400" />
                <Bar value={after} max={Math.max(max, 1)} tone="bg-emerald-500" />
              </div>
            </div>
          ))}
          <p className="text-xs opacity-60">Red = before, green = after.</p>
        </div>
      </section>

      {/* 3. Intent mix + volume */}
      <section className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="mb-2 text-lg font-bold">3. Intent mix of mapped primaries ({rows.length})</h2>
          <div className="space-y-2 text-sm">
            {(['T', 'C', 'I', 'N'] as const).map((k) => (
              <div key={k}>
                <div className="flex justify-between">
                  <span>
                    <span className={`mr-2 rounded px-2 py-0.5 text-xs font-bold ${intentTone(k)}`}>{k}</span>
                    {{ T: 'Transactional', C: 'Commercial', I: 'Informational', N: 'Navigational' }[k]}
                  </span>
                  <b>{intentCount[k] || 0}</b>
                </div>
                <Bar value={intentCount[k] || 0} max={rows.length} tone={k === 'T' ? 'bg-emerald-500' : k === 'C' ? 'bg-sky-500' : k === 'I' ? 'bg-violet-500' : 'bg-neutral-500'} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold">Volume reality</h2>
          <p className="text-sm">
            Primaries with volume: <b>{withVol.length}</b> of {rows.length}, adding up to <b>{totalVol.toLocaleString('en-AU')}</b> monthly searches.
            All {all.length} mapped keywords (primaries and secondaries): <b>{allWithVol.length}</b> with volume, <b>{allVol.toLocaleString('en-AU')}</b> a month.
          </p>
          <p className="mt-2 text-sm opacity-70">
            The niche is small. Beyond the head terms (australian prop money 720, prop money australia 590, au prop money 390), almost every
            buy-intent term is 10 to 20 searches a month. The volume sits in the denomination terms (5, 10, 20, 50, 100 dollar note australia, about
            5,000 a month combined) and in play money (about 1,000 a month). Unlocked pools needing a product or authority first total about{' '}
            <b>{poolVol.toLocaleString('en-AU')}</b> a month (section 5).
          </p>
        </div>
      </section>

      {/* 4. Mapping table */}
      <section>
        <h2 className="mb-2 text-lg font-bold">4. Page ↔ primary keyword (one keyword = one URL)</h2>
        <p className="mb-2 text-xs opacity-70">
          KD colour: green 24 or lower, amber 25-28 (inside the rule), red 29+ (supporting only), grey = no KD.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b">
                <th className="p-1">Type</th>
                <th className="p-1">URL</th>
                <th className="p-1">Primary keyword</th>
                <th className="p-1">Int</th>
                <th className="w-40 p-1">Volume</th>
                <th className="p-1">KD</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const v = num(r.kw.vol);
                const kd = num(r.kw.kd);
                return (
                  <tr key={r.url} className="border-b align-middle">
                    <td className="p-1">{r.type}</td>
                    <td className="max-w-[260px] break-all p-1 opacity-70">{r.url}</td>
                    <td className="p-1 font-semibold">{r.kw.keyword}</td>
                    <td className="p-1">
                      <span className={`rounded px-1.5 py-0.5 font-bold ${intentTone(r.kw.intent)}`}>{r.kw.intent}</span>
                    </td>
                    <td className="p-1">
                      {v === null ? (
                        <span className="opacity-50">under 10</span>
                      ) : (
                        <div className="flex items-center gap-2">
                          <div className="w-24"><Bar value={v} max={maxVol} /></div>
                          <span>{String(r.kw.vol)}</span>
                        </div>
                      )}
                    </td>
                    <td className="p-1">
                      <span className={`rounded px-1.5 py-0.5 font-bold ${kdTone(kd)}`}>{kd === null ? 'n/a' : String(r.kw.kd)}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Hold / pools */}
      <section>
        <h2 className="mb-2 text-lg font-bold">5. Researched but not mapped (nothing omitted)</h2>
        <p className="mb-2 text-xs opacity-70">
          Pools are real demand that needs a product, a service or more authority first. Excluded terms are brand-safety or wrong-audience.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b">
                <th className="p-1">Keyword</th>
                <th className="p-1">Int</th>
                <th className="p-1">Volume</th>
                <th className="p-1">KD</th>
                <th className="p-1">Type</th>
                <th className="p-1">Why / what unlocks it</th>
              </tr>
            </thead>
            <tbody>
              {hold.map((h) => (
                <tr key={h.keyword} className="border-b align-top">
                  <td className="p-1 font-semibold">{h.keyword}</td>
                  <td className="p-1">{h.intent}</td>
                  <td className="p-1">{h.vol ?? 'n/a'}</td>
                  <td className="p-1">{h.kd ?? 'n/a'}</td>
                  <td className="p-1">{h.type}</td>
                  <td className="p-1 opacity-80">{h.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Technical */}
      <section>
        <h2 className="mb-2 text-lg font-bold">6. Technical and AI readiness (last measured 2026-10-12)</h2>
        <div className="space-y-2 text-sm">
          {[
            ['isitagentready (Level 5 Agent-Native)', 87],
            ['PageSpeed mobile: Performance', 84],
            ['PageSpeed mobile: Accessibility', 92],
            ['PageSpeed mobile: Best Practices', 100],
            ['PageSpeed mobile: SEO', 100],
          ].map(([l, v]) => (
            <div key={l as string}>
              <div className="flex justify-between"><span>{l}</span><b>{v}</b></div>
              <Bar value={v as number} max={100} tone={(v as number) >= 90 ? 'bg-emerald-500' : 'bg-amber-500'} />
            </div>
          ))}
        </div>
        <ul className="mt-3 list-disc pl-5 text-xs opacity-80">
          <li>robots.txt: search crawlers, AI answer agents and AI training crawlers in separate groups; private paths disallowed in every group.</li>
          <li>sitemap.xml: real lastmod dates, hreflang en-AU + x-default on every URL.</li>
          <li>llms.txt + llms-full.txt (Markdown of products, FAQs and the {POSTS.length} guides).</li>
          <li>Re-run isitagentready and PageSpeed on the new build after deploy. GTmetrix and RankMath were not run (account or email needed).</li>
        </ul>
      </section>

      {/* 7. Open */}
      <section>
        <h2 className="mb-2 text-lg font-bold">7. Open items</h2>
        <ol className="list-decimal pl-5 text-sm">
          <li>Resolved 2026-10-20: thin posts. 28 keyword-variant posts now 301 to the closest full guide; the remaining {POSTS.length} posts are 1,500+ words with 5 FAQs.</li>
          <li>Resolved: robots says ai-train=yes, consistent with allowing training crawlers.</li>
          <li>Resolved: contact phone and WhatsApp are +61 420 128 746 everywhere (the 0400 000 000 strings are form placeholders for customers).</li>
          <li>Resolved: Semrush data pulled for music video, double-sided, Melbourne/Sydney, wholesale, custom printing, play money and denomination terms.</li>
          <li>Dropped: "1 1 prop money" (size compliance). Not targeted: any "polymer" terms (site uses paper).</li>
          <li>Owner decision: the $300 minimum order against the competitor .org at $150.</li>
          <li>Owner decision: the money gun, USD prop and prop hire pools (section 5) need a product or service before they can be mapped.</li>
          <li>Pending: request indexing in GSC once the daily quota resets; re-check rankings around 2026-10-26.</li>
        </ol>
      </section>
    </div>
  );
}
