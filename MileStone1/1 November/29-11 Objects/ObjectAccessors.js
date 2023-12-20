const empData = {
    "empName":"Sambhaji",
    "empDesignation":"Engineer",
    "location":"",
    get eName(){
        return this.empName;
    },
    set locate(loc){
        this.location = loc.toUpperCase();
    },
}

console.log(empData);
console.log(empData.eName);

empData.locate = "Bharat";
console.log(empData.location);



const countObj = {counter:0};
console.log(countObj);

Object.defineProperty(countObj,"Status",{value:true});

console.log(countObj);
Object.defineProperty(countObj,"reset",{
    get : function(){this.counter=0;}
});

Object.defineProperty(countObj,"increment",{
    get : function(){this.counter++;}
});

Object.defineProperty(countObj,"decrement",{
    get : function(){this.counter--;}
})

Object.defineProperty(countObj,"Add",{
    set : function(value){this.counter+=value;}
});

Object.defineProperty(countObj,"subtract",{
    set : function(value){this.counter-=value;}
});

countObj.reset;
console.log(countObj);
countObj.increment;
console.log(countObj);
countObj.decrement;
console.log(countObj);
countObj.Add=10;
console.log(countObj);
countObj.subtract=5;
console.log(countObj);
countObj.reset;