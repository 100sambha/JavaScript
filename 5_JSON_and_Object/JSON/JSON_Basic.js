const employee = require('./JSON_XML_Files/Employee.json');
const student = require('./JSON_XML_Files/Student.json');
console.log(employee);
// console.log(employee.employees);
// console.log(employee.employees[1]);
let jsonToString = JSON.stringify(employee);
console.log(jsonToString);
let stringToJson = JSON.parse(jsonToString);
console.log(stringToJson);

console.log(student);
// console.log(student.name);
// console.log(student["name"]);
// console.log(student.Field);
student.Field = "Army";
console.log(student);
student["Field"] = "Business";
console.log(student);

// JSON and XML can be used to receive data from web server
// In JSON values must be in following data type -> String, Number, JSON Object, Array, Boolean, null.
// In JSON values cannot be function, date, undefined.

const userDetails = JSON.parse('{"name":"Ram", "age":30, "city":"Ayodhya","DOB":"2024-09-15"}');
const userPlayed = JSON.parse('["Cricket","Kabbadi","kho-kho"]');
console.log(userDetails);
console.log(userPlayed);


// Implementation of reviver function
const userText = '{"name":"Ram", "age":30, "city":"Ayodhya","DOB":"2024-09-15"}';
const userDetail = JSON.parse(userText,function(key,value){
    if(key== "DOB"){
        return new Date(value);
    }
    else{
        return value;
    }
})
console.log(userDetail);

// we can write functions in JSON object as well but it is not sugestable/allowd in JSON


// Storing data to localStorage is always better to store in string format and get it back and convert it into JSON format
// try over console or with HTML page
// const myData = {name:"Sambhaji", age:26, education:"BE"};
// const jsonTOStringC = JSON.stringify(myData);
// console.log(jsonTOStringC);
// localStorage.setItem("myData",jsonTOStringC);

// const myDataString = localStorage.getItem("myData");
// const stringToJSONC = JSON.parse(myDataString);
// console.log(stringToJSONC);


// iterate object
const myData = '{"name":"Sambhaji", "age":26, "education":"BE", "cars":["Ford", "BMW", "Fiat"]}';
const jsonData = JSON.parse(myData);
console.log(jsonData);
console.log(jsonData.cars);
// console.log(jsonData['cars']);
console.log(jsonData['cars'][0]);
// for(let key in jsonData){
//     console.log(key+" : "+jsonData[key]);
// }

// Object.entries(jsonData).forEach((entry)=>{
//     const[key, value] = entry;
//     console.log(key + " : "+value);
// })

Object.entries(jsonData).forEach(([key, value])=>{
    console.log(key + " : "+value);
});


