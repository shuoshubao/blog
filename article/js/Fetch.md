# Fetch

## base

```js
fetch(url)
fetch(request)
fetch(url, request)
```

```js
// GET
fetch('a/b')
fetch('a/b?a=b&c=d')
fetch('a/b?${qs.stringify({a: b, c: d})}')
fetch('a/b?${qs.stringify({a: b, c: d})}', {
  headers: {}
})

// POST
fetch('a/b', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: qs.stringify({ a: b, c: d })
})
```

## stream 数据流

> 数据流只能读取一次，一旦读取，数据流就空了。再次读取就不会得到结果。

# Reference

- [Body](#js/Body)
- [Headers](#js/Headers)
- [Request](#js/Request)
- [Response](#js/Response)
- [https://developer.mozilla.org/en-US/docs/Web/API/Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch)
