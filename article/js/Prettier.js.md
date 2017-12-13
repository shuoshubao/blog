# Prettier.js

```
import fs from 'fs'
import glob from 'glob'
import chalk from 'chalk'
import prettier from 'prettier'

let fileList = glob.sync('src/**/*.js')

const prettierOptions = {
  "useTabs": false,
  "tabWidth": 4,
  "printWidth": 1000,
  "singleQuote": true, // 单引号
  "semi": true, // 分号
  "trailingComma": "none", // 尾逗号
  "bracketSpacing": false, // true: { foo: bar }; false: {foo: bar}
  "jsxBracketSameLine": false, // 将 > 放在同一行
  "parser": "babylon", // 'babylon' | 'flow' | 'json' | 'typescript' | 'postcss' | 'json' | 'graphql' | 'markdown'
  "insertPragma": false, // 在顶部插入注释 /** @format */
  "arrowParens": "avoid" // 'avoid': x => x; 'always': (x) => x
}

const timeInfo = `prettier 共处理${fileList.length}个文件, 共耗时`
console.time(timeInfo)
const prettierFile = src => new Promise((resolve, reject) => {
  fs.readFile(src, (err, buffer) => {
    if (err) {
      reject(err)
    } else {
      const str = buffer.toString()
      try {
        const str2 = prettier.format(str, prettierOptions)
        fs.writeFileSync(src, str2)
        console.log(src)
        resolve(src)
      } catch (e) {
        reject([e, src])
      }
    }
  })
})

Promise
  .all(fileList.map(v => prettierFile(v)))
  .then(() => console.timeEnd(timeInfo))
  .catch(([e, src]) => {
    console.log(`${chalk.red('请检查文件: ')}${chalk.blue(src)}`)
    console.log(e)
  })
```

# Referrence

> https://www.npmjs.com/package/prettier
