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
 */
// Ninja.prototype = new Person();  
// const ninja = new Ninja();  
// ninja.talk();
// ninja.fight();



/**
 * 
 * this is not advised...
 * 
 * Ninja.prototype = Person.prototype.
 * 
 * because: any changes to the Ninja prototype will then also change the Person prototype (because they’re the same object),
 * 
 */

// this will fail ....  due to reset in prototype ...
// console.assert(ninja.constructor === Ninja, "The ninja object was created by the Ninja constructor");
// console.assert(ninja.constructor === Person, "The ninja object was created by the Person constructor");




// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

const object1 = {};

Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42



var ninja = {};
ninja.name = "Yoshi";
ninja.weapon = "kusarigama";
Object.defineProperty(ninja, "sneaky", {
    configurable: false,
    enumerable: false,
    value: true,
    writable: true
});
console.assert("sneaky" in ninja, "We can access the new property");
for (let prop in ninja) {
    console.log("enumerable p:"+prop);
    console.assert(prop !== undefined, "An enumerated property: " + prop);
}




