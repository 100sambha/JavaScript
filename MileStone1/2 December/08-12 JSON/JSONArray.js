// Arrays in JSON are almost the same as arrays in JavaScript.
// In JSON, array values must be of type string, number, object, array, boolean or null.
// In JavaScript, array values can be all of the above, plus any other valid JavaScript expression, including functions, dates, and undefined.

myJSON = '["Ford", "BMW", "Fiat"]';
myArray = JSON.parse(myJSON);
console.log(myArray[0]);

for(let i in myArray){
    console.log(myArray[i]);
}

for(let i = 0; i<myArray.length; i++){
    console.log(myArray[i]);
}


const myObj = {
    "name":"John",
    "age":30,
    "cars":["Ford", "BMW", "Fiat"]
}
console.log(myObj.cars[0]);
