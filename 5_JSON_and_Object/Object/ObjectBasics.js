// We Can Create Object using following ways
    // using Object literal
    // using new keyword
    // using Object Constructor
    // using Object.assign()
    // using Object.create()
    // using Object.fromEntries()

console.log("Using Object Literal");
const person = {}
person.id = 6431;
person.fName = "Sambhaji";
person.designation = "Software Engineer";
person.salary = 15632.32;
console.log(person);

console.log("Using new Object");
const user = new Object();
person.id = 6561;
person.fName = "Santosh";
person.designation = "Technical Engineer";
person.salary = 11223.56;
console.log(person);

console.log("Using Constructor Function");
function Test(id,fName,designation,salary){
    this.id = id;
    this.fName = fName;
    this.designation = designation;
    this.salary = salary;
    this.language = "Marathi";                      // Default value to we can set in function constructor
}
const customer = new Test(100,"Sarkar","QA",1232.23);
console.log(customer);

// Object prototype
// Date objects inherit from Date.prototype likewise every object inherit from own prototype
// but Object.prototype is on top of the prototype inheritance chain
// TO existing object to add new property, JavaScript prototype property allows you to add new properties to object constructor
Test.prototype.workHours = 8;
const cu = new Test(100,"Raj","QA",1232.23);
console.log(cu);
console.log(cu.workHours);

Test.prototype.fullName = function() {
    return this.fName + " " + this.designation;
  };

console.log(cu);
console.log(cu.fullName());