/**
 * https://developers.google.com/web/updates/2015/08/using-requestidlecallback
 * 
 */

//  It’s early days for requestIdleCallback, so before using it you should check that it’s available for use:

 if ('requestIdleCallback' in window) {
   // Use requestIdleCallback to schedule work.
 } else {
   // Do what you’d do today.
 }
 
 // expr1 || expr2
 // If expr1 can be converted to true, returns expr1; else, returns expr2.
 window.requestIdleCallback =
 window.requestIdleCallback ||
 function (cb) {
   var start = Date.now();
   return setTimeout(function () {
     cb({
       didTimeout: false,
       timeRemaining: function () {
         return Math.max(0, 50 - (Date.now() - start));
       }
     });
   }, 1);
 }

const printNow = function (){
  var t1 = new Date();
  console.log("t:"+t1.getMilliseconds());
 }

 // timer ...
//  printNow();
//  setTimeout(()=>{printNow();},10);
//  setTimeout(()=>{printNow();},20);

 // timer ...
const getTimer = function(){
  var t1=new Date();
  return {
    end:function(){
      var t2 = new Date();
      return t2.getTime()-t1.getTime();
    }
  }
}

// var timer1 = getTimer();
// setTimeout(()=>{
//   console.log("timer1:"+timer1.end());
//  },200);



 function myNonEssentialWork (deadline) {
  while ( (aa = deadline.timeRemaining()) > 0){
    console.log("aa:"+aa);
    doWorkIfNeeded();
  }   
}
var timer1 = getTimer();
function doWorkIfNeeded(){
  console.log("doWorkIfNeeded  timer1:"+timer1.end());
}
requestIdleCallback(myNonEssentialWork);



//  var tasks = [1,2,3,4];

 
//  //
//  function myNonEssentialWork (deadline) {
//   while (deadline.timeRemaining() > 0 && tasks.length > 0){
//     doWorkIfNeeded();
//     tasks.pop();
//   }

//   if (tasks.length > 0)
//     requestIdleCallback(myNonEssentialWork);
// }

// requestIdleCallback(myNonEssentialWork);
