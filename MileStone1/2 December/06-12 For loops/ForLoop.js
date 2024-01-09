
for(let i = 1; i<=10; i++){
    console.log("Serial Number ",i)
}

const cars = ["TATA", "BMW", "TOYATO", "MERCIDIS", "SUZUKI"];
for(let i = 0, text =""; i<cars.length; i++){
    text = cars[i];
    console.log(i+1,text);
}


let i=0;
for(;;){
    console.log(cars[i]);
    i++;
    if(cars[i]==undefined){
        break;
    }
}