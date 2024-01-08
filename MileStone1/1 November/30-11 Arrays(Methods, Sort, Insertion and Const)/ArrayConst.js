const cars = ["Toyato", "Thar", "Mercedes", "BMW"]
console.log(cars);

// Arrays are not constant means they can be reassigned but we can't declare or initalize them but we can update them
// Arrays has to be initialized when they are declared
// const have block scope
// cars = ["TATA", "Wox Wagen", "Sumo"]

cars[0] = "TATA";
console.log(cars);

cars.push("Nano");
console.log(cars);

{
    const cars = ["Test"]
    console.log(cars);
}