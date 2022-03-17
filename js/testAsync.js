console.log("Async.js");


function setupBlockingCall1() {
    const btn = document.getElementById('btn1');
    btn.addEventListener('click', () => {
        console.log("Async.js blockingCall1");
        let myDate;
        console.time("btn1");
        // this does not block scroll ??...    but blocks js ....
        for (let i = 0; i < 100000000; i++) {
            let date = new Date();
            myDate = date
        }
        let pElem = document.createElement('p');
        pElem.textContent = 'This is a newly-added paragraph.';
        console.timeEnd("btn1");
        document.body.appendChild(pElem);
    });


    const btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', () => {
        console.log("----fast---call---");
    });


    // more real example
    const canvas = document.getElementById('c1');
    canvas.addEventListener('click', () => {
        expensiveOperation();
    });



    /**
     * start chrome like this.. 
     * 
     * in mac:
     * /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --allow-file-access-from-files
     */
    const btn3 = document.getElementById('btn3');
    btn3.addEventListener('click', () => {
        console.log("Async.js----");
        let myDate;
        console.time("btn3");
        const worker = new Worker('js/worker.js');
        worker.postMessage("msg1");
        console.timeEnd("btn3");
    });

    const btn4 = document.getElementById('btn4');
    btn4.addEventListener('click', () => {
        // testAsyncCall();
        // testAsyncCall1();
        testAsyncCall5();
    });


}


// an other example of blocking call 
function expensiveOperation() {
    console.time("canvas");
    const canvas = document.getElementById('c1');
    let ctx = canvas.getContext('2d');
    for (let i = 0; i < 10; i++) {
        ctx.fillStyle = 'rgba(0,0,255, 0.2)';
        ctx.beginPath();
        ctx.arc(random(0, canvas.width), random(0, canvas.height), 10, degToRad(0), degToRad(360), false);
        ctx.fill()
    }
    console.timeEnd("canvas");
}
function random(min, max) {
    var num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}
function degToRad(degrees) {
    return degrees * Math.PI / 180;
};




function testAsyncCall() {
    console.log("----1");
    let p1 = new Promise((resolve, reject) => {
        for (let i = 0; i < 10000000; i++) {
            let date = new Date();
            myDate = date
        }
        resolve("success");
    });
    console.log("----2");
    p1.then(res => {
        console.log("task done:" + res);
    });
    console.log("----3");
}



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function testAsyncCall1() {
    console.log("----1");
    let p1 = new Promise((resolve, reject) => {
        console.time("call1");
        let b = 0;
        for (let i = 0; i < 1000000; i++) {
            let a = getRandomInt(100);
            b = b + a;
        }
        let remain = b % 2;
        console.log("remain:" + remain);
        if (remain == 1) {
            console.log("--- call reject---");
            reject("fail");
        } else {
            console.log("--- call resolve---");
            resolve("success");
        }
        console.timeEnd("call1");
    });
    console.log("----2");
    // p1.then((m)=>{console.log("m:"+m);}).catch((e)=>{console.log("e:"+e);});
    // console.log("----3");
}




/**
 * 答案：2 4 3 1
复制代码
（1）setTimeout丢给浏览器的异步线程处理，因为时间是0，马上放入消息队列
（2）new Promise里面的console.log(2)加入执行栈，并执行，然后退出
（3）直接resolve，then后面的内容加入微任务队列
（4）console.log(4)加入执行栈，执行完成后退出
（5）检查微任务队列，发现有任务，执行console.log(3)
（6）发现消息队列有任务，执行下一次宏任务console.log(1)
 */
function testAsyncCall2() {
    setTimeout(() => {
        console.log(1);
    }, 0);

    new Promise((resolve) => {
        console.log(2);
        resolve();
    }).then(() => {
        console.log(3);
    });

    console.log(4);
    // 输出最后的结果
}




/**
 * ：
 * 2 4 3 1 5
复制代码
（1）setTimeout丢给浏览器的异步线程处理，因为时间是0，马上放入消息队列
（2）new Promise里面的console.log(2)加入执行栈，并执行
（3）setTimeout给浏览器的异步线程处理，因为时间是0，马上放入消息队列，然后退出
（4）直接resolve，then后面的内容加入微任务队列
（5）console.log(4)加入执行栈，执行完成后退出
（6）检查微任务队列，发现有任务，执行console.log(3)
（7）发现消息队列有任务，执行下一次宏任务console.log(1)
（8）发现消息队列有任务，执行下一次宏任务console.log(5)
 */

function testAsyncCall3() {
    setTimeout(() => {
        console.log(1);
    }, 0);

    new Promise((resolve) => {
        console.log(2);
        setTimeout(() => {
            console.log(5);
        }, 0);
        resolve();
    }).then(() => {
        console.log(3);
    });

    console.log(4);
    // 输出最后的结果    
}


/**
 * 
 * 答案：2 4 3 1
复制代码
（1）先执行script同步代码：
先执行new Promise中的console.log(2),then后面的不执行属于微任务然后执行console.log(4)
（2）执行完script宏任务后，执行微任务，console.log(3)，没有其他微任务了
（3）执行另一个宏任务，定时器，console.log(1)
 * 
 */
function testAsyncCall4() {
    setTimeout(() => {
        console.log(1);
    }, 0);
    new Promise((resolve, reject) => {
        console.log(2)
        resolve(3)
    }).then((val) => {
        console.log(val);
    })
    console.log(4);
    // 输出最后的结果    
}


/**
 * 答案：
(5000)a的for循环
a事件执行完
(5000)b的for循环
b事件执行完
(5000)c的for循环
c事件执行完
任务队列函数1
任务队列函数2
任务队列函数3
复制代码
结果是当a、b、c函数都执行完成之后，三个setTimeout才会依次执行
 */
function testAsyncCall5() {
    let a = () => {
        setTimeout(() => {
            console.log('任务队列函数1')
        }, 0)
        for (let i = 0; i < 5000; i++) {
            console.log('a的for循环')
        }
        console.log('a事件执行完')
    }

    let b = () => {
        setTimeout(() => {
            console.log('任务队列函数2')
        }, 0)
        for (let i = 0; i < 5000; i++) {
            console.log('b的for循环')
        }
        console.log('b事件执行完')
    }

    let c = () => {
        setTimeout(() => {
            console.log('任务队列函数3')
        }, 0)
        for (let i = 0; i < 5000; i++) {
            console.log('c的for循环')
        }
        console.log('c事件执行完')
    }

    a();
    b();
    c();
    // 输出最后的结果      
}