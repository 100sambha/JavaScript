const lettersSet = new Set(["A", "B", "C", "D", "A", "B"]);
console.log(lettersSet);



const numbersSet = new Set();
numbersSet.add(1);
numbersSet.add(2);
numbersSet.add(3);
numbersSet.add(1);
numbersSet.add(1);
numbersSet.add(1);

const result = 10;
numbersSet.add(result);
numbersSet.add("AS")

console.log(numbersSet.size);
console.log(numbersSet);

const nameSet = new Set(["Jay", "Veeru", "Dada", "Rao"]);
console.log(nameSet);
nameSet.forEach(function(value) {
    console.log(value);
})
console.log(nameSet.values());


const nameArray = nameSet.values();
for(nameVal of nameArray){
    console.log(nameVal);
}

const setKeys = nameSet.keys();
console.log(setKeys.next());
console.log(setKeys.next());


const entryIterator = lettersSet.entries();
console.log(entryIterator);
for(entryVal of entryIterator){
    console.log(entryVal);
}

console.log(typeof lettersSet);
console.log(lettersSet instanceof Set);