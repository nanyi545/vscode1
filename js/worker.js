
onmessage = function (e) {
    console.log('Worker: Message received from main script:'+JSON.stringify(e));
    for (let i = 0; i < 100000000; i++) {
        let date = new Date();
        myDate = date
    }
    console.log("worker done");
}