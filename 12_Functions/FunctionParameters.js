// Function parameters are the names listed in the function definition.
// Function arguments are the real values passed to (and received by) the function.
// JavaScript function definitions do not specify data types for parameters
// variable is declared but not assign or missing, then it is undefined

console.log("default and passed values");
myFunction(12);

function myFunction(a,b=10,c){
    console.log("a "+a);                    //  Passed with calling
    console.log("b "+b);                    //  Default value in function if not passed
    console.log("c "+c)                     //  Default undefined
}

let sum = 0;
let max = -Infinity;
let i=0;
myRestParamFunction(1,2,3,5);
function myRestParamFunction(...args){
    for(let val of args){
        console.log(val);
        // sum+=val;
        sum+=args[i];
        if(max<val){
            max=val;
        }
        i++;
    }
}
console.log("sum : "+sum);
console.log("Max : "+max);
