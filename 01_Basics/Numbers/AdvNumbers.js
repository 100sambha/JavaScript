let num1 = 200;
let friut = "Apple";
let not_a_Number = NaN                      //NaN data type is Number

console.log(num1 / friut);
console.log(isNaN(num1 / friut));


let infinityNumber = Infinity;              //infinity data type is Number


{
    //object comparison can't work with === symbol.
    let num1 = 100;
    let num2 = 100; 
    let num3 = new Number(100);
    let num4 = new Number(100);
    console.log(num1==num2);
    console.log(num1===num2);
    console.log(num1==num3);
    console.log(num1===num3);
    console.log(num3==num4);
    console.log(num3===num4);
}


let bigIntNum = 546512121954984161654484115;
console.log(bigIntNum);

bigIntNum = BigInt(546512121954984161654484115);
console.log(bigIntNum);


console.log("Numbers Conversion");
let num = 123;
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(10));
console.log(num.toString(12));
console.log(num.toString(16));
console.log(num.toString(32));
console.log(num.toString(36));