const carData = {
    "model":"XUV",
    "price":1000000,
    "name":"TATA",
    "today":new Date(),
    color:function(){
        return "White";
    }
}

console.log(carData);
console.log(carData.name+" "+carData.model+" "+carData.price);


for(let carObjProp in carData){
    console.log(carObjProp+" "+carData[carObjProp]);
}

console.log(Object.values(carData));

let carDataString = JSON.stringify(carData);        //Stringify not converting object functions to string
console.log(carDataString);


const names = ["TATA", "Ambani", "Adani"];
let arrayStringify = JSON.stringify(names);
console.log();