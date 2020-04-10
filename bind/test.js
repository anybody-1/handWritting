const bind = require('./index')
test1('bind绑定成功')
test2('bind成功绑定this')
test3('bind成功接收P1、P2')
test4('bind可以接收后传的参数')
test5('bind后的函数可以new,并且接收参数')
test6('new 之后成功添加原型属性')
test7('用new生成的对象测试一下')
function test1(message) {
  Function.prototype.bind2 = bind
  console.assert(Function.prototype.bind2 !== 'undefined')
  console.log(message)
}
function test2(message) {
  Function.prototype.bind2 = bind
  function fn() {
    return this
  }
  const Fn = fn.bind2({ name: 'lv' })
  console.assert(Fn().name === 'lv')
  console.log(message)
}
function test3(message) {
  Function.prototype.bind2 = bind
  function fn(p1, p2) {
    return [this, p1, p2]
  }
  const Fn = fn.bind2({ name: 'lv' }, 222, 333)
  console.assert(Fn()[0].name === 'lv')
  console.assert(Fn()[1] === 222)
  console.assert(Fn()[2] === 333)
  console.log(message)
}
function test4(message) {
  Function.prototype.bind2 = bind
  function fn(p1, p2) {
    return [this, p1, p2]
  }
  const Fn = fn.bind2({ name: 'lv' }, 222)
  console.assert(Fn(333)[0].name === 'lv')
  console.assert(Fn(333)[1] === 222)
  console.assert(Fn(333)[2] === 333)
  console.log(message)
}
function test5(message) {
  Function.prototype.bind2 = bind
  function fn(p1, p2) {
    this.p1 = p1
    this.p2 = p2
  }
  const Fn = fn.bind2(undefined, 2, 3)
  const newFn = new Fn()
  console.assert(newFn.p1 === 2)
  console.assert(newFn.p2 === 3)
  console.log(message)
}
function test6(message) {
  Function.prototype.bind2 = bind
  function fn(p1, p2) {
    this.p1 = p1
    this.p2 = p2
  }
  fn.prototype.print = () => { }
  const Fn = fn.bind2(undefined, 2, 3)
  const newFn = new Fn()
  console.assert(newFn.p1 === 2)
  console.assert(newFn.p2 === 3)
  console.assert(fn.prototype.isPrototypeOf(newFn))
  console.assert(typeof newFn.print === 'function')
  console.log(message)
}
function test7(message) {
  Function.prototype.bind2 = bind
  function fn(p1, p2) {
    this.p1 = p1
    this.p2 = p2
  }
  fn.prototype.print = () => { }
  const obj = new fn()
  const Fn = fn.bind2(obj, 2, 3)
  console.assert(obj.p1 === 2)
  console.assert(obj.p2 === 3)
  console.assert(Fn() === 'undefined')
  console.log(message)
}