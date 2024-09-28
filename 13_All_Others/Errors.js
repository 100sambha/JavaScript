// The try statement defines a code block to run (to try).
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a custom error.
// If you use throw together with try and catch, you can control program flow and generate custom error messages.

try{
    let num = 2;
    let divisor = 1

    if(num == 0) throw "Num is Zero";
    let x = num / divisor;
    console.log(x)
    num.toPrecision(500);
    adddlert("Welcome guest!");
}
catch(ReferenceError){
    console.log(err);
}
finally{
    console.log("error at try block")
}


// EvalError - An error has occurred in the eval() function
// Newer versions of JavaScript do not throw EvalError. Use SyntaxError instead.

// RangeError - A number "out of range" has occurred
// A number cannot have 500 significant digits

// ReferenceError - An illegal reference has occurred
// x = y + 1;   // y cannot be used (referenced)

// SyntaxError - A syntax error has occurred
// eval("alert('Hello)");   // Missing ' will produce an error

// TypeError - A type error has occurred
// ex - You cannot convert a number to upper case

// URIError - An error in encodeURI() has occurred
// decodeURI("%%%");   // You cannot URI decode percent signs