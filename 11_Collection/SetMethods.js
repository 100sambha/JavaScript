console.log("Set");
const letters = new Set(["a", "b", "c", "d"]);
console.log(letters);

console.log("add");
letters.add("e");
letters.add("f");
letters.add("f");
console.log(letters);

let text = "";
console.log("Has");
console.log(letters.has("b"));
console.log(letters.has("x"));

console.log("forEach");
letters.forEach(function(value){
    text+=value+" ";
});
console.log(text);

console.log("values");
const myIterator = letters.values();
console.log(myIterator);

text = "";
for(let it of myIterator){
    text+=it+" ";
}
console.log(text);

console.log("keys");
text = "";
for(let key of letters.keys()){
    text+=key+" ";
}
console.log(text);

console.log("entries");
text = "";
for(let entry of letters.entries()){
    console.log(entry);
}