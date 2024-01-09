// A common use of JSON is to exchange data to/from a web server.
// When sending data to a web server, the data has to be a string.
// Convert a JavaScript object into a string with JSON.stringify().

const obj = {name: "Vikas", age: 20, city: "Wadi", today: new Date(),active:function(){return true;}};
const myJSON = JSON.stringify(obj);
console.log(typeof(myJSON), myJSON);

obj.active = obj.active.toString();
objString = JSON.stringify(obj);
console.log(typeof(objString), objString);

const products = ["Lapy", "Batteries", "Headphones"];
const productString = JSON.stringify(products);
console.log(typeof(productString), productString);

// localStorage.setItem("products", productString);
// localStorage.getItem("product");
// products = JSON.parse(productString);