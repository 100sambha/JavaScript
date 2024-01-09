// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays
// JSON names require double quotes.
// In JSON, keys must be strings, written with double quotes
// In JavaScript, keys can be strings, numbers, or identifier names

// Example
const uName = {"name":"Sambhaji",salary:200}
console.log(uName);
console.log(uName.name);
console.log(uName["salary"]);
uName.name = "Raj"
console.log(uName);
uName.name = "SS"
console.log(uName);


// In JSON, values must be one of the following data types:
    // a string
    // a number
    // an object
    // an array
    // a boolean
    // null

    // In JavaScript values can be all of the above, plus any other valid JavaScript expression, including:
        // a function
        // a date
        // undefined