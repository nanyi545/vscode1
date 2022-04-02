

/**
 * 
 * 
JavaScript、ES5和ES6的介绍和区别
http://caibaojian.com/toutiao/6864/

JavaScript由三部分组成：
1. ECMAScript（核心）
作为核心，它规定了语言的组成部分：语法、类型、语句、关键字、保留字、操作符、对象 PS：*不完全兼容的实现
2. DOM（文档对象模型）
DOM把整个页面映射为一个多层节点结果，开发人员可借助DOM提供的API，轻松地删除、添加、替换或修改任何节点。 PS：DOM也有级别，分为DOM1、DOM2、DOM3，拓展不少规范和新接口。
3. BOM （浏览器对象模型）
支持可以访问和操作浏览器窗口的浏览器对象模型，开发人员可以控制浏览器显示的页面以外的部分。 PS：BOM未形成规范

 * 
 */





// arrow function
 /**
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#description
  * 

Does not have its own bindings to this or super, and should not be used as methods.
Does not have new.target keyword...
Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
Can not be used as constructors.
Can not use yield, within its body.

*
*
*/
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];
console.log("material"+materials);
console.log(materials.map(material => material.length));




  /**
   * Destructuring assignment
   * 
   * 
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   */

  let a, b, rest;
  [a, b] = [10, 20];
  
  console.log(a);
  // expected output: 10
  
  console.log(b);
  // expected output: 20
  
  [a, b, ...rest] = [10, 20, 30, 40, 50];
  
  console.log(rest);
  // expected output: Array [30,40,50]
  
  let { bar } = foo; // bar = foo.bar 


// every 
// The every() method tests whether all elements in the array pass the test implemented by the provided function. 
// It returns a Boolean value. 


const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 59, 29, 10, 13];
console.log(array1.every(isBelowThreshold));




/**
 * spread operator 
 * 
 * Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places 
 * 
 * where zero or more arguments (for function calls) 
 * or elements (for array literals) are expected
 * 
 * 
 */
 function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // spread to use as input  

 let numberStore = [0, 1, 2];
 let newNumber = 12;
 numberStore = [...numberStore, newNumber];  // spread to be an array ...  0,1,2,12

 // https://stackoverflow.com/questions/65349847/difference-between-array-push-and-spread-syntax
 // push is much faster .... 


 


 