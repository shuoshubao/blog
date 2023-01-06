const { readFileSync, writeFileSync } = require('fs')
const { resolve } = require('path')

const data = JSON.parse(readFileSync('./data/db.json').toString())

writeFileSync('./store/db.json', JSON.stringify(data) + '\n')

Object.entries(data).forEach(([k, v]) => {
  v.forEach(v2 => {
    const filepath = resolve(__dirname, 'article', k, `${v2.name}.md`)
    const content = readFileSync(filepath).toString()
    v2.content = content
  })
})

writeFileSync('./store/all.json', JSON.stringify(data) + '\n')
