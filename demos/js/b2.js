/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 * 
 * Parameters are essentially passed to functions by value — so if the code within the body of a function assigns a completely new value to a parameter 
 * that was passed to the function, the change is not reflected globally or in the code which called that function.
 * 
 * 
 * Function expressions
Such a function can be anonymous; it does not have to have a name. For example, the function square could have been defined as:

 *  */

const square = function(number) { return number * number }   // anonymous; it does not have to have a name. 
var x = square(4) // x gets the value 16
console.log(x);

// However, a name can be provided with a function expression. Providing a name allows the function to refer to itself, and also makes it easier to identify the function in a debugger's stack traces:
const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }
console.log(factorial(3));


/**
 * Function expressions are convenient when passing a function as an argument to another function.
 *  The following example shows a map function that should receive a function as first argument and an array as second argument:
 * @param {*} f 
 * @param {*} a 
 * @returns 
 */
function map(f, a) {
  let result = []; // Create a new Array
  let i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}
const f = function(x) {
  return x * x * x;
}
let numbers = [0, 1, 2, 5, 10];
let cube = map(f,numbers);
console.log(cube);


/**
 * a function defined in the global scope can access all variables defined in the global scope.
 * 
 *  A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.
 * 
 */

 function getScore() {
  var num1 = 20,
  num2 = 3,
  name = 'Chamakh';
  // A nested function example
  function add() {
    return name + ' scored ' + (num1 + num2);
  }
  return add();
}

console.log(getScore());

function testRecurse(i){
  if(i>0){
    i--;
    console.log("call i:"+i);
    arguments.callee(i); // call its self ..
  }
}
testRecurse(3);

/**
 * Nested functions and closures
 * 
You may nest a function within another function. The nested (inner) function is private to its containing (outer) function.

It also forms a closure. A closure is an expression (most commonly, a function) that can have free variables together with an environment 
that binds those variables (that "closes" the expression).
 */

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
result = fn_inside(5); // returns 8
console.log("result:"+result);


/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * 
 * A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
 * 
 * In JavaScript, closures are created every time a function is created, at function creation time.
 * 
 */
 function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function
  }
  displayName();
}
// init();



// Here's a slightly more interesting example—a makeAdder function:
//    inner function is returned from the outer function before being executed.
//    In essence, makeAdder is a function factory. !!!!!

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12


// practical example
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}
var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;


// Emulating private methods with closures

var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  }
};

var counter1 = makeCounter();
var counter2 = makeCounter();
counter1.increment();
counter1.increment();

console.log("c1:"+counter1.value());
console.log("c2:"+counter2.value());


/**
 * Performance considerations
 * 
It is unwise to unnecessarily create functions within other functions if closures are not needed for a particular task, 
as it will negatively affect script performance both in terms of processing speed and memory consumption.

 */



/**
 * 
 * Using the arguments object
The arguments of a function are maintained in an array-like object. Within a function, 
you can address the arguments passed to it as follows:

 */
function testArgs(a,b,c,d){
  console.log("length:"+arguments.length);
  console.log("0:"+arguments[0]);
}

testArgs({a:"aa"},1,2,3);


// default params 

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
 * 
 * Rest parameters
The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
 */



/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * 
 */

// Traditional Anonymous Function
function f1(a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
let f2 = (a) => {
  return a + 100;
}

// 2. Remove the body braces and word "return" -- the return is implied.
let f3 = (a) => a + 100;

// 3. Remove the argument parentheses
let f4 = a => a + 100;
console.log("f1(10):"+f1(10));
console.log("f2(10):"+f2(10));
console.log("f3(10):"+f3(10));
console.log("f4(10):"+f4(10));
console.log("f1:"+f1);
console.log("type f1:"+typeof(f1));  // --> function
console.log("f2:"+f2);
console.log("type f2:"+typeof(f2));  // --> function



// https://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript
//
var Foo = function(c){
  this.A = 1;
  this.C = c;
};
//  If you call this as a standalone function like so:
Foo(3);
//   Executing this function will add two properties to the window object (A and B).
//   It adds it to the window because window is the object that called the function when you execute it like that, 
//   and this in a function is the object that called the function. 
console.log(" A:"+window.A+"  C:"+window.C);
console.log(" A:"+A+"  C:"+C);
//    ninja book: strict mode --> undefined
//                normal mode --> window 



// What happens when you add new to a function call is that a new object is created (just var bar = new Object()) and 
//   that the this within the function points to the new Object you just created, instead of to the object that called the function. 
//   So bar is now an object with the properties A and B. Any function can be a constructor, it just doesn't always make sense.
var bar = new Foo(5);
console.log(" bar.A:"+bar.A+"  bar.C:"+bar.C);


/**
 * Predefined functions
JavaScript has several top-level, built-in functions:
 */

