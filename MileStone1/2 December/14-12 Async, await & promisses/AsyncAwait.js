// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues


async function myTest(){
    return "Hello World";
}
console.log(myTest());


function myDemo(){
    return Promise.resolve("Hello Bharat");
}
console.log(myDemo());


function displayMessage(message){
    console.log(message);
}

async function messageFunc(){return "Hiii"}

messageFunc().then(
    function(val){displayMessage(val)},
    function(err){displayMessage(e)}
);



async function myFunction(){
    let myPromise = new Promise(function(resolve, reject){
        resolve("Hi, How are you");
    });
    console.log(await myPromise);
}
myFunction();


async function myFunction(){
    let myPromise = new Promise(function(resolve){
        resolve("I Like You");
    });
    console.log(await myPromise);
}
myFunction();


async function promiseFunc(){
    let promiseResp = await new Promise(function(resolve){
        setTimeout(function(){resolve("I Love Bharat")},3000);
    })
    console.log(promiseResp);
    console.log("object---");
}
promiseFunc();




// async function readFile(){
//     let promiseFile = new Promise(function(resolve){
//         let req = new XMLHttpRequest();
//         req.open("GET", "https://google.com");
//         req.onload = function(){
//             if(req.status == 200){
//                 resolve(req.responseText);
//             }
//             else{
//                 reject("Link Not Found", req.status);
//             }
//         };
//         req.send();
//     });
//     console.log(promiseFile);
// }
// readFile();