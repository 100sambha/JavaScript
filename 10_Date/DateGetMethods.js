const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let d = new Date("08-24-2024");
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(month[d.getMonth()]);
console.log(d.getDate());
console.log(d.getDay());
console.log(days[d.getDay()]);


console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());

console.log(d.getTime());
console.log(Date.now());





let dt = new Date();
console.log(dt.getFullYear());
console.log(dt.getMonth());
console.log(month[d.getMonth()]);
console.log(dt.getDate());
console.log(dt.getDay());
console.log(days[dt.getDay()]);

console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getSeconds());
console.log(dt.getMilliseconds());

console.log(dt.getTime());
console.log(Date.now());


// to get UTC time date need to place UTC after get in date date methods Like, d.getUTCDate()