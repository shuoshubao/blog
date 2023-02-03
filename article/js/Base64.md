# Browser

```js
// 编码
const encodedData = btoa('shuoshubao') // 'c2h1b3NodWJhbw=='

// 解码
const decodedData = atob(encodedData) // 'shuoshubao'
```

# Nodejs

`btoa` 和 `atob` 也可以直接在 nodejs 中使用.

- Stability: 3 - Legacy. Use Buffer.from(data, 'base64') instead.
- Stability: 3 - Legacy. Use buf.toString('base64') instead.

[nodejs atob](https://nodejs.org/api/globals.html#atobdata)

```js
// 编码
const encodedData = Buffer.from('shuoshubao').toString('base64') // 'c2h1b3NodWJhbw=='

// 解码
const decodedData = Buffer.from(encodedData, 'base64').toString() // 'shuoshubao'
```

# Unicode 字符串

## encodeURIComponent

```js
// 编码
const encodedData = btoa(encodeURIComponent('硕鼠宝')) // 'JUU3JUExJTk1JUU5JUJDJUEwJUU1JUFFJTlE'

// 解码
const decodeURIComponent(atob(encodedData)) // '硕鼠宝'
```

## Uint16Array

```js
const encode = string => {
  const codeUnits = new Uint16Array(string.length)
  for (let i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = string.charCodeAt(i)
  }
  const charCodes = new Uint8Array(codeUnits.buffer)
  let result = ''
  for (let i = 0; i < charCodes.byteLength; i++) {
    result += String.fromCharCode(charCodes[i])
  }
  return result
}
```

```js
const decode = binary => {
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  const charCodes = new Uint16Array(bytes.buffer)
  let result = ''
  for (let i = 0; i < charCodes.length; i++) {
    result += String.fromCharCode(charCodes[i])
  }
  return result
}
```

# Reference

[MDN atob](https://developer.mozilla.org/zh-CN/docs/Web/API/atob)
[MDN btoa](https://developer.mozilla.org/zh-CN/docs/Web/API/btoa)
