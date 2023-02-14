# 背景

最近一段时间，一直在跟进团队里同学发起的 code-review，针对每个 review 都提了不少可以优化的建议。在这个过程中发现一些在每次 review 基本都会出现的通用问题，现整理成文档的形式供大家阅读，希望大家能从中有所收获，从而在各自的业务项目中能提高代码的**可读性**和可维护性。

可读性差的代码虽然很多，但是究其原因，还是可以进行以下简单的分类：

- js-api 的使用
- js 语法相关
- jsx 相关的问题
- 工具库的使用
- js 设计的糟粕

# js-api 的使用

## indexOf 与 includes

**bad-code**

```js
colums.indexOf(item) === -1 ? colums.concat(item) : colums;

if (piLiangChuLiDaiBanDict.indexOf(taskKey) !== -1) {}

const isNewListPage = newListPageCitys.indexOf(window._GLOBAL_DATA_.CITY) > -1;

if (`${address[3]}`.indexOf('层') < 0) {}

if (inComplexRole.indexOf(item.name) > 0) {}

<div disabled={[2, 3].indexOf(contractStatus) >= 0} />

if (/税/.test(qiItem.NAME) {}
```

**good-code**

```js
;<div disabled={[2, 3].includes(contractStatus)} />

if (qiItem.NAME.includes('税')) {
}
```

> 在同一个项目中, indexOf 的所有用法基本齐全了~ 其实做的事情就是判断数组或字符串是否包含子项。而这个功能早就在 es6 和 es7 中有标准的 api 来实现，即 **String.prototype.includes** 和 **Array.prototype.includes**

indexOf 的本意是返回子项在数组或字符串中第一次出现的索引值, 而 -1 只是一个特殊值，表示不存在。而 includes 则直接返回一个布尔值，表示是否包含子项。

## find 和 filter

**bad-code**

```js
const { label } = (reallyOptions || []).filter(item => item.value == val)[0]
```

**good-code**

```js
const { label } = (reallyOptions || []).find(item => item.value == val)
```

当你需要的是过滤的所有项时，应使用 filter, 而 find 就是 filter[0] 的快捷方式。当然两者还有其他区别，这里不展开讲。

## map 和 forEach

**bad-code**

```js
const options = []
daiban.map(item => {
  options.push({ value: item, label: item.taskDescription })
})
```

**good-code**

```js
const options = []
daiban.forEach(item => {
  options.push({ value: item, label: item.taskDescription })
})

// 当然，这样写才是最好的
const options = daiban.map(item => {
  return { value: item, label: item.taskDescription }
})
```

map 和 forEach 的作用非常相似, 但区别也很明显。当迭代器里的代码有返回值时, 应使用 map, 否则应使用 forEach。

map 可以理解为 初始值 + forEach + push 的结合体。

# js 语法相关

## 条件语句里写非常长的代码

**bad-code**

```js
if (
  this.state.buyer &&
  this.state.buyer.length &&
  this.state.seller &&
  this.state.seller.length &&
  this.state.participants &&
  this.state.participants.length
) {
  // code
}
```

**good-code**

```js
const { buyer, seller, participants } = this.state
const isValidate = [buyer, seller, participants].every(v => v && v.length)
if (isValidate) {
  // code
}
```

> 问题: 没有利用解构；大量的重复逻辑，条件语句过长可读性差

> 这种写法其实随处可见，源自于万恶的复制粘贴的习惯。一般来说，使用解构和数组的 some 或者 every 就可以解决问题。

**bad-code**

```js
!op.noTips && Toast.offline(data.msg || '数据请求异常', 2)
op.noTips && Toast.hide()
```

**good-code**

```js
if (op.noTips) {
  Toast.hide()
} else {
  Toast.offline(data.msg || '数据请求异常', 2)
}
```

> 上述代码要表达的意思其实就是 **if** 做的事情，如果都这么写，是否就不需要 **if** 语句了？**&&**、 **||**、 **? :** 是完全可以取代 **if** 的。压缩代码量这种事就交给 webpack terser 这些工具处理吧, 我们要写的是可读性高的代码！

## 三目嵌套三目

**bad-code**

```js
const backgroundImageUrl = item.avatar || (item.sex ? (item.sex == 'F' ? Female : Male) : Male)
```

**good-code**

```js
const { avatar, sex } = item
let backgroundImageUrl = avatar
if (!avatar) {
  if (sex) {
    backgroundImageUrl = sex == 'F' ? Female : Male
  } else {
    backgroundImageUrl = Male
  }
}
```

> 这里明显可以看出, 优化后的代码在体积上显著增加了，请感受下两段代码之间可读性的差异。

# jsx 相关的问题

## 三目与 jsx 语法结合使用

**bad-code**

```js
const AllInfo =
  hasInfo && allMessahe ? (
    <div className="all-info">
      <img src={Sigh} alt="icon" />
      <span>{allMessahe}</span>
    </div>
  ) : null
```

**good-code**

```js
let allInfo = null
if (hasInfo && allMessahe) {
  allInfo = (
    <div className="all-info">
      <img src={Sigh} alt="icon" />
      <span>{allMessahe}</span>
    </div>
  )
}
```

**bad-code**

```js
{
  appAuditStatus == 1 && message ? (
    <div styleName="messageContainer">
      <div styleName="iconContainer">
        <span>!</span>
      </div>
      <div styleName="reasonContainer">
        <span>不通过：{message}</span>
      </div>
    </div>
  ) : null
}
```

**bad-code**

```js
{
  appAuditStatus == 1 && message && (
    <div styleName="messageContainer">
      <div styleName="iconContainer">
        <span>!</span>
      </div>
      <div styleName="reasonContainer">
        <span>不通过：{message}</span>
      </div>
    </div>
  )
}
```

> 当三目与 jsx 结合使用时，代码整体看起来非常臃肿。建议三目只用于非常简单的逻辑运算，具体来说最好是只有一行代码。

## map 与 jsx 的结合使用

**bad-code**

```js
{
  data && data.length
    ? data.map((item, index) => {
        return <div>{item}</div>
      })
    : null
}

// 或者这么写
{
  data &&
    data.length &&
    data.map((item, index) => {
      return <div>{item}</div>
    })
}
```

**good-code**

```js
{
  ;(data || []).map((item, index) => {
    return <div>{item}</div>
  })
}
```

> 这个 case 在 react 中非常常见，简单的优化即可让代码更简洁，嵌套少一层，在 jsx 结构复杂时效果更明显。

# 工具库的使用

**bad-code**

```js
this.props.history.push(
  `/tradeschedule?businessId=${getUrlParam('businessId')}` +
    `&eBusinessId=${getUrlParam('eBusinessId')}` +
    `&ucid=${getUrlParam('ucid')}` +
    `&roleName=${getUrlParam('roleName')}` +
    `&docKey=${getUrlParam('docKey')}`,
  { nodeInfo }
)
```

**good-code**

```js
import { pick } from 'lodash'
import { Util } from '@jiaoyi/tangram'

const { getAllUrlParam, stringifyUrl } = Util

const params = pick(getAllUrlParam(), ['businessId', 'eBusinessId', 'ucid', 'roleName', 'docKey'])

this.props.history.push(stringifyUrl('/tradeschedule', params))
```

> 字符串拼接参数这种明显属于高频操作，如果团队中没有封装对应的工具函数，写的次数多了也应该想着去封装下，或者给负责工具库的人提需求。

**bad-code**

```js
<div styleName={['second', second.disabled ? 'disabled' : '', second.using ? 'isUsing' : ''].join(' ')} />
```

**good-code**

```js
import classnames form 'classnames';

<div styleName={classnames('second', { disabled: second.disabled, isUsing: second.using })} />
```

> 这种 case 在项目中也是非常常见的，做的事情很简单，但需要些冗余的代码。classnames 就是为了解决这个场景的。

lodash, classnames, query-string 等等这些都是非常好用的工具库，在 npm 上都是下载量极高的包，如果还没有用上，是否该反思下自己为什么没有用上。

另外，负责工具库的同学，也应加深对流行度极高的工具包的推广工作，以及团队工具库提供的能力是否足够丰富，工具库的使用情况和覆盖度等问题。

# js 语言设计的糟粕

JavaScript 作为一门在 7 天内设计成的语言，存在许多糟糕的设计。下面列举的是一些代码风格相关的设计，（其实很多语言在设计之初，为了让更多的程序员使用自己的语言，就兼容各种各样的语法习惯，这或许是作者的无奈之举），比如：

- 一条语句，分号是可选的
- if 后面的花括号可缺省
- es6 里的箭头函数
  - 参数的括号
  - 返回值的简写

这一类型的就不举例具体代码了，相信大家都能从文字上理解。

# 总结

感谢阅读到这里~ 看完后，可以想下自己是否也正在写着这样的代码，项目中是否也有大量的`bad-code`。

针对此次大幅度的代码优化，我整理了下 bad-code 中反应的一些认知误区：

1. 代码越少，代码就越优雅，代码水平越高
2. 代码能写在一行就是不能再优化的代码
3. 代码的写法越生僻，越能体现开发水平高超

写代码，其实说白了就是在做翻译，先将需求用人类的语音描述清楚，再通过 JavaScript 语言将人类语言翻译成浏览器编译器能识别的代码。在实际工作中，是需要和别的翻译一起协同工作，因此我们翻译的语言，不止要机器能识别，自己能看懂，还要其他同事也能看懂。代码的**可维护性**高于一切。

另外，我们要相信开源的力量，相信业界标准的力量。**prettier** 和 **eslint** (以及 airbnb 的各种 eslint 规范)、**sonar** 都是非常成熟的工具，能在代码层面分析出我们的代码存在的各种问题，并给出推荐的写法。
