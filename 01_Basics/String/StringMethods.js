let text = "My name is Sambhaji Pandhare";
console.log(text);

let output = text.length;
console.log(output);

output = text.slice(11,21)
console.log(output);

output = text.slice(11);
console.log(output);

output = text.slice(-8);
console.log(output);

output = text.slice(-17, -7);
console.log(output);

output = text.substring(8,17);
console.log(output);

output = text.substring(8);
console.log(output);

output = text.substr(3,4);
console.log(output);

output = text.substr(3);
console.log(output);

output = text.substr(-11);
console.log(output);

console.log(text);

text = text.replace("Sambhaji Pandhare", "Sarkar Raj");
console.log(text);

text = text.replace(/Sarkar Raj/g,"Pandhare Sarkar");
console.log(text);

text = "hi hi hii hiii";
text = text.replace("hi", "by");
console.log(text);

text = text.replace(/hi/g, "by");
console.log(text);

text = text.replaceAll("i", "");
console.log(text);

text = text.replaceAll(/hi/g, "by");
console.log(text);

text = text.replaceAll(/hi/g, "by");
console.log(text);

text = text.toUpperCase();
console.log(text);

text = text.toLowerCase();
console.log(text);

text = "         Hello "+text+"           ";
console.log(text);

console.log(text.trimStart());
console.log(text.trimStart().length);
console.log(text.trimEnd());
console.log(text.trimEnd().length);

console.log(text.length);
text = text.trim();
console.log(text);
console.log(text.length);

text = "Sambhaji";
console.log(text);

text = text.padStart(4,"*");
console.log(text);

text = text.padEnd(5,"*");
console.log(text);

console.log(text.charAt(2));
console.log(text.charCodeAt(2));
console.log(text[2]);

text[2] = 'n';                      //String is immutable so won't work.

console.log(text);
console.log(text[2]);

text = "I am the best";
console.log(text);
text = text.split(" ");
console.log(text);
console.log(text.indexOf("best"));
console.log(text.lastIndexOf("the"));

text = "I am the best best";
console.log(text);
console.log(text.indexOf("best"));
console.log(text.lastIndexOf("the"));

console.log(text.search("best"));
console.log(text.search(/the/g));

text = "I am the Best best Best";
console.log(text);

console.log(text.match("best"));
console.log(text.match(/Best/));
console.log(text.match(/Best/g));
console.log(text.match(/Best/gi));          //case in-sensitive search


let it = text.matchAll("best");
console.log(it.next());
console.log(text.matchAll("best"));
console.log(text.matchAll(/Best/g).next());
console.log(text.matchAll(/best/gi).next());

console.log(text.includes("Best"));
console.log(text.includes("Best",13));

console.log(text.startsWith("I"));
console.log(text.startsWith("My"));
console.log(text.startsWith("Best"));
console.log(text.startsWith("best",14));

console.log(text.endsWith("Best"));
console.log(text.endsWith("best"));
console.log(text.endsWith("Best",13));