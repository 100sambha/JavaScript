let d = new Date("2024-08-23");
console.log(d);

d = new Date("2024-08");
console.log(d);

d = new Date("2024");
console.log(d);

d = new Date("2024-08-23T10:10:10Z");
console.log(d);

d = new Date("2024-08-23T10:10:10-05:30");
console.log(d);

d = new Date("08/23/2024");
console.log(d);

d = new Date("AUG 23 2024");
console.log(d);

d = new Date("23 AUG 2024");
console.log(d);

d = new Date("23 AUGUST 2024");
console.log(d);

d = new Date("AUGUST 23 2024");
console.log(d);

d = new Date("AUGUST, 23, 2024");
console.log(d);

d = Date.parse("AUGUST 23, 2024");
console.log(d);
d = new Date(d);
console.log(d);