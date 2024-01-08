let myName = "Sarkar";
console.log("myName - ", myName);
console.log("Legth of myName: " + myName.length);


let newSliceString = myName.slice(3);
console.log(newSliceString);
console.log(myName);

newSliceString = myName.slice(0,4);
console.log(newSliceString);
console.log(myName);

newSliceString = myName.slice(-2);
console.log(newSliceString);
console.log(myName);

newSliceString = myName.slice(-4,-2);
console.log(newSliceString);
console.log(myName);


console.log(myName.substring(2,5));
console.log(myName.substring(2));
console.log(myName);


let favouiQuotes = "I can do it";
console.log("Favorite Quotes: " + favouiQuotes);
console.log(favouiQuotes.substr(2,3));
console.log(favouiQuotes.substr(2));
console.log(favouiQuotes.substr(-5));


let comment = "I am the best and I can do it";
console.log("Comment: " + comment);
console.log(comment.replace("best", "good"));
console.log(comment.replace("Best", "good"));
console.log(comment.replace(/Best/i, "good"));
console.log(comment.replace(/I/g, "Yeas"));
console.log(comment.replaceAll(/and/g, "or"));

let slogan = "Jay Ho";
console.log("My Slogan: " + slogan);
console.log(slogan.toLowerCase());
console.log(slogan.toUpperCase());
console.log(slogan[0]);

let desh = "Bharat";
console.log(desh.charAt(0));
console.log(desh.charCodeAt(0));
console.log(desh.split(""));
console.log(slogan.concat(" ",desh));
console.log(desh.padStart(10,"*"));
console.log(desh.padEnd(10,"*"));

let sampleString = "        Use it      ";
console.log("Sample string: " + sampleString);
console.log(sampleString.trim());
console.log(sampleString.trimStart());
console.log(sampleString.trimEnd());