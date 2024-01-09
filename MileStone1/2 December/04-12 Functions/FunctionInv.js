// function myFunction(a, b) {
//     return a * b;
// }
// window.myFunction(10, 2);

// this keyword
// this keyword refers to an object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// Invoking a Function as a Method
const empRec = {
    fName:"Sambhaji",
    domain:"Developer",
    details:function(){
        console.log(this);
        return this.fName + " " + this.domain;
    }
}
console.log(empRec.details());


// Invoking a Function with a Function Constructor
function myFunc(a,b){
    this.args1 = a;
    this.args2 = b;
    
    this.add = function(){
        return this.args1 + this.args2;
    }
}
let myFuncObj = new myFunc(10,3);
console.log(myFuncObj.args1, myFuncObj.args2)
console.log(myFuncObj.add());