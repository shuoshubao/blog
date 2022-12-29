- 使用 ReadStream 对象 读取文件

```js
const file = fs.createReadStream(path, [options])

const file = fs.createReadStream('./testFile.txt')
file.on('open', fd => {})
file.on('data', data => {})
file.on('end', () => {})
file.on('error', err => {})
file.pause()
file.resume()
```

- 使用 WriteStream 对象 写入文件

```js
const writable = fs.createWriteStream(path, [options])

writable.write(chunk, [encoding], [callback])
writable.end([chunk], [encoding], [callback])
```
