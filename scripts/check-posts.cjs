// Usage: node scripts/check-posts.cjs [slug-substring]. Prints rendered word count, meta length, bad internal links.
import('../src/config/site.js').then(m => {
  const slugs = new Set(m.POSTS.map(p => p.slug))
  const filter = process.argv[2]
  for (const p of m.POSTS) {
    if (filter && !p.slug.includes(filter)) continue
    const t = p.content + ' ' + (p.faqs || []).map(f => f.a).join(' ')
    const w = (p.content + ' ' + (p.faqs || []).map(f => f.q + ' ' + f.a).join(' '))
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/^(##+|-|\d+\.) /gm, '').replace(/\*\*/g, '').split(/\s+/).length
    const bad = [...t.matchAll(/\(\/blog\/([^/)]+)\//g)].filter(x => !slugs.has(x[1])).map(x => x[1])
    const meta = p.excerpt.length
    const flag = w < 1500 || meta < 110 || meta > 158 || bad.length ? ' <<<' : ''
    console.log(String(w).padStart(5), String(meta).padStart(4), p.updated ? 'U' : '-', p.slug, bad.length ? 'BAD:' + bad.join(',') : '', flag)
  }
})
