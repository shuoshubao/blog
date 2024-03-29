# Useage

### install

```sh
npm i -D js-beautify
```

### use

```js
const beautify = require('js-beautify')

const { html: beautify_html, css: beautify_css, js: beautify_js } = require('js-beautify')

beautify_js('code...', jsbeautifyrc)
```

# Config

> CLI Options

```json
{
  "indent_size": 4,
  "indent_char": " ",
  "indent_with_tabs": false,
  "eol": "\n",
  "end_with_newline": false,
  "indent_level": 0,
  "preserve_newlines": true,
  "max_preserve_newlines": 10,
  "space_in_paren": false,
  "space_in_empty_paren": false,
  "jslint_happy": false,
  "space_after_anon_function": false,
  "brace_style": "collapse",
  "unindent_chained_methods": false,
  "break_chained_methods": false,
  "keep_array_indentation": false,
  "unescape_strings": false,
  "wrap_line_length": 0,
  "e4x": false,
  "comma_first": false,
  "operator_position": "before-newline"
}
```

> .jsbeautifyrc

# Referrence

- http://jsbeautifier.org/
- https://github.com/beautify-web/js-beautify
- https://www.npmjs.com/package/js-beautify
