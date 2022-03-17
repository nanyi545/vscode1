var promise = new Promise((resolve, reject) => {
    reject("Explicitly reject a promise!");
    // resolve("aa");
});


// promise.then(ninja => {
//     console.log("ninja:"+ninja);
// });

// promise.then(() => fail("Happy path, won't be called!"))
//     .catch(() => pass("Promise was also rejected"));


/**

p.then(value => {
 // fulfillment
}, reason => {
 // rejection
});


 */


/**
 *  real word example 
 */
function getJSON(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.open("GET", url);

        request.onload = function () {
            try {
                if (this.status === 200) {
                    resolve(JSON.parse(this.response));
                } else {
                    reject(this.status + " " + this.statusText);
                }
            } catch (e) {
                reject(e.message);
            }
        };

        request.onerror = function () {
            reject(this.status + " " + this.statusText);
        };

        request.send();
    });
}

getJSON("data/ninjas.json").then(ninjas => {
    assert(ninjas !== null, "Ninjas obtained!");
}).catch(e => console.log("Shouldn't be here:" + e));

Promise.resolve(1).then(i => console.log("resolve:" + i), e => console.log("error:" + e));
Promise.reject("sb").then(i => console.log("resolve:" + i), e => console.log("error:" + e));


//  https://javascript.info/async-await
/**
 * So, async ensures that the function returns a promise, and wraps non-promises in it. Simple enough, right? But not only that. 
 * There’s another keyword, await, that works only inside async functions, and it’s pretty cool.
 * 
 * The keyword await makes JavaScript wait until that promise settles and returns its result.
 * 
 * Can’t use await in regular functions
 * 
 * It’s just a more elegant syntax of getting the promise result than promise.then. And, it’s easier to read and write.
 * 
 */
 var start = Date.now();
 document.getElementById("btn2").onclick=()=>{
     console.log("-----------");
 };

async function f(key) {
    console.log(key + ":start"+ "  time:" + (Date.now() - start));
    let promise = new Promise((resolve, reject) => {
        // se ttime out 
        setTimeout(() => resolve("done!"), 1000)

        // mimic heavy computation 
        // console.log(key + "-------"+ "  time:" + (Date.now() - start));
        // for(let i=0;i<100000;i++){
        //     for(let j=0;j<100000;j++){
        //     }    
        // }
        // console.log(key + "*******"+ "  time:" + (Date.now() - start));
        // resolve("done!")

    });

    let result = await promise; // wait until the promise resolves (*)
    console.log(key + "---" + result + "  time:" + (Date.now() - start)); // "done!"
}

f("key1");
f("key2");
f("key3");

/**
 * Let’s emphasize: await literally suspends the function execution until the promise settles, 
 * and then resumes it with the promise result. That doesn’t cost any CPU resources, 
 * because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.
 */

// ---------------- async --------------
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing#a_long-running_synchronous_function
// 
 const name1 = 'Miriam';
 const greeting = `Hello, my name is ${name1}!`;
 console.log(greeting);


 function generatePrimes(quota) {
    function isPrime(n) {
      for (let c = 2; c <= Math.sqrt(n); ++c) {
        if (n % c === 0) {
            return false;
         }
      }
      return true;
    }
    const primes = [];
    const maximum = 1000000;
    while (primes.length < quota) {
      const candidate = Math.floor(Math.random() * (maximum + 1));
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
    }
    return primes;
  }
  
  const worker = new Worker('./js/generate.js');
  worker.addEventListener('message', message => {
    console.log(" ---end of async call   numsof primes:"+message.data);
  });
  

document.getElementById("btn1").onclick=()=>{

    // sync call
    // console.log("---long task---");
    // generatePrimes(1000000); 
    // console.log("---end of long task---");

    console.log("---long async task---");
    worker.postMessage({
        command: 'generate',
        quota: 1000000
    });

};



 