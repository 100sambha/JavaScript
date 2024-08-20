const person = {
    id : 100,
    fName : "Sambhaji",
    lName : "Pandhare",
    designation : "",
    language : "",
    
    set lang(lang){
        this.language = lang;
    },
    
    get fullName(){
        return this.fName+" "+this.lName;
    },
    
    fullname:function(){
        return this.fName+" "+this.lName;
    },

    set desi(desi){
        this.designation = desi.toUpperCase();
    }
}

console.log(person);

person.lang = "Marathi"
console.log(person.language);

console.log(person.fullName);

console.log(person.fullname());

person.desi = "Java Develoer"
console.log(person.designation);


const obj = {counter:0};
Object.defineProperty(obj, "reset",{
    get : function(){
        return this.counter = 0;
    }
});

Object.defineProperty(obj,"inc",{
    get : function(){
        return ++this.counter;
    }
});

Object.defineProperty(obj,"dec",{
    get : function(){
        return --this.counter;
    }
});

console.log(obj.reset);
console.log(obj.inc);
console.log(obj.inc);
console.log(obj.inc);
console.log(obj.dec);
console.log(obj.dec);