/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction
 * 
 * 
------------------------------------------------------------------------
JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:

Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.

Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.


------------------------------------------------------------------------
JavaScript and Java

JavaScript and Java are similar in some ways but fundamentally different in some others. The JavaScript language resembles Java but does not have Java's static typing and strong type checking. 
JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.

In contrast to Java's compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values. 
JavaScript has a prototype-based object model instead of the more common class-based object model. 
The prototype-based model provides dynamic inheritance; that is, what is inherited can vary for individual objects. 
JavaScript also supports functions without any special declarative requirements. Functions can be properties of objects, executing as loosely typed methods.



 * 
 * 
 */




/**
 * Grammar and types
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types
 * 
 * 
JavaScript has three kinds of variable declarations.

var
Declares a variable, optionally initializing it to a value.

let
Declares a block-scoped, local variable, optionally initializing it to a value.

const
Declares a block-scoped, read-only named constant.
-----
If you declare a variable, without using "var", the variable always becomes GLOBAL.

x = 42. This form creates an undeclared global variable.

-----
With the keyword var. For example, var x = 42. This syntax can be used to declare both local and global variables, depending on the execution context.
With the keyword const or let. For example, let y = 13. This syntax can be used to declare a block-scope local variable. (See Variable scope below.)
-----

https://stackoverflow.com/questions/523643/difference-between-and-in-javascript
http://longgoldenears.blogspot.com/2007/09/triple-equals-in-javascript.html

The 3 equal signs mean "equality without type coercion". Using the triple equals, the values must be equal in type as well.

0 == false   // true
0 === false  // false, because they are of a different type
1 == "1"     // true, automatic type conversion for value only
1 === "1"    // false, because they are of a different type
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false


-----

Variable hoisting

Another unusual thing about variables in JavaScript is that you can refer to a variable declared later, without getting an exception.

This concept is known as hoisting.


----

Data types

The latest ECMAScript standard defines eight data types:

Seven data types that are primitives:
Boolean. true and false.
null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
undefined. A top-level property whose value is not defined.
Number. An integer or floating point number. For example: 42 or 3.14159.
BigInt. An integer with arbitrary precision. For example: 9007199254740992n.
String. A sequence of characters that represent a text value. For example: "Howdy"
Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.

and Object

----
Converting strings to numbers

In the case that a value representing a number is in memory as a string, there are methods for conversion.

parseInt()
parseFloat()

----

Literals

Literals represent values in JavaScript. These are fixed values—not variables—that you literally provide in your script. This section describes the following types of literals:

Array literals
Boolean literals
Floating-point literals
Numeric literals
Object literals
RegExp literals
String literals

----




 * 
 * 
 * 
 */

a = 10;   // an undeclared global variable. 
console.log(a);
a = 11;
function test1(){
    console.log("a in a function call:"+a);
}
test1();


foo(); 
console.log('---end of foo call---');

function foo() {
  console.log('---foo---');
}

const parsed1 = parseInt("0xff", 16);
console.log('parsed1:'+parsed1);


var unusualPropertyNames = {
  '': 'An empty string',
  '!': 'Bang!',
  aaa:"hehe"
}
console.log(unusualPropertyNames.aaa);  // hehe
console.log(unusualPropertyNames['']);  // An empty string


// RegExp literals
// A regex literal (which is defined in detail later) is a pattern enclosed between slashes. The following is an example of a regex literal.
var re = /ab+c/;


/**
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
 * 
 */

try { // statements to try
  // throw 42;  // you can throw any thing...
  throw new Error("err msg");
} catch (e) {
  console.error("error:"+e); // pass exception object to error handler (i.e. your own function)
} finally {
  console.log("finally block");
}
/**
 * Note: When logging errors to the console inside a catch block, using console.error() rather than console.log() is advised for debugging. 
 * It formats the message as an error, and adds it to the list of error messages generated by the page.
 */



/** 
 * Loops and iteration
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 */

 const arr = [3, 5, 7];
 arr.foo = 'hello';
 

 // for...in iterates over property names
 for (let i in arr) {
    console.log(i); // logs "0", "1", "2", "foo"
 }
 
 //  for...of iterates over property values
 for (let i of arr) {
    console.log(i); // logs 3, 5, 7
 }
 

 


/**
 * 
 * js class model  ???
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
 * 
 * 
 *
 * 
 */


/**
 * 
 * JavaScript technologies overview
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview
 * 
 *  HTML defines a webpage's structure and content 
 *  CSS sets the formatting and appearance
 *  JavaScript adds interactivity to a webpage and creates rich web applications.
 *  
 *  JavaScript --> core language (ECMAScript)
 *             --> collection of the Web APIs, including the DOM (Document Object Model).
 * 
 * 
----------1 What falls under the ECMAScript scope ------------

Among other things, ECMAScript defines:

Language syntax (parsing rules, keywords, control flow, object literal initialization, ...)
Error handling mechanisms (throw, try...catch, ability to create user-defined Error types)
Types (boolean, number, string, function, object, ...)
The global object. In a browser, this global object is the window object, but ECMAScript only defines the APIs not specific to browsers, e.g. parseInt, parseFloat, decodeURI, encodeURI...
A prototype-based inheritance mechanism
Built-in objects and functions (JSON, Math, Array.prototype methods, Object introspection methods, etc.)
Strict mode

---------2 DOM APIs-------
WebIDL:  The WebIDL specification provides the glue between the DOM technologies and ECMAScript.

The Core of the DOM

The Document Object Model (DOM) is a cross-platform, language-independent convention for representing and interacting with objects in HTML, XHTML and XML documents.
Objects in the DOM tree may be addressed and manipulated by using methods on the objects. 



---------3 Other notable APIs-------

The setTimeout and setInterval functions were first specified on the Window interface in HTML Standard.
XMLHttpRequest makes it possible to send asynchronous HTTP requests.
The CSS Object Model abstract CSS rules as objects.
WebWorkers allows parallel computation.
WebSockets allows low-level bidirectional communication.
Canvas 2D Context is a drawing API for <canvas>.



from here 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview
there are related links ...


setTimeout-->
https://developer.mozilla.org/en-US/docs/Web/API/setTimeout

microtask-and-macrotask:
https://stackoverflow.com/questions/25915634/difference-between-microtask-and-macrotask-within-an-event-loop-context


 * 
 * 
 */



