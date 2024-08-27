function functionInvocation(a, b){
    console.log("Add - "+(a+b));
    return this;
}
console.log(functionInvocation(100,20));
// console.log(windows.functionInvocation(10,3));


const user = {
    fName:"Sambhaji",
    lName:"Pandhare",
    age:30,
    salary:32012.02,
    fullName:function(){
        console.log(this.fName+" "+this.lName);
        return this;
    }
}
console.log(user.fullName());

function constructorFunc(args1, args2) {
    this.fName = args1;
    this.lName = args2;
}

const obj = new constructorFunc("Sambhaji", "Pandhare");
console.log(obj.fName);
console.log(obj.lName);