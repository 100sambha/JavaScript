// With the bind() method, an object can borrow a method from another object.

const userData={
    id : 100,
    fName : "Ram",
    details : function(age){
        return this.id+" "+this.fName+" "+age;
    }
}

const customerData = {
    id : 101,
    fName : "Krishna"
}

console.log(userData.details(25));

// console.log(userData.details.bind(customerData)(26));

let cuData = userData.details.bind(customerData);
console.log(cuData(26));



const person = {
    id : 200,
    fName : "Sambhaji",
    display : function(){
        console.log(this.id+" "+this.fName);
        return this.id+" "+this.fName;
    }
}

let disp = person.display.bind(person);
// console.log(disp());
setTimeout(disp,3000);