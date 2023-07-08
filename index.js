const { readFileSync, writeFileSync, lstatSync } = require('fs')
const { resolve } = require('path')
const { execSync } = require('child_process')
const { chunk } = require('lodash')

console.time('generate')

const data = JSON.parse(readFileSync('./data/db.json').toString())

const CategoryData = JSON.parse(JSON.stringify(data))
const ContentData = {}

const encodeText = text => {
  const list = new TextEncoder().encode(text)
  return chunk(list, 100).map(v => v.toString())
}

Object.entries(data).forEach(([k, v]) => {
  v.forEach((v2, i2) => {
    const { name, title } = v2
    const filepath = resolve(__dirname, 'article', k, `${name}.md`)
    const content = readFileSync(filepath).toString()

    const ctime = execSync(`git log --diff-filter=A --pretty=format:"%ad" ${filepath}`).toString()
    const mtime = execSync(`git log -1 --pretty=format:"%ad" ${filepath}`).toString()

    const { size } = lstatSync(filepath)

    ContentData[btoa([k, name].join('/'))] = encodeText(content)

    Object.assign(CategoryData[k][i2], {
      size,
      ctime: new Date(ctime).getTime(),
      mtime: new Date(mtime).getTime()
    })
  })
})

writeFileSync('./store/data.json', JSON.stringify(CategoryData) + '\n')
writeFileSync('./store/all.json', JSON.stringify(ContentData) + '\n')

console.timeEnd('generate')
