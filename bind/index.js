function bindCopy(_this, ...args) {
  var fn = this
  if (typeof fn !== 'function') {
    throw new Error('只有函数才有bind方法')
  }
  function Fn(...args2) {
    return fn.call(this instanceof Fn ? this : _this, ...args, ...args2)
  }
  Fn.prototype = fn.prototype
  return Fn
}
module.exports = bindCopy
//不用ES6
var slice = Array.prototype.slice
function bind() {
  var fn = this
  var _this = arguments[0]
  var arg1 = slice.call(arguments, 1)
  if (typeof fn !== 'function') {
    throw new Error('只有函数才有bind方法')
  }
  function Fn() {
    var arg2 = slice.call(arguments, 0)
    return fn.apply(resultFn.prototype.isPrototypeOf(this) ? this : _this, arg1.concat(arg2))
  }
  Fn.prototype = fn.prototype
  return Fn
}