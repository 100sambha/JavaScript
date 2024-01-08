const userData = {
    "admin":"Sarkar",
    "user":"Jay",
    "profile":"Dev",
    "age":25,
    "salary":100
};
console.log(userData);
console.log("Admin: " + userData.admin +" and "+"Profie : "+userData.profile);
console.log("User: " + userData["user"] +" and age: " + userData["age"] +" and salary: " + userData["salary"]);


// adding new object property
userData.nationality = "Bharat";
console.log(userData);

// object looping
for(let objVal in userData){
    console.log(objVal+" : "+userData[objVal]);
}

// delete object property
delete userData.admin;
// delete userData["salary"];
console.log(userData);



// Nested object
const employeeInfo = {
    "userName":"Sambhaji",
    "Department":"Development",
    address:{
        "village":"Chvhanwadi",
        "town":"Shevgaon",
        "city":"A.nagar"
    }
}
console.log(employeeInfo);
console.log(employeeInfo['userName']);
console.log(employeeInfo.address.town);
console.log(employeeInfo.address["city"]);
// console.log(employeeInfo["address"]["city"]);

const addr = employeeInfo.address;
console.log(addr.village);

// Nested Arrays and Objects
const formData = {
    "empId":100,
    "company":"test company",
    contactDetails:[
        {"use":"Personal",mobileNumber:[234168,783045]},
        {"use":"Office",mobileNumber:[899005,432898]}
    ],
    cred:{
        "uName":"asdf",
        "password":"test123",
    }
}
console.log(formData);

for(let obj in formData.contactDetails) {
    console.log(formData["contactDetails"][obj].use);
    for(let mobNum in formData.contactDetails[obj].mobileNumber){
        console.log(formData.contactDetails[obj].mobileNumber[mobNum]);
    }
}