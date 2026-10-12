import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { KEYWORD_PAGES, KEYWORD_PRODUCTS, KEYWORD_POSTS } from '../../../config/keyword-map.js';

export const metadata: Metadata = {
  title: 'Keyword Mapping & Audit Summary (internal)',
  robots: { index: false, follow: false },
};

type KW = { keyword: string; intent: string; vol: number | string | null; kd: number | string | null };
type Row = { url: string; type: string; kw: KW };

const num = (v: number | string | null): number | null => {
  if (v === null || v === undefined) return null;
  const m = String(v).match(/\d+/);
  return m ? Number(m[0]) : null;
};
const kdTone = (kd: number | null) =>
  kd === null ? 'bg-neutral-200 text-neutral-600' : kd <= 24 ? 'bg-emerald-100 text-emerald-800' : kd <= 29 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800';
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

export default function Page() {
  if (process.env.VERCEL_ENV === 'production' || process.env.SHOW_KEYWORD_MAP === '0') notFound();

  const rows: Row[] = [];
  for (const [url, e] of Object.entries(KEYWORD_PAGES as unknown as Record<string, { focus: KW }>))
    rows.push({ url, type: 'Page', kw: e.focus });
  for (const [s, e] of Object.entries(KEYWORD_PRODUCTS as unknown as Record<string, { focus: KW }>))
    rows.push({ url: `/shop/new-notes/${s}`, type: 'Product', kw: e.focus });
  for (const [s, kw] of Object.entries(KEYWORD_POSTS as unknown as Record<string, KW>))
    rows.push({ url: `/blog/${s}`, type: 'Blog', kw });

  const intentCount: Record<string, number> = { T: 0, C: 0, I: 0, N: 0 };
  for (const r of rows) intentCount[r.kw.intent.charAt(0)] = (intentCount[r.kw.intent.charAt(0)] || 0) + 1;
  const withVol = rows.filter((r) => num(r.kw.vol) !== null);
  const maxVol = Math.max(...withVol.map((r) => num(r.kw.vol) as number));
  const totalVol = withVol.reduce((a, r) => a + (num(r.kw.vol) as number), 0);

  const scorecard: [string, string, string][] = [
    ['pass', 'Homepage: ONE primary, no secondaries, ~0.4% density', 'australian prop money, 6 mentions / 2,080 words (0.29%)'],
    ['pass', 'Primary is T/C with KD 24 or lower', 'Home KD 21, Shop KD 19'],
    ['pass', 'One keyword = one URL', '0 duplicate primaries (was 8)'],
    ['pass', 'Product title "{Name} | Buy Online Australia"', '10 / 10 (was 0 / 10)'],
    ['pass', 'Product meta 110-158 with price + keyword', '10 / 10 (was 3 / 10)'],
    ['pass', 'Category pages not thin', '259-427 words (was 91-101)'],
    ['pass', 'Exactly one H1, canonical, HTTP 200', '82 / 82 URLs'],
    ['pass', 'Informational terms only on blogs; new 10 posts unique', '10 / 10 unique primaries'],
    ['warn', 'No keyword stuffing', '19 posts de-bolded; 11 still say "fake" 3+ times'],
    ['warn', 'Blog depth', '11 of 53 posts under 200 words; 17 metas under 110'],
    ['warn', 'Every keyword backed by bank data', '10 buy terms have data (20-30/mo); 3 blog + About/Contact n/a'],
    ['warn', 'Title length 60 or fewer', '30 titles over 60 (brand suffix on blog posts)'],
  ];
  const pass = scorecard.filter((s) => s[0] === 'pass').length;

  const beforeAfter: [string, number, number, number, string][] = [
    ['Product titles with buy modifier', 0, 10, 10, 'of 10'],
    ['Product metas in range', 3, 10, 10, 'of 10'],
    ['Duplicate keyword primaries', 8, 0, 8, 'URLs-groups'],
    ['Category words (min)', 91, 259, 300, 'words'],
    ['Posts with bolded keyword runs', 19, 0, 19, 'posts'],
    ['Duplicate URLs / slugs', 1, 0, 1, 'slug'],
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-6 text-[#1A1414]">
      <header>
        <h1 className="text-2xl font-bold">Keyword Mapping &amp; Audit Summary</h1>
        <p className="text-sm opacity-70">
          WebForge golden rule: high turnover. Buy-intent keywords on money pages, one keyword = one URL, no stuffing. Local build,
          82 URLs, crawled 2026-10-12. Preview only; not pushed.
        </p>
      </header>

      {/* 1. Scorecard */}
      <section>
        <h2 className="mb-2 text-lg font-bold">1. Golden-rule scorecard</h2>
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
        <h2 className="mb-2 text-lg font-bold">2. Before → after</h2>
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
                <Bar value={before} max={max} tone="bg-rose-400" />
                <Bar value={after} max={max} tone="bg-emerald-500" />
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
            Mapped primaries with bank volume: <b>{withVol.length}</b> of {rows.length}. Combined monthly searches (sum of primaries):{' '}
            <b>{totalVol.toLocaleString('en-AU')}</b>.
          </p>
          <p className="mt-2 text-sm opacity-70">
            Almost every buy-intent term is ~20 searches a month. The only large terms are the head keyword (australian prop money,
            720) and the generic fake/imitation money terms (1,300-1,600, KD 36-38, supporting only).
          </p>
        </div>
      </section>

      {/* 4. Mapping table */}
      <section>
        <h2 className="mb-2 text-lg font-bold">4. Page ↔ primary keyword (one keyword = one URL)</h2>
        <p className="mb-2 text-xs opacity-70">
          KD colour: green 24 or lower (primary-eligible), amber 25-29 (secondary / transactional add-on), red 30+ (supporting only), grey = no data.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b">
                <th className="p-1">Type</th>
                <th className="p-1">URL</th>
                <th className="p-1">Primary keyword</th>
                <th className="p-1">Int</th>
                <th className="p-1 w-40">Volume</th>
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
                      {v === null ? <span className="opacity-50">n/a</span> : (
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

      {/* 5. Technical */}
      <section>
        <h2 className="mb-2 text-lg font-bold">5. Technical and AI readiness (live site scores, before deploy)</h2>
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
          <li>sitemap.xml: real lastmod dates, hreflang en-AU + x-default on every URL, 0 non-200.</li>
          <li>llms.txt + new llms-full.txt (Markdown of products, FAQs and 53 guides).</li>
          <li>Not run: GTmetrix (needs account) and RankMath analyzer (asks for an email).</li>
        </ul>
      </section>

      {/* 6. Open */}
      <section>
        <h2 className="mb-2 text-lg font-bold">6. Open items before you conclude</h2>
        <ol className="list-decimal pl-5 text-sm">
          <li>Thin and short-meta older posts (11 under 200 words, 17 metas under 110).</li>
          <li>Owner call: robots says ai-train=no but allows training crawlers.</li>
          <li>Held: "1 1 prop money" (size compliance) and any "polymer" terms (site uses paper).</li>
          <li>Semrush volume needed: music-video, double-sided, Melbourne/Sydney, wholesale, custom printing terms.</li>
          <li>Contact phone is still a placeholder; nothing deployed yet.</li>
        </ol>
      </section>
    </div>
  );
}
