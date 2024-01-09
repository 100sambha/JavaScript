const personDetails = {
    fullName:function(){
        return this.fName + " " +this.lName;
    },
    fullDetails:function(landmark,town,city,pincode){
        return this.fName + " " + this.lName + " - " + landmark + " " + town + " " + city + " " +pincode;
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

console.log(personDetails.fullName.call(person1));
console.log(personDetails.fullName.call(person2));

console.log(personDetails.fullDetails.call(person1,"Hanuman Mandir", "Chavhanwadi", "Shevgaon", 414502));