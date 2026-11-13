// Submits every URL in the LIVE sitemap to IndexNow (Bing, DuckDuckGo via Bing, Yandex, Seznam, Naver).
// Domain and key come from src/config/site.js (single source of truth). Never fails a build: exits 0 on any problem.
// Usage: node scripts/indexnow-submit.mjs        (run by .github/workflows/indexnow.yml after each deploy)
import { SITE } from '../src/config/site.js';

const host = SITE.domain;
const key = SITE.indexNowKey;
const base = `https://${host}`;

try {
  const xml = await (await fetch(`${base}/sitemap.xml`)).text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()).filter((u) => u.startsWith(base));
  if (!urls.length) { console.log('IndexNow: no sitemap URLs found, nothing sent'); process.exit(0); }
  const keyOk = (await (await fetch(`${base}/${key}.txt`)).text()).trim() === key;
  if (!keyOk) { console.log('IndexNow: key file not live yet, nothing sent'); process.exit(0); }
  const res = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key, keyLocation: `${base}/${key}.txt`, urlList: urls }),
  });
  console.log(`IndexNow: ${urls.length} URLs sent, HTTP ${res.status}`);
} catch (e) {
  console.log('IndexNow: skipped (' + (e && e.message) + ')');
}
