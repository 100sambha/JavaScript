const empNames = ["Saurabh", "Tushar", "Kishor", "Ganesh"]
console.log(empNames);
console.log(empNames.length);               //return length of array
console.log(empNames.toString());           //return array of string
console.log(empNames.join(" - "));          //return string array with join string
empNames.pop();                             //remove last element
console.log(empNames);
empNames[empNames.length]="Krishna"
console.log(empNames);
empNames.push("Prashant");                  //Add new element to last of array
console.log(empNames);
empNames.shift();                           //remove first element
console.log(empNames);
empNames.unshift("Sambhaji");
console.log(empNames);
console.log(empNames[0]);
empNames[2] = "Ram";
console.log(empNames);
delete empNames[3];                         //delete element from array but keep element location to undefined
console.log(empNames);

const interNames = ["Jay", "Veeru"];
console.log(interNames);

const allEmp = empNames.concat(interNames);
console.log(allEmp);

const junEmp = ["Caran", "Kris"];
console.log(junEmp);

const allEmps = empNames.concat(interNames, junEmp);
console.log(allEmps);

console.log(allEmps);
console.log(allEmps.concat("Peter"));

const combineArray = [empNames, junEmp, interNames];
console.log(combineArray);

console.log(combineArray.flat());

console.log(empNames.splice(2,0,"Sarkar", "Raj"));
console.log(empNames);
console.log(empNames.splice(0,3,"Test"));
console.log(empNames);
console.log(empNames.splice(0,1));
console.log(empNames);
// console.log(empNames.toSpliced(0,1));


console.log(empNames.slice(2));
console.log(empNames.slice(1,3));
console.log(empNames.slice(1));