var x = 10;
{
    // console.log(x);

    let x = 20;
    console.log(x);
}
console.log(x);


var y = 1;
{
    // console.log(y);

    const y = 2;
    console.log(y);
}
console.log(y);


function addition(a,b){
    return a + b;
}
console.log(addition(5,5));


// const division = (a,b)=> { return a / b};
const division = (a,b)=> a / b;
console.log(division(50,2));


const workDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const holidays = ["Saturday","Sunday"];
const weekdays = [...workDays, ...holidays];
console.log(weekdays);

const nums = [4,3,5,6,8,20,5,9,4];
console.log(Math.max(...nums));


for(let day of weekdays){
    console.log(day);
}

for(let character of "Sarkar"){
    console.log(character);
}


const cars = new Map([
    ["TATA",200],
    ["BMW",300],
    ["Toyato",400]
])
cars.set("Jaguar",230);
console.log(cars.get("TATA"));
console.log(cars.get("Jaguar"));

const letters = new Set();
letters.add("A");
letters.add("B");
letters.add("C");
letters.add("D");
letters.add("E");