import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { KEYWORD_PAGES, KEYWORD_PRODUCTS, KEYWORD_POSTS } from '../../config/keyword-map.js';

export const metadata: Metadata = {
  title: 'Keyword Map (internal)',
  robots: { index: false, follow: false },
};

type KW = { keyword: string; intent: string; vol: number | string | null; kd: number | string | null };
const fmt = (v: number | string | null) => (v === null || v === undefined ? 'n/a' : String(v));

// Internal full-site keyword map. 404s on production deployments.
export default function Page() {
  if (process.env.VERCEL_ENV === 'production' || process.env.SHOW_KEYWORD_MAP === '0') notFound();

  const rows: { url: string; type: string; kw: KW; sec: KW[] }[] = [];
  for (const [url, e] of Object.entries(KEYWORD_PAGES as unknown as Record<string, { focus: KW; secondary?: KW[] }>))
    rows.push({ url, type: 'page', kw: e.focus, sec: e.secondary || [] });
  for (const [slug, e] of Object.entries(KEYWORD_PRODUCTS as unknown as Record<string, { focus: KW; secondary?: KW[] }>))
    rows.push({ url: `/shop/new-notes/${slug}`, type: 'product', kw: e.focus, sec: e.secondary || [] });
  for (const [slug, kw] of Object.entries(KEYWORD_POSTS as unknown as Record<string, KW>))
    rows.push({ url: `/blog/${slug}`, type: 'blog', kw, sec: [] });

  // Golden-rule audit (WebForge seo-sales-rule.md), crawled 2026-10-12 from the local build: 73 URLs.
  const audit: [string, string, string][] = [
    ["✅","Homepage: ONE primary, no secondaries, ~0.4% density","Primary \"australian prop money\" (C, 720, KD 21). 6 mentions in 2,080 words (0.29%). Title 58, meta 150, one H1."],
    ["✅","Primary is T/C, KD 24 or lower (money pages)","Home KD 21, Shop KD 19. Both pass. Primaries elsewhere unchanged from before."],
    ["✅","One keyword = one URL","After retargeting, every page and post has a unique mapped primary (0 duplicates in the keyword map). The 9 older posts now target their own long-tail instead of a category phrase."],
    ["✅","New 10 blogs: unique primaries, informational/T support","10 of 10 have a unique primary and do not collide with any page. No bolded keyword runs."],
    ["✅","Product title {Name} | Buy Online Australia, 60 or fewer","10 of 10 (44-57 characters)."],
    ["✅","Product meta 110-158 with price + keyword","10 of 10 (136-151 characters), each with from-price and a buy phrase."],
    ["⚠️","No thin pages","Categories now 259-427 words (all pass). 11 of 53 older posts still under 200 words."],
    ["⚠️","No stuffing","19 older posts de-bolded (bold keyword runs removed). 11 posts still mention \"fake\" 3+ times and 20 carry 8+ tags: next pass."],
    ["⚠️","Titles 60 or fewer, metas 110-158","30 titles over 60 (mostly the brand suffix on blogs); 30 metas outside range (17 blog metas under 110)."],
    ["⚠️","Keywords backed by bank data","The 10 new T primaries have bank volume (20-30/mo each); 3 blog primaries and About/Contact have no volume (Semrush request)."],
    ["✅","One H1, canonical, 200 status, no duplicates","82 of 82 pages. Duplicate post slug removed."],
  ];
  const mix: [string, string, string, string][] = [
    ['Money pages (home, shop, 6 categories, 10 products, wholesale)', '19', 'avg ~330 words', 'Only 3 buy-intent primaries'],
    ['Blog posts', '53', 'avg ~230 words', '6 hold transactional primaries; 19 are keyword variants'],
    ['Info/legal pages', '10', 'n/a', 'No keyword target'],
  ];

  // PREVIEW ONLY: proposed on-page mapping for the 4 menu pages. Nothing here is applied to the site yet.
  // Vol/KD only from keywords australia prop money 2.txt + docs/keyword-map.md. n/a = not in bank (Semrush request).
  const proposed: {
    page: string; intent: string; title: string; meta: string; primary: string; secondary: string; cta: string;
  }[] = [
    {
      page: 'Home /',
      intent: 'C (commercial) → hub to T',
      title: 'Australian Prop Money for Film & TV | PROPPS Melbourne',
      meta: 'Cinema-grade prop Australian money for film, TV and photo shoots. Specimen-marked, made in Melbourne, express dispatch Australia-wide. Orders from $300.',
      primary: 'australian prop money (C · 720 · KD 21, new bank) — ONE primary, no secondaries (golden rule).',
      secondary: 'None targeted. Brand "PROPPS PTY LTD" (N) in header/footer only.',
      cta: 'Hero: "Shop Prop Money" → /shop/ · "Wholesale Quote" → /wholesale/ · Sticky: "Order on WhatsApp" · Footer band: "Start Your Order (min $300)" → /shop/',
    },
    {
      page: 'Shop /shop/',
      intent: 'T (transactional engine)',
      title: 'Australian Prop Money for Sale | Shop Online | PROPPS',
      meta: 'Buy prop money online: $5 to $100 specimen notes, money stacks and film packs. Order prop money in AUD with Express Post, free delivery over $500.',
      primary: 'australian prop money for sale (T · 20 · KD 19)',
      secondary: 'buy prop money (T·20·19) · buying prop money (T·20·1) · high quality prop money (T·20·4) · cheap prop money (T·20·28) · supporting high-KD: fake money (C·1600·36), imitation money (I·1300·38)',
      cta: 'Category tiles: "Shop New Notes" → /shop/new-notes/ etc · Product cards: "Add to Cart" → cart drawer → checkout · Sticky cart bar: "Checkout · Free shipping over $500"',
    },
    {
      page: 'About /about/',
      intent: 'N (navigational / trust)',
      title: 'About PROPPS | Melbourne Prop Money Makers Since 2019',
      meta: 'PROPPS PTY LTD makes specimen-marked Australian prop currency in Eltham, Melbourne. 500+ productions supplied since 2019. Meet the team and our standards.',
      primary: 'propps pty ltd (N · n/a · n/a) — brand entity, no volume needed',
      secondary: 'aus prop money (C · 90 · KD 16) · au props (C · 50 · KD 4) · props money (C · 50 · KD 19), each used once, naturally',
      cta: '"Shop Prop Money" → /shop/ · "See our compliance standards" → /compliance/ · "Contact the studio" → /contact/',
    },
    {
      page: 'Contact /contact/',
      intent: 'N → T (inquiry closer)',
      title: 'Contact PROPPS | Prop Money Quotes & Trade Orders',
      meta: 'Request a prop money quote or trade order from PROPPS in Melbourne. Reply within one business day by form, WhatsApp or email. Wholesale welcome.',
      primary: 'contact propps (N · n/a · n/a) — brand + action, no volume needed',
      secondary: 'prop money au (C · 70 · KD 24) · prop money quote / bulk order (n/a: Semrush request)',
      cta: 'Form: "Send My Order Enquiry" · "Chat on WhatsApp" · "Email sales" · "Wholesale pricing" → /wholesale/',
    },
  ];
  const wireframes: [string, string][] = [
    ['Home', 'H1 "Prop Australian Money for Film, TV & Photography" · H2 Shop by category (6 tiles) · H2 Why productions buy from PROPPS (specimen markings, Melbourne dispatch, 500+ productions) · H2 Popular denominations ($100, $50 cards) · H2 How ordering works (min $300, free over $500, crypto -10%) · H2 Compliance (Crimes (Currency) Act s22) · H2 FAQ (6) · closing CTA'],
    ['Shop', 'H1 "Buy Prop Money Online in Australia" · intro with prop buy once · H2 Shop by use (film/TV, stacks, photography, events, custom) · H2 Notes by denomination · H2 Delivery and payment (Express, PayID, crypto) · H2 FAQ (5) · CTA bar'],
    ['About', 'H1 "About PROPPS PTY LTD" · H2 Our story (Eltham 2019) · H2 Quality and specimen standards · H2 Who we supply · H2 Our commitment (dispatch, signature on delivery) · CTA to /shop/ and /contact/'],
    ['Contact', 'H1 "Contact PROPPS PTY LTD" · H2 Request a quote (form, 4 fields) · H2 Direct contact (WhatsApp, email, address) · H2 Trade and wholesale · H2 FAQ (3) · no popups on this page'],
  ];
  const outrank: [string, string, string, string][] = [
    ['prop buy', 'T', '480', '6'],
    ['au props', 'C', '50', '4'],
    ['aus prop money', 'C', '90', '16'],
    ['props money', 'C/I', '50', '19'],
    ['prop cash', 'I', '90', '22'],
    ['prop australian money', 'C/I', '140', '23'],
    ['prop money au', 'C', '70', '24'],
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <h1 className="text-xl font-bold">Keyword mapping review — applied in working tree (not pushed)</h1>
      <p className="mb-3 text-sm opacity-70">
        Four menu pages + 10 new blogs. Mapping below, audit results follow.
      </p>
      <div className="mb-4 space-y-3">
        {proposed.map((p) => (
          <div key={p.page} className="rounded border p-2 text-xs">
            <div className="text-sm font-bold">{p.page} · intent {p.intent}</div>
            <div><b>Title</b> ({p.title.length}): {p.title}</div>
            <div><b>Meta</b> ({p.meta.length}): {p.meta}</div>
            <div><b>Primary:</b> {p.primary}</div>
            <div><b>Secondary:</b> {p.secondary}</div>
            <div><b>CTAs:</b> {p.cta}</div>
          </div>
        ))}
      </div>
      <h2 className="mb-1 text-base font-bold">Your pasted list (100 unique) — triaged by golden rule</h2>
      <p className="mb-2 text-xs opacity-80">
        No volume/KD was supplied for these, so none is shown (never invented). Only 17 of 100 are buyer terms.
      </p>
      <table className="mb-4 w-full text-left text-xs">
        <thead>
          <tr className="border-b"><th className="p-1">Bucket</th><th className="p-1">#</th><th className="p-1">Examples</th><th className="p-1">Decision</th></tr>
        </thead>
        <tbody>
          {[
            ['✅ Prop-intent (C/T)', '17', 'australian prop money, prop australian money, au/aus prop money, prop money au, props money, aud prop money, $100 prop money, australian prop money for sale, australian prop money realistic, ready prop money', 'Use. Collapse variants to ~9 concepts (aud/aus/au/prop aus are one concept). One keyword = one URL.'],
            ['⚠️ "fake/counterfeit + Australia"', '14', 'realistic fake money australia, fake note australia, fake $100 australia, australian fake money', 'Mostly people checking a note they hold (informational). LSI in body copy only, never H1/title/product name.'],
            ['⚖️ Legal / penalty', '2', 'counterfeit money australia penalty, minimum sentence for counterfeit money australia', 'Optional H2 inside the existing compliance post. No new page.'],
            ['🚫 Detection / what do I do', '14', 'counterfeit money detector, fake money tester pen, atm gave me fake money', 'Drop. Wrong audience, different product.'],
            ['🚫 Making / selling / using counterfeit', '21', 'make fake money, australian counterfeit money for sale, best place to use counterfeit money', 'Will not map. Conflicts with the Section 22 rule: no counterfeit or spendable-cash framing.'],
            ['🚫 Wrong market / DIY / gambling / junk', '32', 'prop money uk, fake usd, fake money printable, pokies fake money, alibaba prop money', 'Drop.'],
          ].map((r) => (
            <tr key={r[0]} className="border-b align-top">{r.map((c) => (<td key={c} className="p-1">{c}</td>))}</tr>
          ))}
        </tbody>
      </table>
      <h2 className="mb-1 text-base font-bold">Additions to the new map (from the list + bank)</h2>
      <ul className="mb-4 list-disc pl-5 text-xs">
        <li><b>Shop:</b> australian prop money for sale (T), aud prop money (C), australian prop money realistic (C) in the buy-intent slot; vol/KD n/a, Semrush request.</li>
        <li><b>$100 product:</b> primary "$100 prop money" (T/C, n/a). Keep 100 dollar note australia (1600/18) as supporting.</li>
        <li><b>Held for owner:</b> "1 1 prop money" implies full-size reproduction, which touches the Section 22 size rule. Not mapped.</li>
        <li><b>Variants not targeted:</b> prop aus money, prop money aud (same concept as aud/aus/au), fake money prop money.</li>
        <li><b>Volume fix (from bank, KD 19 or lower):</b> play money 720/19 (C), australian play money 320/11, toy money australia 170/9, childrens play money 90/10, imitation money 1300/25 (I/T). Map to /shop/event-and-party-props/ and its blog. These are the only legitimate T/C terms with real volume.</li>
      </ul>
      <h2 className="mb-1 text-base font-bold">Wireframes (H1 / H2 order)</h2>
      <ul className="mb-4 list-disc pl-5 text-xs">
        {wireframes.map(([n, w]) => (
          <li key={n}><b>{n}:</b> {w}</li>
        ))}
      </ul>
      <h2 className="mb-1 text-base font-bold">Easiest wins to outrank (KD 24 or lower, from your bank)</h2>
      <table className="mb-4 text-left text-xs">
        <thead><tr className="border-b"><th className="p-1">Keyword</th><th className="p-1">Int</th><th className="p-1">Vol</th><th className="p-1">KD</th></tr></thead>
        <tbody>
          {outrank.map((o) => (
            <tr key={o[0]} className="border-b">{o.map((c) => (<td key={c} className="p-1">{c}</td>))}</tr>
          ))}
        </tbody>
      </table>
      <p className="mb-8 text-xs opacity-80">
        Semrush request list (not in bank, never invented): prop money for sale, cheap prop money, where to buy prop
        money, prop money supplier melbourne, bulk prop money, prop money quote, $20/$10/$5 note australia + prop.
      </p>
      <hr className="mb-6" />
      <h1 className="text-xl font-bold">FINAL AUDIT 2026-10-12 — WebForge golden rule (after changes, 82 URLs)</h1>
      <p className="mb-3 text-sm opacity-70">
        Goal of the rule: high turnover. Buy-intent keywords on money pages, one keyword per URL, no stuffing.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b">
              <th className="p-1"></th>
              <th className="p-1">Rule</th>
              <th className="p-1">Finding</th>
            </tr>
          </thead>
          <tbody>
            {audit.map(([s, rule, finding]) => (
              <tr key={rule} className="border-b align-top">
                <td className="p-1">{s}</td>
                <td className="p-1 font-semibold">{rule}</td>
                <td className="p-1">{finding}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="mb-1 text-base font-bold">Site mix (73 URLs)</h2>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full text-left text-xs">
          <tbody>
            {mix.map((m) => (
              <tr key={m[0]} className="border-b align-top">
                {m.map((c) => (
                  <td key={c} className="p-1">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="mb-1 text-base font-bold">Keywords currently mapped per page (T/C/I/N, volume, KD)</h2>
      <p className="mb-4 text-sm opacity-70">Preview/dev only. n/a = no volume in keyword bank.</p>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b">
              <th className="p-1">URL</th>
              <th className="p-1">Type</th>
              <th className="p-1">Focus keyword</th>
              <th className="p-1">Int</th>
              <th className="p-1">Vol</th>
              <th className="p-1">KD</th>
              <th className="p-1">Secondary (int · vol · KD)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.url} className="border-b align-top">
                <td className="p-1 break-all">{r.url}</td>
                <td className="p-1">{r.type}</td>
                <td className="p-1 font-semibold">{r.kw.keyword}</td>
                <td className="p-1">{r.kw.intent}</td>
                <td className="p-1">{fmt(r.kw.vol)}</td>
                <td className="p-1">{fmt(r.kw.kd)}</td>
                <td className="p-1">
                  {r.sec.map((s) => `${s.keyword} (${s.intent} · ${fmt(s.vol)} · ${fmt(s.kd)})`).join('; ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
