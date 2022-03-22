
/**
 * Using JavaScript “classes” in ES6 
 * Even though now we can use the class keyword in JavaScript, the underlying implementation is still based on prototype inheritance! 
 */
class Ninja {
    constructor(name) {
        this.name = name;
    }
    swingSword() {
        return true;
    }
}
/**
 
Our class code can be translated to functionally identical ES5

code:
function Ninja(name) {
 this.name = name;
}
Ninja.prototype.swingSword = function() {
 return true;
};

 */
var ninja = new Ninja("Yoshi");

console.assert(ninja instanceof Ninja, "Our ninja is a Ninja");
console.assert(ninja.name === "Yoshi", "named Yoshi");
console.assert(ninja.swingSword(), "and he can swing a sword");



/**
 * STATIC METHODS
 */
class Ninja2 {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    swingSword() {
        return true;
    }
    static compare(ninja1, ninja2) {
        return ninja1.level - ninja2.level;
    }
}
/**
pre-ES6...s
function Ninja(){}
Ninja.compare = function(ninja1, ninja2){...} 
 */

var ninja1 = new Ninja2("Yoshi", 4);
var ninja2 = new Ninja2("Hattori", 3);
console.log("compare:" + (Ninja2.compare(ninja1, ninja2)));

// Inheritance in ES6
class Person {
    constructor(name) {
        this.name = name;
    }
    dance() {
        return true;
    }
}

class Ninja3 extends Person {
    constructor(name, weapon) {
        super(name);
        this.weapon = weapon;
    }
    wieldWeapon() {
        console.log("name:"+this.name+"  weapon:"+this.weapon);
        return true;
    }
}

var n = new Ninja3("Yoshi", "Wakizashi");
n.wieldWeapon();

