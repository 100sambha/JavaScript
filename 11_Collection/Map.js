let fruits = new Map([
    ["Apple", 200],
    ["Banana", 50],
    ["Grapes", 80]
]);
console.log(fruits);

fruits.set("Lemon", 300);
fruits.set("Watermelon",60);
console.log(fruits);

console.log(fruits.get("Apple"))

console.log(typeof(fruits));
console.log(fruits instanceof Map);

console.log(fruits.size);

fruits.delete("Banana");
console.log(fruits);

// Remove All Elements
// fruits.clear();
// console.log(fruits);

console.log(fruits.has("Apple"));
console.log(fruits.has("Banana"));

let text = "";
fruits.forEach(function(val){
    text+=val+" ";
});
console.log(text);

text = "";
for(let entry of fruits.entries()){
    text+=entry+" ";
}
console.log(text);

text="";
for(let key of fruits.keys()){
    text+=key+" ";
}
console.log(text);

text="";
for(let val of fruits.values()){
    text+=val+" ";
}
console.log(text);

const orange = {name : "Orange"};
fruits.set(orange, 150);
console.log(fruits);

console.log(fruits.get("orange"));
console.log(fruits.get(orange));
// console.log(fruits.get(orange["name"]));