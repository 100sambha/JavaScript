//  Call Method takes arguments separately

const user1 = {
    fName : "Sambhaji",
    lName : "P",
    fullName:function(){
        return this.fName+" "+this.lName;
    }
}

const user2 = {
    fName : "Indian",
    lName : "Army",
    fullName:function(){
        return this.fName+" "+this.lName;
    }
}

console.log(user1);
console.log(user1.fullName());
console.log(user2);
console.log(user2.fullName());



console.log("Using Call Method");
const user = {
    fullName : function(){
        return this.fName+" "+this.lName;
    }
}

const user3 = {
    fName : "Sarkar",
    lName : "Raj"
}

const user4 = {
    fName : "Jay",
    lName : "Ho"
}

console.log(user.fullName.call(user3));
console.log(user.fullName.call(user4));


// call() method with arguments
const userDetails = {
    fullName : function(age, city){
        return this.fName+" "+this.lName+", "+age+", "+city;
    } 
}
const user5 = {
    fName : "Kiran",
    lName : "Dev",
}
console.log(userDetails.fullName.call(user5,25,"Nagar"));