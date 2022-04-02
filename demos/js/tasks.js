/**
 * 
 * event-loop
 * 
 * https://javascript.info/event-loop
 * 
 */

/**
 * this is long call that will block the UI ...
 * 
 */
// let i = 0;
// let start = Date.now();
// function count() {
//   // do a heavy job
//   for (let j = 0; j < 1e9; j++) {
//     i++;
//   }
//   alert("Done in " + (Date.now() - start) + 'ms');
// }
// count();



/**
 * Let’s split the job using nested setTimeout calls:
 * 
 */
// let i = 0;
// let start = Date.now();
// function count() {
//   // do a piece of the heavy job (*)
//   do {
//     i++;
//   } while (i % 1e6 != 0);
//   if (i == 1e9) {
//     alert("Done in " + (Date.now() - start) + 'ms');
//   } else {
//     setTimeout(count); // schedule the new call (**)
//   }
// }
// count();


/**
 * In an event handler we may decide to postpone some actions until the event bubbled up and was handled on all levels. We can do that by wrapping the code in zero delay setTimeout.

In the chapter Dispatching custom events we saw an example: custom event menu-open is dispatched in setTimeout, so that it happens after the “click” event is fully handled.

 */



/**
 * 
 * Summary
 * 
A more detailed event loop algorithm (though still simplified compared to the specification):

1 Dequeue and run the oldest task from the macrotask queue (e.g. “script”).
2 Execute all microtasks:
-While the microtask queue is not empty:
--Dequeue and run the oldest microtask.
3 Render changes if any.
4 If the macrotask queue is empty, wait till a macrotask appears.
Go to step 1.
*
*
*/


setTimeout(() => console.log("timeout"));
Promise.resolve().then(() => console.log("promise"));
console.log("code");

/**
 * What’s going to be the order here?
code shows first, because it’s a regular synchronous call.
promise shows second, because .then passes through the microtask queue, and runs after the current code.
timeout shows last, because it’s a macrotask.
 */

