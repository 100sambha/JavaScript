// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

const persaonData = {
    fullName: function(){
        return this.fName + " " + this.lName;
    },
    fullDetails: function(town, city){
        return this.fName +" " + this.lName + " - " + town + " " + city;
    }
}

const person1 = {
    fName : "Sambhaji",
    lName : "Pandhare"
}

const person2 = {
    fName : "Vikas",
    lName : "Ughade"
}

console.log(persaonData.fullName.apply(person1));
console.log(persaonData.fullName.apply(person2));

console.log(persaonData.fullDetails.apply(person1, ["Shevgaon", "Nagar"]));
console.log(persaonData.fullDetails.apply(person2, ["Shevgaon", "Nagar"]));


console.log(Math.max.apply(Math, [1,4,6,44,8,4,7,5]));
// console.log(Math.max.apply(null, [1,4,6,44,8,4,7,5]));
// console.log(Math.max.apply(" ", [1,4,6,44,8,4,7,5]));
// console.log(Math.max.apply(0, [1,4,6,44,8,4,7,5]));

