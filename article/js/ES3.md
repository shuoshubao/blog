# Number

## property

* Number.MAX_VALUE
* Number.MIN_VALUE
* Number.NaN
* Number.NEGATIVE_INFINITY
* Number.POSITIVE_INFINITY

## method

* Number.prototype.toFixed(num)
* Number.prototype.toExponential(num)
* Number.prototype.toPrecision(num)

## spec

* Number.prototype
* Number.constructor
* Number.prototype.toString()
* Number.prototype.valueOf()


# String

## property

* String.prototype.length

## method

* String.prototype.charAt(index)
* String.prototype.charCodeAt(index)
* String.prototype.toLowerCase()
* String.prototype.toUpperCase()
* String.prototype.concat(stringX)
* String.prototype.indexOf(searchVal, fromIndex)
* String.prototype.lastIndexOf(searchVal, fromIndex)
* String.prototype.slice(start, end)
* String.prototype.substr(start, length)
* String.prototype.substring(start, end)
* String.prototype.split(separator[, howmany])
* String.prototype.replace(regexp | substr, replacement)
* String.prototype.search(regexp)
* String.prototype.match(searchval, regexp)

## spec

* String.prototype
* String.constructor
* String.prototype.toString()
* String.prototype.valueOf()


# Array

## property

* Array.prototype.length

## method

* Array.prototype.concat(arrayX)
* Array.prototype.join()
* Array.prototype.push(newVal[, ...newValX])
* Array.prototype.pop()
* Array.prototype.shift()
* Array.prototype.unshift(newVal[, ...newValX])
* Array.prototype.reverse()
* Array.prototype.sort([sortby])
* Array.prototype.slice(start, end)
* Array.prototype.splice(index, howmany[, ...newValX])

## spec

* Array.prototype
* Array.constructor
* Array.prototype.toString()
* Array.prototype.valueOf()


# Math

## property

* Math.PI
* Math.E
* Math.LN2
* Math.LN10
* Math.LOG2E
* Math.LOG10E
* Math.SQRT1_2
* Math.SQRT2

## method

* Math.abs(x)
* Math.max(x, y)
* Math.min(x, y)
* Math.random()
* Math.ceil(x)
* Math.floor(x)
* Math.round(x)
* Math.pow(x, y)
* Math.sqrt(x)
* Math.exp(x)
* Math.log(x)
* Math.sin(x)
* Math.cos(x)
* Math.tan(x)
* Math.asin(x)
* Math.acos(x)
* Math.atan(x)
* Math.atan2(y, x)

## spec

* Math.prototype.valueOf()


# Date

## method

* Date()
* Date.parse(datestring)
* Date.prototype.getDay()
* Date.prototype.getTime() // setTime()
* Date.prototype.getDate() // setDate()
* Date.prototype.getMonth() // setMonth()
* Date.prototype.getFullYear() // setFullYear()
* Date.prototype.getHours() // setHours()
* Date.prototype.getMinutes() // setMinutes()
* Date.prototype.getSeconds() // setSeconds()
* Date.prototype.getMilliseconds() // setMilliseconds()

## spec

* Date.prototype
* Date.constructor
* Date.prototype.toString()
* Date.prototype.valueOf()


# RegExp

## property

* RegExp.prototype.global
* RegExp.prototype.ignoreCase
* RegExp.prototype.multiline
* RegExp.prototype.lastIndex
* RegExp.prototype.source

## method

* RegExp.prototype.compile(regexp, modifier)
* RegExp.prototype.exec(string)
* RegExp.prototype.test(string)


# Error

## property

* Error.prototype.name
* Error.prototype.message

## spec

* Error.prototype.toString()

## Derive Error

* SyntaxError
* ReferenceError
* RangeError
* TypeError
* URIError
* EvalError


# Function

## property

* Function.prototype.name
* Function.prototype.length

## method

* Function.prototype.call()
* Function.prototype.apply()
* Function.prototype.bind()

## spec

* Function.prototype.constructor
* Function.prototype.toString()


# Object

## property

* Object.prototype
* Object.prototype.constructor
* Object.prototype.__proto__

## method

* Object.prototype.hasOwnProperty()
* Object.prototype.isPrototypeOf()
* Object.prototype.propertyIsEnumerable()
* Object.prototype.toString()
* Object.prototype.valueOf()


# Global

## property

* undefined
* NaN
* Infinity

## function

* eval()
* Number()
* String()
* isFinite()
* isNaN()
* parseInt()
* parseFloat()
* decodeURIComponent()
* encodeURIComponent()
