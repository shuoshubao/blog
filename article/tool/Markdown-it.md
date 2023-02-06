# markdown-it-custom-block

```js
import MarkdownIt from 'markdown-it/dist/markdown-it'
import MarkdownItCustomBlock from 'markdown-it-custom-block'

const md = MarkdownIt()

md.use(MarkdownItCustomBlock, {
  img(raw) {
    const [index, alt, width, url] = raw.split('#')
    return `<figure>
      <img width='${width}' src="${url}" />
      <figcaption>${alt}</figcaption>
    </figure>`
  },
  example(arg) {
    return `<example-${arg} />`
  },
  video(url) {
    return `<video controls>
      <source src="${url}" type="video/mp4" />
    </video>`
  }
})
```

# markdown-it-container


```md
::: success 提示文案

Success Text

:::

::: info 提示文案

Info Text

:::

::: warning 提示文案

Warning Text

:::

::: error 提示文案

Error Text

:::

::: error

没有标题, 默认使用 type

:::
```

::: success 提示文案

Success Text

:::


::: info 提示文案

Info Text

:::

::: warning 提示文案

Warning Text

:::

::: error 提示文案

Error Text

:::

::: error

没有标题, 默认使用 type

:::

# Packages

- markdown-it-container
- markdown-it-task-lists
- markdown-it-anchor
- markdown-it-attrs
- markdown-it-link-attributes
- markdown-it-custom-block
- markdown-it-deflist
- markdown-it-sup
- markdown-it-sub
- markdown-it-ins
- markdown-it-mark
- markdown-it-footnote
- markdown-it-emoji
- markdown-it-cjk-breaks
- markdown-it-for-inline
- linkify-it

# Referrence

- https://github.com/markdown-it/markdown-it
- https://markdown-it.github.io/markdown-it
- https://markdown-it.github.io
