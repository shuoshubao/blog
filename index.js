const { readFileSync, writeFileSync, lstatSync } = require('fs')
const { resolve } = require('path')

const data = JSON.parse(readFileSync('./data/db.json').toString())

const CategoryData = JSON.parse(JSON.stringify(data))
const ContentData = {}

Object.entries(data).forEach(([k, v]) => {
  v.forEach((v2, i2) => {
    const { name, title } = v2
    const filepath = resolve(__dirname, 'article', k, `${name}.md`)
    const content = readFileSync(filepath).toString()
    const { size, ctime, mtime } = lstatSync(filepath)
    ContentData[[k, name].join('/')] = {
      title,
      content
    }
    Object.assign(CategoryData[k][i2], { size, ctime, mtime })
  })
})

writeFileSync('./store/data.json', JSON.stringify(CategoryData, ' ', 2) + '\n')
writeFileSync('./store/all.json', JSON.stringify(ContentData, ' ', 2) + '\n')
