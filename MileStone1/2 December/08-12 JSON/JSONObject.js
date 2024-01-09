// JSON object literals are surrounded by curly braces {}.
// JSON object literals contains key/value pairs.
// Keys and values are separated by a colon.
// Keys must be strings, and values must be a valid JSON data type:string, number, object, array, boolean, null
// Each key/value pair is separated by a comma.

const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);
x = myObj.name;
console.log(x)

for (const x in myObj) {
    console.log(x, myObj[x]);
}