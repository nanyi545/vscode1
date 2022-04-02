/**
 * 
 * 
 * todo：
 * 
 * A great library for doing this is:
https://www.npmjs.com/package/react-infinite-scroll

With a great how-to here:
http://www.reactexamples.com/react-infinite-scroll/

 */




/**
 * test performance of appendChild
 */
// var t1 = new Date();
// let root = document.getElementById("root");
// let holder = document.createElement("div");
// for(let i=0;i<1000;i++){
//     let div1 = document.createElement("div");
//     div1.innerHTML = ("aaa"+i);
//     holder.appendChild(div1);    
// }
// root.appendChild(holder);
// var t2 = new Date();
// console.log("t:"+(t2-t1));


/**
 * this will return undefined ...
 */
// function test1(){}
// let a = test1();
// console.log(a)


/**
 *  In JavaScript objects are a reference type. Two distinct objects are never equal, even if they have the same properties.
 */

let a = {f1:1};
let b = a;
let c = {f1:1};

console.log(a);
console.log(b);
console.log(a==b);
console.log(a===b);
console.log(a==c);
console.log(a===c);

// b = undefined;
// b.f2=2;
b = null;
console.log(a);
console.log(b);
console.log(a==b);
console.log(a===b);


/**

In JavaScript, undefined means a variable has been declared but has not yet been assigned a value, such as:

var testVar;
alert(testVar); //shows undefined
alert(typeof testVar); //shows undefined



null is an assignment value. It can be assigned to a variable as a representation of no value:

var testVar = null;
alert(testVar); //shows null
alert(typeof testVar); //shows object


 */


