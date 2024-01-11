// Functions running in parallel with other functions are called asynchronous
// example is JavaScript setTimeout()
// most modern asynchronous JavaScript methods don't use callbacks.


setTimeout(myFunction1, 3000);

function myFunction1() {
  console.log("Hello World");
}


setTimeout(function() { myFunction2("Hello World"); }, 3000);
function myFunction2(value) {
  console.log(value);
}


setInterval(myFunction3, 1000);
function myFunction3() {
  let d = new Date();
  console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}