// One-off 2026-10-20: enforce one keyword = one URL in src/config/keyword-map.js and drop KD>28 secondaries.
const fs = require('fs')
const f = 'src/config/keyword-map.js'
let s = fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n')
const rep = (a, b) => {
  if (!s.includes(a)) throw new Error('missing: ' + a.slice(0, 60))
  s = s.replace(a, () => b)
}
// pages
rep("secondary: [k('prop money supplier', 'I', null, 1), k('prop shop australia', 'C', null, 15), k('m-prop', 'I', 70, 22), k('prop banknotes', 'I/T', null, 15), k('prop house australia', 'N', null, 31)],",
    "secondary: [k('money props', 'C', 10, 5), k('prop shop australia', 'C', null, 15)],")
rep("secondary: [k('buy prop money near me', 'T', 20, 7), k('prop money melbourne', 'C', null, null), k('prop money sydney', 'C', null, null), k('movie prop hire melbourne', 'C', null, 39), k('contact propps', 'N', null, null)],",
    "secondary: [k('prop money melbourne', 'C', null, null), k('prop money sydney', 'C', null, null), k('contact propps', 'N', null, null)],")
rep("secondary: [k('prop money for photoshoot', 'C', null, 26), k('photoshoot props australia', 'C', null, 17), k('prop money for photography', 'T', null, 13), k('prop dollar bills', 'T', 20, 21), k('dollar bills prop', 'T', null, 35)],",
    "secondary: [k('prop money for photoshoot', 'C', null, 26), k('prop dollar bills', 'T', 20, 21)],")
rep("k('toy money', 'C', 170, 15), k('kids play money', 'C', 20, 14), k('australia play money', 'C', 140, 10)],",
    "k('toy money', 'C', 170, 15), k('childrens play money', 'C', 90, 10), k('australia play money', 'C', 140, 10)],")
rep("secondary: [k('custom money printing', 'I', 20, 10), k('custom play money', 'C', 20, 15), k('personalised play money', 'I/T', null, 3), k('custom prop notes', 'C', null, 10), k('branded prop currency australia', 'C', null, null)],",
    "secondary: [k('custom money printing', 'I', 20, 10), k('custom play money', 'C', 20, 15), k('personalised play money', 'I/T', null, 3), k('branded prop currency australia', 'C', null, null)],")
// products
rep("secondary: [k('film prop money', 'T', 20, 25), k('prop money for movies', 'T', null, 15), k('movie prop money australia', 'C', null, null), k('cinema prop currency australia', 'C', null, null)],",
    "secondary: [k('film prop money', 'T', 20, 25), k('movie prop money australia', 'C', null, null), k('cinema prop currency australia', 'C', null, null)],")
rep("focus: k('bulk prop money', 'I/T', 10, 0),\n    secondary: [k('prop money stacks', 'I/C', 20, 17), k('stack of prop money', 'T', null, 14), k('bag of prop money', 'I/C', null, 12), k('prop money briefcase', 'C', null, 6)],",
    "focus: k('bag of prop money', 'I/C', null, 12),\n    secondary: [k('stack of prop money', 'T', null, 14), k('prop money briefcase', 'C', null, 6)],")
rep("focus: k('prop money for photoshoot', 'C', null, 26),\n    secondary: [k('prop money for photography', 'T', null, 13), k('photoshoot props australia', 'C', null, 17), k('photography props australia', 'C', 20, 9), k('dollar bills prop', 'T', null, 35)],",
    "focus: k('prop money for photography', 'T', null, 13),\n    secondary: [],")
rep("secondary: [k('pretend money', 'T', 20, 22), k('money for pretend play', 'T', null, 14), k('novelty prop money australia', 'C', null, null), k('childrens play money', 'C', 90, 10)],",
    "secondary: [k('money for pretend play', 'T', null, 14)],")
rep("focus: k('custom prop notes', 'C', null, 10),\n    secondary: [k('custom prop money', 'I/T', 20, 5), k('custom money printing', 'I', 20, 10), k('branded prop currency australia', 'C', null, null), k('personalised play money', 'I/T', null, 3)],",
    "focus: k('custom prop notes', 'C', null, 10),\n    secondary: [],")
fs.writeFileSync(f, s.replace(/\n/g, '\r\n'))
