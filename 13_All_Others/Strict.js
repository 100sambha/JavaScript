// The "use strict" directive was new in ECMAScript version 5
// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// It helps you to write cleaner code, like preventing you from using undeclared variables.
// Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
// Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode)
"use strict";
x = 3.14;       //  This will cause an error because x is not declared
console.log(x);


myFunction();
function myFunction() {
    y = 3.14;   // This will also cause an error because y is not declared
    console.log(y);
}


// Deleting a variable (or object) or function is not allowed.
function x(p1, p1) {};      //  Duplicating a parameter name is not allowed

