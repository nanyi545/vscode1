
/**
 * ch8   Controlling access to objects
 */

// getter and setter methods.

function Ninja() {
    let skillLevel;
    this.getSkillLevel = () => skillLevel;
    this.setSkillLevel = value => {
        skillLevel = value;
    };
}

const ninja = new Ninja();
ninja.setSkillLevel(100);
console.log(ninja.getSkillLevel());

// Accessing a property with a getter method implicitly calls the matching getter. The process is the same as if this were a standard method call, and the getter method gets executed. 



// use Object.defineProperty
function Ninja2() {
    let _skillLevel = 0;
    Object.defineProperty(this, 'skillLevel', {
        get: () => {
            console.log("--The get method is called");
            return _skillLevel;
        },
        set: value => {
            // This is how you avoid all those silly little bugs that happen when a value of the wrong type ends up in a certain property. 
            if(!Number.isInteger(value)){
                throw new TypeError("Skill level should be a number");
            }
            console.log("--The set method is called");
            _skillLevel = value;
        }
    });
}
const n2 = new Ninja2();
console.assert(typeof n2._skillLevel === "undefined", "We cannot access a 'private' property");
console.assert(n2.skillLevel === 0, "The getter works fine!");
n2.skillLevel=10;