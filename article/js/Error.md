# 语法

```
new Error([message])
```

# 构造函数

* Error
* SyntaxError
* ReferenceError
* RangeError
* TypeError
* URIError
* EvalError

# 属性

* Error.prototype.message // 当不传时, 为 undefined
* Error.prototype.name // 非标准; 构造函数的名称  'Error', 'SyntaxError', 'ReferenceError' ...
* Error.prototype.stack // 非标准; 错误的堆栈

# 方法

* Error.prototype.toString()

# 自定义错误

```
function UserError(message) {
  this.message = message || '默认信息';
  this.name = 'UserError';
}

UserError.prototype.toString = function (){
  return this.name + ': "' + this.message + '"';
}

throw new UserError('出错了！');
```

# Referrence

> [http://javascript.ruanyifeng.com/grammar/error.html](http://javascript.ruanyifeng.com/grammar/error.html)
> [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error]https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
