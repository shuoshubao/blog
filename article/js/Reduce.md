> 虽然你去百度上搜索 `reduce`, 发现只给了一个求和这一个 demo, 但别以为 reduce 的作用就止于求和

# Number

## 求和

```js
const sum = arr => arr.reduce((prev, cur) => prev + cur)
```

## 极值

```js
const min = arr => arr.reduce((prev, cur) => Math.min(prev, cur))
const max = arr => arr.reduce((prev, cur) => Math.max(prev, cur))
```

## 阶乘

```js
const factorial = N => Array.from(Array(N), (v, i) => i + 1).reduce((prev, cur) => prev * cur)

factorial(5) // 120
```

# Array

```js
// 需求
// 数据源
const data = [
  '1000001001',
  '1000001002',
  '1000001003',
  '2000001009',
  '2000001008',
]
// 需要得到
{
  '10000': ['1000001001', '1000001002', '1000001003'],
  '20000': ['200001009', '200001008']
}

const convertArrayToJson = arr => arr.reduce((prev, cur) => {
  const short = cur.slice(0, 6)
  const temp = prev[short]
  if(temp) {
    prev[short].push(cur)
  }else {
    prev[short] = [cur]
  }
  return prev
}, {})

const ret = convertArrayToJson(data)
```

```js
const data = {
  a: {
    b: {
      c: 1,
      d: 2
    }
  }
}

const keys = 'a.b.d'

const ret = keys.split('.').reduce((prev, cur) => prev[cur], data)

console.log(ret) // 2
```

# Object

## filter 筛选对象

```js
const filter = (json, attrs) =>
  attrs.reduce((prev, cur) => {
    prev[cur] = json[cur]
    return prev
  }, {})

const data = {
  name: 'shuoshubao',
  age: 25,
  sex: 1
}

const filterData = filter(data, ['name', 'age'])
// {name: 'shuoshubao', age: 25}
```

## omit 过滤对象

```js
const omit = (json, attrs) =>
  Object.keys(data)
    .filter(v => !attrs.includes(v))
    .reduce((prev, cur) => {
      prev[cur] = json[cur]
      return prev
    }, {})

const data = {
  name: 'shuoshubao',
  age: 25,
  sex: 1
}

const omitData = omit(data, ['name', 'age'])
// {sex: 1}
```
