let d = new Date();
console.log(d);

d = new Date("2024-08-22");
console.log(d);

d = new Date("August 22, 2024 10:10:10.23");
console.log(d);

// 7 numbers specify year, month, day, hour, minute, second, and millisecond
// 6 numbers specify year, month, day, hour, minute, second
// 5 numbers specify year, month, day, hour, and minute
// 4 numbers specify year, month, day, and hour
// 3 numbers specify year, month, and day
// 2 numbers specify year and month
// If you supply only one parameter it will be treated as milliseconds
// One and two digit years will be interpreted as 19xx
// JavaScript counts months from 0 to 11

console.log("With nums input");
d = new Date(2024,9,12,10,42,54,654);
console.log(d);
d = new Date(2024,9,12,10,42,54);
console.log(d);
d = new Date(2024,9,12,10,42);
console.log(d);
d = new Date(2024,9,12,10);
console.log(d);
d = new Date(2024,9,12);
console.log(d);
d = new Date(2024,9);
console.log(d);
d = new Date(2024);
console.log(d);

console.log("Previous Century Date");
d = new Date(99,11,25);
console.log(d);
d = new Date(9,3,10);
console.log(d);


// JavaScript stores dates as number of milliseconds since January 01, 1970
d = new Date(0);
console.log(d);
d = new Date(24*60*60*1000);
console.log(d);
d = new Date(100000000000);
console.log(d);

console.log("Date Basic String Methods");
d = new Date();
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toUTCString());
console.log(d.toISOString());
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());