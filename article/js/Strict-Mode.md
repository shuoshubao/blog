1. 严格模式下无法再意外创建全局变量 (Uncaught ReferenceError: xxx is not defined)
2. 严格模式会使引起静默失败(silently fail, 注:不报错也没有任何效果)的赋值操抛出异常
3. 在严格模式下, 试图删除不可删除的属性时会抛出异常(之前这种操作不会产生任何效果) (Uncaught TypeError: Cannot delete property 'xxx' of function Object())
4. 在Gecko版本34之前，严格模式要求一个对象内的所有属性名在对象内必须唯一 (ES6中已修复)
5. 严格模式要求函数的参数名唯一 (Uncaught SyntaxError: Duplicate parameter name not allowed in this context)
6. 严格模式禁止八进制数字语法 (Uncaught SyntaxError: Octal literals are not allowed in strict mode.)
7. ES6中的严格模式禁止设置primitive值的属性 (String Number Boolean Symbol)


1. 严格模式禁用 with
2. 严格模式下的 eval 不再为上层范围(surrounding scope,注:包围eval代码块的范围)引入新变量
3. 严格模式禁止删除声明变量 (Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.)

1. eval 和 arguments 不能通过程序语法被绑定(be bound)或赋值 (Uncaught SyntaxError: Unexpected eval or arguments in strict mode)
2. 严格模式下，参数的值不会随 arguments 对象的值的改变而变化
3. 不再支持 arguments.callee (Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them)

1. 在严格模式下通过this传递给一个函数的值不会被强制转换为一个对象 (call apply bind, 没传this则为 undefined)
2. 在严格模式中再也不能通过广泛实现的ECMAScript扩展“游走于”JavaScript的栈中
3. 严格模式下的arguments不会再提供访问与调用这个函数相关的变量的途径

1. 在严格模式中一部分字符变成了保留的关键字: let, public, static, yield, implements, interface, package, private, protected
2. 严格模式禁止了不在脚本或者函数层面上的函数声明

# Referrence

> [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
>
> [https://www.ecma-international.org/ecma-262/5.1/#sec-10.1.1](https://www.ecma-international.org/ecma-262/5.1/#sec-10.1.1)
>
> [https://www.ecma-international.org/ecma-262/6.0/#sec-strict-mode-code](https://www.ecma-international.org/ecma-262/6.0/#sec-strict-mode-code)
