let promise = new Promise((resolve, reject) => {
  if (a/*异步操作成功*/) {
    resolve(/*arguments*/)
  } else {
    reject(/*arguments*/)
  }
})

promise.then((/*resolve arguments*/) => {
  //code
  return /* Promise obj */
}, (/*reject arguments*/) => {
  //code
  return /* Promise obj */
}).then(/* ... */)

//ES6 类
class Class1 {
  constructor(argu1, argu2) {
    /*
      构造函数
    */
  }
  fun1() {
    function(){}
  }
  fun2() {

  }
  //...
}

//类的继承
class Class2 extends Class1 {
  constructor(argu1, argu2) {
    super(argu1, argu2)/*父类构造函数需要继承的参数(不调用super函数的话,子类的构造函数会覆盖父类)*/

  }
  fun1() {

  }
  fun2() {

  }
  //...
}
