// import XMLHttpRequest from 'xhr2';
var XMLHttpRequest = require('xhr2');

// A Promise contains both the producing code and calls to the consuming code

// A JavaScript Promise object can be:
//     Pending
//     Fulfilled
//     Rejected

// The Promise object supports two properties: state and result.
// While a Promise object is "pending" (working), the result is undefined.
// When a Promise object is "fulfilled", the result is a value.
// When a Promise object is "rejected", the result is an error object.


let myPromise = new Promise(function (resolve, reject) {
    resolve();
    reject();
});

myPromise.then(
    function (value) {
        console.log("200 OK");
    },
    function (error) {
        console.log(error);
    }
)


let respPromise = new Promise(function (resolve, reject) {
    let x = 90;
    if (x == 0) {
        resolve();
    }
    else {
        reject(error);
    }
});

respPromise.then(
    function () {
        console.log("Done");
    },
    function (error) {
        console.log("Fail");
    }
)


let resPromise = new Promise(function (resolve, reject) {
    setTimeout(function () { resolve("call timeout func"); }, 3000);
});

resPromise.then(function (val) {
    console.log(val);
});

function readFile(myCallbackFunc) {
    let req = new XMLHttpRequest();
    req.onload = function () {
        if (req.status == 200) {
            myCallbackFunc(this.responseText);
        }
        else {
            myCallbackFunc("Error " + req.status);
        }
    }
    req.open("GET","test.html");
    req.send()
}

function myCallbackFunction(text){
    console.log(text);
}

readFile(myCallbackFunction);