/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Background_Tasks_API
 */

//console.log(typeof window.requestIdleCallback); 

// allow browsers without api support ...
// window.requestIdleCallback = window.requestIdleCallback || function (handler) {
//     let startTime = Date.now();
//     return setTimeout(function () {
//         handler({
//             didTimeout: false,
//             timeRemaining: function () {
//                 return Math.max(0, 50.0 - (Date.now() - startTime));
//             }
//         });
//     }, 1);
// }


/**
- taskList is an Array of objects, each representing one task waiting to be run.
- totalTaskCount is a counter of the number of tasks that have been added to the queue; it will only go up, never down. We use this to do the math to present progress as a percentage of total work to do.
- currentTaskNumber is used to track how many tasks have been processed so far.
- taskHandle is a reference to the task currently being processed.
 */
let taskList = [];
let totalTaskCount = 0;
let currentTaskNumber = 0;
let taskHandle = null;


/**
totalTaskCountElem is the <span> we use to insert the total number of tasks created into the status display in the progress box.
currentTaskNumberElem is the element used to display the number of tasks processed so far.
progressBarElem is the <progress> element showing the percentage of the tasks processed so far.
startButtonElem is the start button.
logElem is the <div> we'll insert logged text messages into.
 */
let totalTaskCountElem = document.getElementById("totalTaskCount");
let currentTaskNumberElem = document.getElementById("currentTaskNumber");
let progressBarElem = document.getElementById("progress");
let startButtonElem = document.getElementById("startButton");
let logElem = document.getElementById("log");


let logFragment = null;
let statusRefreshScheduled = false;
// logFragment will be used to store a DocumentFragment that's generated by our logging functions to create content to append to the log when the next animation frame is rendered.
// statusRefreshScheduled is used to track whether or not we've already scheduled an update of the status display box for the upcoming frame, so that we only do it once per frame




// First, we need a function that enqueues tasks for future execution. 
function enqueueTask(taskHandler, taskData) {
    taskList.push({
      handler: taskHandler,
      data: taskData
    });
  
    totalTaskCount++;
  
    if (!taskHandle) {
      taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000 }); // so that it will be run at least once per second even if there isn't any actual idle time available.
    }
  
    scheduleStatusRefresh();
  }
  
/**
enqueueTask() accepts as input two parameters:
taskHandler is a function which will be called to handle the task.
taskData is an object which is passed into the task handler as an input parameter, to allow the task to receive custom data.
*/



function runTaskQueue(deadline) {
    while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && taskList.length) {
      let task = taskList.shift();
      currentTaskNumber++;
  
      task.handler(task.data);
      scheduleStatusRefresh();
    }
  
    if (taskList.length) {
      taskHandle = requestIdleCallback(runTaskQueue, { timeout: 1000} );
    } else {
      taskHandle = 0;
    }
  }
  

  function scheduleStatusRefresh() {
    if (!statusRefreshScheduled) {
      requestAnimationFrame(updateDisplay);
      statusRefreshScheduled = true;
  }
}


function updateDisplay() {
    let scrolledToEnd = logElem.scrollHeight - logElem.clientHeight <= logElem.scrollTop + 1;
  
    if (totalTaskCount) {
      if (progressBarElem.max != totalTaskCount) {
        totalTaskCountElem.textContent = totalTaskCount;
        progressBarElem.max = totalTaskCount;
      }
  
      if (progressBarElem.value != currentTaskNumber) {
        currentTaskNumberElem.textContent = currentTaskNumber;
        progressBarElem.value = currentTaskNumber;
      }
    }
  
    if (logFragment) {
      logElem.appendChild(logFragment);
      logFragment = null;
    }
  
    if (scrolledToEnd) {
        logElem.scrollTop = logElem.scrollHeight - logElem.clientHeight;
    }
  
    statusRefreshScheduled = false;
  }

  