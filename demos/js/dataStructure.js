
/**
 *  arrays  ......
 */
const ninjas = ["Kuma", "Hattori", "Yagyu"];
const samurai = new Array("Oda", "Tomoe");
console.log(ninjas);
console.log(samurai);

console.assert(ninjas[4] === undefined, "We get undefined if we try to access an out of bounds index");
ninjas[4] = "Ishi";
console.assert(ninjas.length === 5, "Arrays are automatically expanded");

/**
■ push adds an item to the end of the array.
■ unshift adds an item to the beginning of the array.
■ pop removes an item from the end of the array.
■ shift removes an item from the beginning of the array.
 */

const strs = ["aa", "bb", "cc", "dd"];
var removedItems = strs.splice(1, 2);
console.log("splice out:" + removedItems);  // bb,cc
console.log("splice remain:" + strs);   // aa dd


const nums = ["1", "2", "3", "4"];
nums.splice(1, 0, ["5", "6"]);
console.log("splice remain:" + nums);   //   1,5,6,2,3,4

const a1 = ["Yagyu", "Kuma", "Hattori"];
a1.forEach((e, i) => {
    console.log("e:" + e + " i:" + i)
});

/**
 * make array from an array 
 */
const ninjas1 = [
    { name: "Yagyu", weapon: "shuriken" },
    { name: "Yoshi" },
    { name: "Kuma", weapon: "wakizashi" }
];
const weapons = ninjas1.map(e => e.weapon);
console.log("weapons:" + weapons + "  " + weapons[1]);


/**
 *  every  /  some
 */
const allNinjasAreNamed = ninjas1.every(ninja => "name" in ninja);
const allNinjasAreArmed = ninjas1.every(ninja => "weapon" in ninja);
const someNinjasAreArmed = ninjas1.some(ninja => "weapon" in ninja);

console.log("allNinjasAreNamed:" + allNinjasAreNamed + "    allNinjasAreArmed:" + allNinjasAreArmed + "  someNinjasAreArmed:" + someNinjasAreArmed);


/**
 *  find  ---> The find function finds one item in an array: the first item for which the find callback returns true.
 */
const ninjaWithWakizashi = ninjas1.find(ninja => {
    return ninja.weapon === "wakizashi";
});

/**
 * filter ---> The filter function creates a new array that contains all items for which the callback returns true.
 */


ninjas1.sort(function (ninja1, ninja2) {
    if (ninja1.name < ninja2.name) { return 1; }
    if (ninja1.name > ninja2.name) { return -1; }
    return 0;
});
console.log("sorted ninjas:" + JSON.stringify(ninjas1));


/**
 * AGGREGATING ARRAY ITEMS
 */

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((aggregated, number) => { return aggregated + number }, 0);  // the last param is init value !


//  In this example, we create a “normal” object and instrument it to mimic some of the behaviors of an array
const elems = {
    length: 0,
    add: function (elem) {
        // we’re tricking the method to use our object as its context by using the call method 
        Array.prototype.push.call(this, elem);   // call on this... so that the length property gets changed ...s
    },
    gather: function (id) {
        this.add(id);
    },
    find: function (callback) {
        return Array.prototype.find.call(this, callback);
    }
};

elems.gather("first");
elems.gather("second");
console.log(elems)



/**
 * maps .... Don’t use objects as maps
 */

const ninjaIslandMap = new Map();

const ninja1 = { name: "Yoshi" };
const ninja2 = { name: "Hattori" };

ninjaIslandMap.set(ninja1, { homeIsland: "Honshu" });
ninjaIslandMap.set(ninja2, { homeIsland: "Hokkaido" });
ninjaIslandMap.set("k1", "v1")
console.log(ninjaIslandMap);

console.assert(ninjaIslandMap.get(ninja1).homeIsland === "Honshu", "The first mapping works");
console.assert(ninjaIslandMap.size === 3, "We've created 3 mappings");
console.assert(ninjaIslandMap.has(ninja1) && ninjaIslandMap.has(ninja2), "We have mappings for the first two ninjas");

ninjaIslandMap.delete(ninja1);
console.assert(!ninjaIslandMap.has(ninja1) && ninjaIslandMap.size === 2, "There's no first ninja mapping anymore!");

ninjaIslandMap.clear();
console.assert(ninjaIslandMap.size === 0, "All mappings have been cleared");



const directory = new Map();
directory.set("Yoshi", "+81 26 6462");
directory.set("Kuma", "+81 52 2378 6462");
directory.set("Hiro", "+81 76 277 46");

for (let item of directory) {
    console.log("Key:" + item[0]);
    console.log("Value:" + item[1]);
}
for (let key of directory.keys()) {
    console.log(key);
}
for (let value of directory.values()) {
    console.log(value);
}


/**
 * set
 * 
 * The Set constructor can take an array of items with which the set is initialized.
 * 
 * has/add/size
 */
const set = new Set(["Kuma", "Hattori", "Yagyu", "Hattori"]);

console.log([...set]) //  Uses the spread operator to turn our set into an array


const a11 = ["Kuma", "Hattori", "Yagyu"];
const a22 = ["Hattori", "Oda", "Tomoe"];
const warriors = new Set([...a11, ...a22]);

console.assert(warriors.has("Kuma"), "Kuma is here");
console.assert(warriors.has("Hattori"), "And Hattori");



/**
 * intersection --->
 */
const set22 = new Set(a22);
const intersection = new Set(
    [...set].filter(e => set22.has(e))
);
console.log(intersection);  // Hattori