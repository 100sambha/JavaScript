// A common use of JSON is to exchange data to/from a web server.
// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.

const uData = '{"name":"Sambhaji", "age":"function(){return 26;}", "city":"Pune","birthday":"2024-01-09"}';
const userData = JSON.parse(uData);

console.log(userData);
console.log(userData.name);
userData.age = eval("(" + userData.age + ")");
console.log(userData.age())
userData.birthday = new Date(userData.birthday);
console.log(userData.birthday);

const cars = '["TATA", "BMW", "TOYATO"]';
carObj = JSON.parse(cars);
console.log(carObj);