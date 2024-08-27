// Variables created without a declaration keyword (var, let, or const) are always global,
// even if they are created inside a function.


// let a = 4;
// function myFunction() {
//   return a * a;
// }

console.log(a * a);

function myFunction() {
  a = 4;
} 


// Global variables live until the page is discarded, like when you navigate to another page or close the window.
// Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.


// like return local varial while invoke function that could also we can say Function Closures