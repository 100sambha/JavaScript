const cars = ["Test", "BMW", "TATA", "MAHINDRA", "Test"];
console.log(cars);

console.log(cars.indexOf("BMW")+1);
console.log(cars.indexOf("MAHINDRA")+1);
console.log(cars.indexOf("TOYATO")+1);
console.log(cars.indexOf("Test",3)+1);


console.log(cars.lastIndexOf("Test")+1);
console.log(cars.lastIndexOf("BMW")+1);
console.log(cars.lastIndexOf("TATA",3)+1);


console.log(cars.includes("Test"));
console.log(cars.includes("BMW"));
console.log(cars.includes("BENz"));

console.log(cars.find(myfunction1));
function myfunction1(value, index, cars) {
    return (value==="Test");
}


const nums = [1,4,3,5,6,7,3,2,5];
console.log(nums);

console.log("Number "+nums.find(myfunction2));
console.log("Index " + nums.findIndex(myfunction2));
function myfunction2(value, index, nums) {
    return (value>6);
}

console.log("Number "+nums.findLast(num=>num>6));
console.log("Index "+nums.findLastIndex(num=>num>6));