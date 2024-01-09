function test(){
    return "Function Declaration";
}
console.log(test);
console.log(test());


// function expression
const abc = function(a,b){return a * b};
let ans = abc;
console.log(ans);
ans = abc(3,3);
console.log("3*3 =",ans);
ans = abc(3, 2) / 2;
console.log("(3 * 2) / 2 =",ans);

let funString = abc.toString();
console.log("Function as String -",funString);


const constructorFunction = new Function("a", "b", "console .log('arguments Length',arguments.length); return a * b");
let re = constructorFunction(10,2);
console.log("10*2 =",re);


// anonymous self-invoking function
(function(){
    console.log("anonymous self-invoking function");
})();


// Arrow functions are not hoisted. They must be defined before they are used.
const arrowFunc = (a,b) => a*b;
// const arrowFunc = (a,b) => {return a*b};
console.log("10*10 =",arrowFunc(10,10));