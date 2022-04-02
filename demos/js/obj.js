
/**
 * 
Inheritance is a form of reuse in which new objects have access to properties of existing
objects. This helps us avoid the need to repeat code and data across our code base.
 */

function Person() {
    this.talk = () => {
        console.log("talk");
    }
}
function Ninja() {
    this.fight = () => {
        console.log("fight");
    }
}
//  Makes a Ninja a Person by making the Ninja prototype an instance of Person
/**
 *  to achieve inheritance... 
 * 
 * The best technique for creating such a prototype chain is to use an instance of an object as the other object’s prototype:
 */
Ninja.prototype = new Person();  
// //  this decides the constructor ... 
// Object.defineProperty(Ninja.prototype, "constructor", {
//     enumerable: false,
//     value: Ninja,
//     writable: true
// }); 
const ninja = new Ninja();  
ninja.talk();
ninja.fight();

// this will fail ....  due to reset in prototype ...
if(ninja.constructor === Ninja)console.log("The ninja object was created by the Ninja constructor");
if(ninja.constructor === Person)console.log("The ninja object was created by the Person constructor");
console.log("ninja instanceof Person:"+(ninja instanceof Person)); // true
console.log("ninja instanceof Ninja:"+(ninja instanceof Ninja)); // true



/**
 * 
 * this is not advised...
 * 
 * Ninja.prototype = Person.prototype.
 * 
 * because: any changes to the Ninja prototype will then also change the Person prototype (because they’re the same object),
 * 
 */



// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
// const object1 = {};
// Object.defineProperty(object1, 'property1', {
//     value: 42,
//     writable: false
// });
// object1.property1 = 77;// throws an error in strict mode
// console.log(object1.property1);// expected output: 42

// var ninja = {};
// ninja.name = "Yoshi";
// ninja.weapon = "kusarigama";
// Object.defineProperty(ninja, "sneaky", {
//     configurable: false,
//     enumerable: false,
//     value: true,
//     writable: true
// });
// console.assert("sneaky" in ninja, "We can access the new property");
// for (let prop in ninja) {
//     console.log("enumerable p:"+prop);
//     console.assert(prop !== undefined, "An enumerated property: " + prop);
// }


/**
 * Using JavaScript “classes” in ES6 
 * Even though now we can use the class keyword in JavaScript, the underlying implementation is still based on prototype inheritance! 
 */
