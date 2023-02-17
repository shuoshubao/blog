# 日期格式化

```js
const formatTime = (date, format = 'YYYY-MM-DD', invalidText = '--') => {
  const WeekTextMap = ['日', '一', '二', '三', '四', '五', '六']
  if (+date <= 0) {
    return invalidText
  }
  const dt = new Date(+date || +new Date(date))
  const year = dt.getFullYear()
  const month = dt.getMonth() + 1
  const day = dt.getDate()
  const hour = dt.getHours()
  const minute = dt.getMinutes()
  const second = dt.getSeconds()
  const week = `星期${WeekTextMap[dt.getDay()]}`
  const parse = {
    YYYY: year,
    MM: month,
    DD: day,
    HH: hour,
    mm: minute,
    ss: second,
    w: week
  }

  parse.yyyy = parse.YYYY
  parse.dd = parse.DD
  parse.hh = parse.HH

  // 补零
  Object.entries(parse).forEach(([k, v]) => {
    parse[k] = String(v).padStart(2, 0)
  })

  // 上午|下午
  parse.a = hour / 12 >= 1 ? 'pm' : 'am'
  parse.A = parse.a.toUpperCase()

  return Object.entries(parse).reduce((prev, [k, v]) => {
    return prev.replace(k, v)
  }, format)
}
```

# 生成数组

```js
Array.from(Array(N), (v, i) => i)
```

```js
Array.apply(null, { length: N }).map(Function.call, Number)
```

# 获取数组的最后一位

```js
const last = arr => {
  return arr.slice(-1)[0]
}
```

# flex 居中

```css
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

# React

```js
import React, { useState, useEffect } from 'react'

const Index = () => {
  return null
}

Index.displayName = 'Demo'

default Index
```

# memoize

```js
import { cloneDeep, isEqual } from 'lodash'

const memoize = fn => {
  const caches = []
  const memoized = (...args) => {
    const newArgs = cloneDeep(args)
    const item = caches.find(v => {
      return isEqual(v.args, newArgs)
    })
    if (item) {
      return item.data
    }
    const data = fn(...newArgs)
    caches.unshift({
      args: newArgs,
      data
    })
    return data
  }
  memoized.clear = () => {
    caches.splice(0, Infinity)
  }
  return memoized
}
```

# sleep

```js
import { random } from 'lodash'

const sleep = (time = -1) => {
  const sleepTime = time < 0 ? random(2, 5) : time
  return new Promise(resolve => setTimeout(resolve, sleepTime * 1e3))
}
```

# pathsToTree

```js
const pathsToTree = (paths = []) => {
  const resultKey = Symbol()
  const result = []
  const level = { [resultKey]: result }

  paths.sort().forEach(path => {
    path.split('/').reduce((prev, cur, index, arr) => {
      if (!prev[cur]) {
        prev[cur] = {
          [resultKey]: []
        }
        const curPath = arr.slice(0, index + 1).join('/')
        prev[resultKey].push({
          path: curPath,
          children: prev[cur][resultKey]
        })
      }

      return prev[cur]
    }, level)
  })
  return result
}
```

进阶版

```js
import traverse from 'traverse'
import { isPlainObject, cloneDeep, get } from 'lodash'

const compactPaths = obj => {
  const temp = cloneDeep(obj)
  traverse(temp).forEach(function () {
    if (this.notRoot) {
      this.after(function () {
        if (this.node?.children?.length === 1) {
          this.update(this.node.children[0])
        }
      })
    }
  })

  traverse(temp).forEach(function () {
    if (this.notRoot) {
      this.before(function () {
        if (isPlainObject(this.node)) {
          const name = this.node.path.replace(get(temp, [...this.path.slice(0, -2), 'path'].join('.')) + '/', '')
          this.update({ name, ...this.node })
        }
      })
    }
  })
  return temp
}

const pathsToTree = (paths = []) => {
  const resultKey = Symbol()
  const result = []
  const level = { [resultKey]: result }

  paths.sort().forEach(path => {
    path.split('/').reduce((prev, cur, index, arr) => {
      if (!prev[cur]) {
        prev[cur] = {
          [resultKey]: []
        }
        const curPath = arr.slice(0, index + 1).join('/')
        prev[resultKey].push({
          path: curPath,
          children: prev[cur][resultKey]
        })
      }

      return prev[cur]
    }, level)
  })
  return compactPaths(result)
}
```

# npm

```sh
# 发 beta 包
npm publish --tag beta

# 第一次发包
npm publish --access=public
```

# git

```sh
# 只下载最新源码
git clone --depth=1
```
