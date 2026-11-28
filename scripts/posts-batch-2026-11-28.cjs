// Merged 2026-11-28 batch: 10 posts (A + B) with the extra sections. node scripts/apply-new-posts.cjs scripts/posts-batch-2026-11-28.cjs
const extra = require('./posts-extra-2026-11-28.cjs');
const all = [...require('./posts-batch-2026-11-28a.cjs'), ...require('./posts-batch-2026-11-28b.cjs')];
module.exports = all.map((p) => {
  const add = extra[p.slug];
  if (!add) throw new Error('no extra for ' + p.slug);
  const marker = '## Where to go next';
  const at = p.content.lastIndexOf(marker);
  if (at < 0) throw new Error('no marker in ' + p.slug);
  const content = p.content.slice(0, at) + add + '\n\n' + p.content.slice(at);
  let excerpt = p.excerpt;
  if (excerpt.length > 158) excerpt = excerpt.slice(0, 155).replace(/\s+\S*$/, '') + '.';
  return { ...p, content, excerpt };
});
