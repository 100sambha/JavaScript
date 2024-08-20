// Adding or changing an object property
// Object.defineProperty(object, property, descriptor)
const person1 = {
    id : 100,
    fName : "Sarkar",
    designation : "Software Engineer"
}
console.log(person1);
Object.defineProperty(person1,"salary", {value:12302.21});
console.log(person1);
console.log(person1.salary);
Object.defineProperty(person1, "designation", {value:"Java Developer"});
console.log(person1);

Object.defineProperty(person1, "language",{value:"MR"}, {writable:false});
console.log(person1);
console.log(person1.language);


// Adding or changing object properties
// Object.defineProperties(object, descriptors)


// Accessing a Property
// Object.getOwnPropertyDescriptor(object, property)
const person2 = {
    id : 200,
    fName : "Call Spy",
    optional : "no"
}
console.log(person2);
console.log(Object.getOwnPropertyNames(person2));
Object.defineProperty(person2, "language", {enumerable:false});
console.log(Object.getOwnPropertyNames(person2));
console.log(Object.keys(person2));                              // language not showing because enumerable is false



const user = {
    fName : "Sambhaji",
    lName : "Pandhare",
    username : "100Sambha",
    pass : "123123",
}
Object.defineProperty(user,"fullName",{
    get:function(){return this.fName + " " + this.lName}
})
console.log(user.fullName);