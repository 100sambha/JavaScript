// const letters = new Set();
const letters = new Set(["a", "b", "c", "d"]);
console.log(letters);

letters.add("e");
letters.add("f");
letters.add("f");
letters.add("f");
letters.add("g");
letters.add("g");
letters.add("g");
// Duplicate values not allowed in set

let h = "h";
let i = "i";
let j = "j";
console.log(letters);

letters.add(h);
letters.add(i);
letters.add(j);
console.log(letters);


let text = "";
for(let letter of letters){
    text+=letter+" ";
}
console.log(text);

console.log(typeof(letters));
console.log(letters instanceof Set);