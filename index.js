const { readFileSync, writeFileSync, copyFileSync } = require('fs')
const { resolve } = require('path')

const data = JSON.parse(readFileSync('./data/db.json').toString())

copyFileSync('./data/db.json', './store/db.json')

Object.entries(data).forEach(([k, v]) => {
  v.forEach(v2 => {
    const filepath = resolve(__dirname, 'article', k, `${v2.name}.md`)
    const content = readFileSync(filepath).toString()
    v2.content = content
  })
})

writeFileSync('./store/all.json', JSON.stringify(data, ' ', 2) + '\n')
