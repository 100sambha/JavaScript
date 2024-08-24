let d = new Date();
console.log(d);
console.log(d.setFullYear(2024));           //  Optionally set day and month
console.log(d.setMonth(11));
console.log(d.setDate(20));
console.log(d.setDate(d.getDate)+20);       //  Will get next month of date
console.log(d.setHours(20));
console.log(d.setMinutes(30));
console.log(d.setSeconds(50));




console.log("**********************************");
let dt = new Date(2024,8,24);
console.log(dt);
console.log(dt.setFullYear(2024,8,24));



console.log("***********************************************");
console.log("Compare two days");
const today = new Date();
const someday = new Date();
someday.setFullYear(2024,1,19);
if(someday > today){
    console.log("Today is Before "+(someday.getDate()+"-"+someday.getMonth()+"-"+someday.getFullYear()));
}else {
    console.log("Today is After "+(someday.getDate()+"-"+someday.getMonth()+"-"+someday.getFullYear()));
}