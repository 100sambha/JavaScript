//  Call Method takes arguments as an array
const user = {
    userDetails : function(city, salary){
        return this.id+" "+this.fName+" "+this.age+" "+city+" "+salary;
    }
}

const user1 = {
    id : 100,
    fName : "Sambhaji",
    age : 20
}

console.log(user.userDetails.apply(user1,["Ahilyanagar", 12035.12]));

// Max on arrays
// Here, First Parameter does not matter.
console.log(Math.max.apply(null,[1,0,4,3,5,6,9,8,4]));
console.log(Math.max.apply(" ",[1,0,4,3,5,6,9,8,4]));
console.log(Math.max.apply(0,[1,0,4,3,5,6,9,8,4]));
console.log(Math.max.apply(Math,[1,0,4,3,5,6,9,8,4]));