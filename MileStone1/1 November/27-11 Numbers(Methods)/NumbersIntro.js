let num1 = 3;
console.log(num1);

let num2 = 3.14;
console.log(num2);

let num3 = 123e5;
console.log(num3);

let num4 = 123e-5;
console.log(num4);

let num5 = 1234567890123456;
console.log(num5);

console.log("10" + "10");
console.log(10+"10");
console.log("10"+20);
console.log(10+20+"30");


console.log("10"*"2");
console.log("10"*2);
console.log(10*"2");

console.log("10"/"2");
console.log("10"/2);
console.log(10/"2");

console.log("10"-"2");
console.log("10"-2);
console.log(10-"2");


console.log(100/NaN);
console.log(isNaN(100/NaN));
console.log("5"+NaN+2);


let num = 10;
while(num!= Infinity){
    num*=num;
}
console.log("Loop Infinity Completed 1");

let x = 10;
while(x!= Infinity){
    try {
        x/=0;
    } catch (error) {
        console.log(error);
    }
}
console.log("Loop Infinity Completed 2");


let num6 = 32;
console.log(num6.toString(2));
console.log(num6.toString(8));
console.log(num6.toString(10));
console.log(num6.toString(12));
console.log(num6.toString(16));
console.log(num6.toString(32));
console.log(num6.toString(36));


let firstNum = 100;
let secondNum = new Number(100);
let thirdNum = new Number(100);
console.log("First Num: " + firstNum);
console.log("Second Num: " + secondNum);
console.log("Third Num: " + thirdNum);
console.log("firstNum==secondNum: ", firstNum==secondNum);
console.log("firstNum===secondNum: ", firstNum===secondNum);
console.log("secondNum==thirdNum: ", secondNum==thirdNum);
console.log("secondNum===thirdNum: ", secondNum===thirdNum);x