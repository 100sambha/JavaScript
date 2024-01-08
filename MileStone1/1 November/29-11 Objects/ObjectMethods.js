// the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.
// If you access the method property, without (), it will return the function definition


const userData = {
    "fName":"Sarkar",
    "lName":"Jay",
    "profile":"Dev",
    "age":25,
    salary:function(){return this.age*350}
};

console.log(userData);
console.log(userData.salary);
console.log(userData.salary());


// add new method to an object
userData.location = function(){
    return "Pune".toUpperCase();
}
console.log(userData);
console.log(userData.location());

