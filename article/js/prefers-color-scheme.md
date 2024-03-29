# css

```css
@media (prefers-color-scheme: dark) {
  html {
    background: #000;
  }
}

@media (prefers-color-scheme: light) {
  html {
    background: #fff;
  }
}
```

# js

```js
export const isDark = () => {
  const { matchMedia } = window
  return matchMedia('(prefers-color-scheme: dark)').matches
}

export const addListenerPrefersColorScheme = callback => {
  const { matchMedia } = window
  matchMedia('(prefers-color-scheme: dark)').addListener(mediaQueryList => {
    callback(mediaQueryList.matches)
  })
  matchMedia('(prefers-color-scheme: light)').addListener(mediaQueryList => {
    callback(!mediaQueryList.matches)
  })
}
```

# Reference

- [MDN matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
