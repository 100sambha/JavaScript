// With the bind() method, an object can borrow a method from another object.

const person = {
    fName : "Sambhaji",
    lName : "Pandhare",
    fullName : function(){
        return this.fName + " " + this.lName;
    }
}


const members = {
    fName : "Sarkar",
    lName : "Raj"
}

const persons = {
    fName : "Shree",
    lName : "Ram"
}

console.log(person.fullName());

console.log(person.fullName.bind(persons)());

let fullNameObj = person.fullName.bind(members);
console.log(fullNameObj());

setTimeout(fData, 3000);
// setTimeout(person.fullName.bind(person), 3000);


function fData(){
    console.log(person.fullName.bind());
}