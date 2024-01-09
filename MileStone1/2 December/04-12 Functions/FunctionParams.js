// JavaScript function definitions do not specify data types for parameters.
// JavaScript functions do not perform type checking on the passed arguments.
// JavaScript functions do not check the number of arguments received.

console.log("Default Parameters")
function defParmFunction(x,y){
    if(y==undefined){
        y = 1;
    }
    return x * y;
}
console.log(defParmFunction(4));
console.log(defParmFunction(4,3));


console.log("Default Parameter Values")
function defValFunction(x,y=10){
    return x * y;
}
console.log(defValFunction(2));
console.log(defValFunction(7,6));


console.log("Function Rest Parameter");
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

// arguments object
function restParamFunctions(){
    let sum = 0;
    let max = -Infinity;
    for(let i = 0; i<arguments.length; i++){
        console.log(arguments[i]);
        sum+=arguments[i];
        if(max<arguments[i])
        {
            max = arguments[i];
        }
    }
    console.log("Max Number of Parameter",max);
    return sum;
}
console.log(restParamFunctions(5,3,4,20,8,9,7));