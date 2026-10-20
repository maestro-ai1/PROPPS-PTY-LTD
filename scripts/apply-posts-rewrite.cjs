// Applies script./posts-rewrite-2026-10-20.cjs to src/config/site.js (one-off, safe to re-run).
const fs = require('fs')
const file = 'src/config/site.js'
let src = fs.readFileSync(file, 'utf8')
const crlf = src.includes('\r\n')
src = src.replace(/\r\n/g, '\n')
const UPDATED = '2026-10-20'
for (const p of require('./posts-rewrite-2026-10-20.cjs')) {
  const start = src.indexOf(`slug: '${p.slug}'`)
  if (start < 0) throw new Error('slug not found: ' + p.slug)
  const next = src.indexOf('\n  {\n    slug:', start)
  const end = next < 0 ? src.indexOf('\n]', start) : next
  let obj = src.slice(start, end)
  const setLine = (key, value) => {
    const re = new RegExp(`(\n    ${key}: ).*(\n)`)
    if (re.test(obj)) obj = obj.replace(re, (_, a, b) => a + value + b)
    else obj = obj.replace(/\n    category:/, (m) => `\n    ${key}: ${value},${m}`)
  }
  if (p.seoTitle) setLine('seoTitle', JSON.stringify(p.seoTitle).replace(/^"|"$/g, "'") + ',')
  setLine('excerpt', `'${p.excerpt.replace(/'/g, "\'")}',`)
  setLine('readTime', `'${p.readTime}',`)
  obj = obj.replace(/\n    updated: .*\n/, '\n')
  obj = obj.replace(/\n    faqs: \[[\s\S]*?\n    \],\n/, '\n')
  const before = obj
  obj = obj.replace(/\n    content: (`[^`]*`|"(?:[^"\\]|\\.)*"),?(?=\n)/, () => '\n    content: ' + JSON.stringify(p.content) + ',\n    faqs: ' + JSON.stringify(p.faqs, null, 2).replace(/\n/g, '\n    ') + ',\n    updated: \'' + UPDATED + '\',')
  if (obj === before) throw new Error('content not replaced: ' + p.slug)
  src = src.slice(0, start) + obj + src.slice(end)
}
fs.writeFileSync(file, crlf ? src.replace(/\n/g, '\r\n') : src)
