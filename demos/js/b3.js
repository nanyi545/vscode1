/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
 * 
 * Comma operator:This operator is primarily used inside a for loop, to allow multiple variables to be updated each time through the loop. 
 * It is regarded bad style to use it elsewhere,
 * 
 */

 var x = [0,1,2,3,4,5,6,7,8,9]
 var a = [x, x, x, x, x];
 
 for (var i = 0, j = 9; i <= j; i++, j--)
 //                                ^
{
  console.log('a[' + i + '][' + j + ']= ' + a[i][j]);
}  
 

/**
 * delete
The delete operator deletes an object's property. The syntax is:

delete object.property;
delete object[propertyKey];
delete objectName[index];

 */

delete Math.PI; // returns false (cannot delete non-configurable properties)

const myObj = {h: 4};
delete myObj.h; // returns true (can delete user-defined properties)

/**
 * this
Use the this keyword to refer to the current object. In general, this refers to the calling object in a method. Use this either with the dot or the bracket notation:

this['propertyName']
this.propertyName

 */
// this['propertyName'] = "aaa";
this.propertyName = "aaa";
console.log("propertyName:"+window.propertyName);


/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates
 * 
 */

 let n1 = 0XA;
 let n2 = 0b100;

 console.log("n1:"+n1+"  n2:"+n2);

 /**
  * Number object
The built-in Number object has properties for numerical constants, 
  */
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;


function JSClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var temp = '' + ((hour > 12) ? hour - 12 : hour);
  if (hour == 0)
    temp = '12';
  temp += ((minute < 10) ? ':0' : ':') + minute;
  temp += ((second < 10) ? ':0' : ':') + second;
  temp += (hour >= 12) ? ' P.M.' : ' A.M.';
  return temp;
}

console.log("time:"+JSClock());


/**
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting
 * 
 * Text formatting
 * 
 */

// Unicode escape sequences  / The Unicode escape sequences require at least four hexadecimal digits following \u.
console.log('\u00A9')  


/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
 */

//  To create an array with non-zero length, but without any items, either of the following can be used:

let arrayLength = 3;
 // This...
 let arr = new Array(arrayLength)
 
 // ...results in the same array as this
 let arr1 = Array(arrayLength)
 
 // This has exactly the same effect
 let arr2 = []
 arr2.length = arrayLength

 console.log(arr);
 arr.push(1);
 console.log(arr);
 arr[0]= {a:1};
 console.log(arr);


//  In addition to a newly defined variable as shown above, arrays can also be assigned as a property of a new or an existing object:
let obj = {}
obj.prop = [1, 2, 3 ];
console.log(obj);

// Note: If you supply a non-integer value to the array operator in the code above, a property will be created in the object representing the array, instead of an array element.
let arr3 = []
arr3[3.4] = 'Oranges'
console.log(arr3.length)                 // 0
console.log(arr3.hasOwnProperty(3.4))    // true
console.log(arr3[3.4])                 // Oranges

// The length property is special. It always returns the index of the last element plus one. (In the example below, 'Dusty' is indexed at 30, so cats.length returns 30 + 1).

let colors = ['red', 'green', 'blue']
colors.forEach(function(color) {
  console.log(color)
})

/**
 * Typed Arrays
JavaScript typed arrays are array-like objects and provide a mechanism for accessing raw binary data.
 */



/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections
 */

/**
 * map
 * 
 * The keys of an Object are Strings or Symbols, where they can be of any value for a Map.
You can get the size of a Map easily, while you have to manually keep track of size for an Object.
The iteration of maps is in insertion order of the elements.
An Object has a prototype, so there are default keys in the map. (This can be bypassed using map = Object.create(null).
 */
 let sayings = new Map();
 sayings.set('dog', 'woof');
 sayings.set('cat', 'meow');
 sayings.set('elephant', 'toot');
 console.log(sayings);
 sayings.size; // 3
 sayings.get('dog'); // woof
 sayings.get('fox'); // undefined
 sayings.has('bird'); // false
 sayings.delete('dog');
 sayings.has('dog'); // false
 for (let [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}


/**
 * The WeakMap API is essentially the same as the Map API. However, a WeakMap doesn't allow observing the liveness of its keys, which is why it doesn't allow enumeration. So there is no method to obtain a list of the keys in a WeakMap.
 * 
 * GC in JS ???
 */




/**
 * Set objects are collections of values. You can iterate its elements in insertion order. 
 * A value in a Set may only occur once; it is unique in the Set's collection.
 */

 let mySet = new Set();
 mySet.add(1);
 mySet.add('some text');
 mySet.add('foo');
 
 mySet.has(1); // true
 mySet.delete('foo');
 mySet.size; // 2
 
 for (let item of mySet) console.log(item);
 

 /**
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
  * 
  * JavaScript is designed on a simple object-based paradigm. 
  * 
  * * An object is a collection of properties
  * * a property is an association between a name (or key) and a value. 
  * * A property's value can be a function, in which case the property is known as a method.
  * 
  * 
  */

  const myCar = new Object();
  myCar.make = 'Ford';
  myCar.model = 'Mustang';
  myCar.year = 1969;

  
  // object initializer syntax
  const myCar1 = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
  };

  // Unassigned properties of an object are undefined (and not null).


  // Objects are sometimes called associative arrays, since each property is associated with a string value 
  // that can be used to access it. 
  console.log(myCar['make']); //  Ford
/**
 * You can also access properties by using a string value that is stored in a variable:
 * 
 * 
let propertyName = 'make';
myCar[propertyName] = 'Ford';
 */


// You can use the bracket notation with for...in to iterate over all the enumerable properties of an object.
function showProps(obj, objName) {
  let result = '';
  for (let i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}

showProps(myCar, 'myCar');



/**
 * Creating new objects
 * 
 * * Using object initializers
 * * Using a constructor function
 * * Using the Object.create method ??? what's the difference ??
 * 
 * 
 */


/**
 * Inheritance and the prototype chain
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
 * 
 * Each object has a private property which holds a link to another object called its prototype. 
 * 
 *  By definition, null has no prototype, and acts as the final link in this prototype chain.
 * 
 * 
 * Inheriting properties
 * 
-JavaScript objects are dynamic "bags" of properties (referred to as own properties). 
-JavaScript objects have a link to a prototype object. When trying to access a property of an object, 
the property will not only be sought on the object but on the prototype of the object, 
the prototype of the prototype, and so on until either a property with a matching name is found or 
the end of the prototype chain is reached.

.... ???


 * 
 * 
 */



/**
 * A method is a function associated with an object, or, put differently,
 * a method is a property of an object that is a function. 
 * 
 */

 const obj1 = {
  myMethod: function(params) {
    // ...do something
  },

  // this works too!
  myOtherMethod(params) {
    // ...do something else
  }
};

obj1.myOtherMethod();
obj1.myMethod();


// JavaScript has a special keyword, this, that you can use within a method to refer to the current object. 
const Manager = {
  name: "John",
  age: 27,
  job: "Software Engineer"
}
const Intern = {
  name: "Ben",
  age: 21,
  job: "Software Engineer Intern"
}
function sayHi() {
  console.log(`Hello, my name is ${this.name}`)
}
// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;
Manager.sayHi(); // Hello, my name is John'
Intern.sayHi(); // Hello, my name is Ben'


/**
 * Comparing objects
In JavaScript, objects are a reference type. Two distinct objects are never equal, 
even if they have the same properties. Only comparing the same object reference with itself yields true.

 */

// Two variables, two distinct objects with the same properties
const fruit = {name: 'apple'};
const fruitbear = {name: 'apple'};

console.log(fruit == fruitbear); // return false
console.log(fruit === fruitbear); // return false
console.log(JSON.stringify(fruit) == JSON.stringify(fruitbear)); // true
console.log(JSON.stringify(fruit) === JSON.stringify(fruitbear));// true

fruit2 = fruit;
fruit.name = 'grape';
console.log(fruit2); // output: { name: "grape" }, instead of { name: "apple" }
