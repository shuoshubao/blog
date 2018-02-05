# String

* String.raw()
* String.prototype.includes()
* String.prototype.startsWith()
* String.prototype.endsWith()
* String.prototype.repeat()
* String.prototype.at()
* String.prototype.normalize()

# Number

* Number.isFinite()
* Number.isNaN()
* Number.parseInt()
* Number.parseFloat()
* Number.isInteger()
* Number.EPSILON
* Number.isSafeInteger()

# Array

* Array.from()
* Array.of()
* Array.prototype.copyWithin(target, start = 0, end = this.length)
* Array.prototype.find()
* Array.prototype.findIndex((value, index, arr) => {})
* Array.prototype.fill()
* Array.prototype.keys()
* Array.prototype.values()
* Array.prototype.entries()

# Math

* Math.trunc()
* Math.sign()
* Math.cbrt()
* Math.clz32()
* Math.imul()
* Math.fround()
* Math.hypot()
* Math.expm1()
* Math.log1p()
* Math.log10()
* Math.log2()
* Math.sinh()
* Math.cosh()
* Math.tanh()
* Math.asinh()
* Math.acosh()
* Math.atanh()

# Function

* Function.prototype.name

# Object

* obj[method].name
* Object.is()    // +0 != 0, NaN == NaN
* Object.assign()
* Object.getOwnPropertyDescriptor()
* Object.setPrototypeOf()
* Object.getPrototypeOf()
* Object.prototype.__proto__
* 扩展运算符(...)

# Symbol

## static method

* Symbol.for()
* Symbol.keyFor()

# Set [WeakSet]

* new Set()
* new Set([]) // array or array-like

## property

* Set.prototype.size

## method

* Set.prototype.add(value)
* Set.prototype.delete(value)
* Set.prototype.has(value)
* Set.prototype.clear()

## Iterator

* Set.prototype.keys()
* Set.prototype.values()
* Set.prototype.entries()
* Set.prototype.forEach()

> Array.from(setInstance)  // Set -> Array
> ...   // Set -> flat to parameter in Function or menber in Array


# Map [WeakSet]

## property

* Map.prototype.size

## method

* Map.prototype.get(key)
* Map.prototype.set(key, value)
* Map.prototype.has(key)
* Map.prototype.delete(key)
* Map.prototype.clear()

## Iterator

* Set.prototype.keys()
* Set.prototype.values()
* Set.prototype.entries()
* Set.prototype.forEach()


# Proxy

## static method

* Proxy.revocable(target, handler)

## method

* Proxy.prototype.get(target, propKey, receiver)
* Proxy.prototype.set(target, propKey, value, receiver)
* Proxy.prototype.has(target, propKey)
* Proxy.prototype.deleteProperty(target, propKey)
* Proxy.prototype.ownKeys(target)
* Proxy.prototype.getOwnPropertyDescriptor(target, propKey)
* Proxy.prototype.defineProperty(target, propKey, propDesc)
* Proxy.prototype.preventExtensions(target)
* Proxy.prototype.getPrototypeOf(target)
* Proxy.prototype.isExtensible(target)
* Proxy.prototype.setPrototypeOf(target, proto)
* Proxy.prototype.apply(target, object, args)
* Proxy.prototype.construct(target, args)


# Reflect

## static method

* Reflect.apply(target, thisArg, args)
* Reflect.construct(target, args)
* Reflect.get(target, name, receiver)
* Reflect.set(target, name, value, receiver)
* Reflect.defineProperty(target, name, desc)
* Reflect.deleteProperty(target, name)
* Reflect.has(target, name)
* Reflect.ownKeys(target)
* Reflect.isExtensible(target)
* Reflect.preventExtensions(target)
* Reflect.getOwnPropertyDescriptor(target, name)
* Reflect.getPrototypeOf(target)
* Reflect.setPrototypeOf(target, prototype)


# Promise

## static method

* Promise.resolve()
* Promise.rejecr()
* Promise.all()
* Promise.race()
* Promise.try()

## method

* Promise.prototype.then()
* Promise.prototype.catch()
* Promise.prototype.finally()


# Generator

* Generator.prototype.throw()
* Generator.prototype.return()

# ArrayBuffer

## property

* ArrayBuffer.prototype.byteLength

## static method

* ArrayBuffer.isView()

## method

* ArrayBuffer.prototype.slice()

## TypedArray

```
new Int8Array()           // 8 位有符号整数，长度 1 个字节
new Uint8Array()          // 8 位无符号整数，长度 1 个字节
new Uint8ClampedArray()   // 8 位无符号整数，长度 1 个字节，溢出处理不同
new Int16Array()          // 16 位有符号整数，长度 2 个字节
new Uint16Array()         // 16 位无符号整数，长度 2 个字节
new Int32Array()          // 32 位有符号整数，长度 4 个字节
new Uint32Array()         // 32 位无符号整数，长度 4 个字节
new Float32Array()        // 32 位浮点数，长度 4 个字节
new Float64Array()        // 64 位浮点数，长度 8 个字节

.BYTES_PER_ELEMENT
.of()
```

### property

* TypedArray.prototype.BYTES_PER_ELEMENT
* TypedArray.prototype.byteLength
* TypedArray.prototype.byteOffset
* TypedArray.prototype.length

### static method

* TypedArray.from()

### method

* TypedArray.prototype.join(separator)
* TypedArray.prototype.slice(start=0, end=this.length)
* TypedArray.prototype.sort(comparefn)
* TypedArray.prototype.reverse()
* TypedArray.prototype.indexOf(searchElement, fromIndex=0)
* TypedArray.prototype.lastIndexOf(searchElement, fromIndex?)
* TypedArray.prototype.findIndex(predicate, thisArg?)
* TypedArray.prototype.forEach(callbackfn, thisArg?)
* TypedArray.prototype.map(callbackfn, thisArg?)
* TypedArray.prototype.filter(callbackfn, thisArg?)
* TypedArray.prototype.reduce(callbackfn, initialValue?)
* TypedArray.prototype.reduceRight(callbackfn, initialValue?)
* TypedArray.prototype.some(callbackfn, thisArg?)
* TypedArray.prototype.every(callbackfn, thisArg?)
* TypedArray.prototype.find(predicate, thisArg?)
* TypedArray.prototype.fill(value, start=0, end=this.length)
* TypedArray.prototype.entries()
* TypedArray.prototype.values()
* TypedArray.prototype.keys()
* TypedArray.prototype.copyWithin(target, start[, end = this.length])
* TypedArray.prototype.toString()
* TypedArray.prototype.toLocaleString(reserved1?, reserved2?)
* TypedArray.prototype.set()
* TypedArray.prototype.subarray()


***

***


# 语法糖

## const let

* const
* let

## template string

```
`hi, ${name}`
```

## 指数运算符

```
2 ** 3   // 8
```

## 解构赋值

* String
* Number
* Boolean
* Array
* 函数参数
* 对象

```
const {Component} = React

const {
    a,
    b = 1
} = data;

const a = ({b: b1, c: {d: d1}}) => {
    // b1, d1
};

Promise.all([pro1, pro2])
    .then([res1, res2] => {

    });

Promise.all([a, b].map(v => pro))
    .then([res1, res2] => {

    });
```

## Iterator

* for...of
* String、Array、array-like、Set、Map、WeakSet、WeakMap

## typeof

* number、string、boolean、undefined、function、object、`symbol`

## 数组 spread ...

```
push(...[1, 2, 3])
push(0, ...[1, 2, 3], 4)
[0, ...[1, 2], ...[3, 4], 5]
```

## 函数 rest 参数 ...

```
a(...args) {
    // args
}
```

## 函数参数默认值

```
const a = (name, sex = 1, data = {}) => {
    // data
};
```

## 箭头函数

```
const a = () => {}
const a = (b, c = 1) => {}
```

## Class

```
class ClassA {
class ClassB extends ClassA {
    // new.target
    console.log(new.target);
    // 静态属性
    static staticProp = 1;
    // 私有属性
    #privatePropA=0;
    // 私有方法
    #privateMethodA() {

    }
    // 实例属性
    stateA = {};
    // 静态方法
    static classMethod() {

    }
    constructor(props) {
        super(props);
        // 实例属性
        this.stateB = {};
        // 私有属性
        this.#privatePropA
        // 绑定this
        this.methodA = this.methodA.bind(this);
    }
    get propA() {}
    set propA(val) {}
    // 实例方法
    methodA() {

    }
    // 绑定this
    methodB: () => {

    }
}

ClassB.name
```

## Decorator

```
// 修饰类
@decorA
class A {
    // 修饰类的方法
    @decorB
    mathodB() {

    }
}

const decorA = target => {

}

// babel-plugin-transform-decorators
```

## module

```
const A = 1
export {A}
export {A as B}
export const C = 1;
export const D = () => {};
export default A
export {A as default}
export default 'hello'
export default () => {}

import _ from 'lodash'
import * as lodash from '_'
import {each, map} from 'lodash'
import _, {each as forEach, map} from 'lodash'

export {each, map} from '_'
export {each, map as _map} from '_'

export * from '_'
export {each as default} from '_'
export {default as lodash} from '_'

import(specifier)
    .then(module => {})
    .catch(e => {})
```



# Referrence

> [http://es6.ruanyifeng.com/](http://es6.ruanyifeng.com/)
>
> [http://www.ecma-international.org/ecma-262/6.0/](http://www.ecma-international.org/ecma-262/6.0/)
>
> [http://kangax.github.io/compat-table/es5/](http://kangax.github.io/compat-table/es5/)
>
> [http://kangax.github.io/compat-table/es6/](http://kangax.github.io/compat-table/es6/)
