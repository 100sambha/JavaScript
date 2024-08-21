let temp = "";
const friends = ["Tushar", "Prashant", "Sagar", "Shambhu", "Vikas"];
console.log(friends);

console.log(friends.length);

console.log(friends.toString());

console.log(friends.at(2));
console.log(friends[4]);

console.log(friends.join(" * "));

temp = friends.pop();
console.log("Pop Ele :"+temp);
console.log(friends);

temp = friends.push("Rahul");
console.log("Push Ele :"+temp);
console.log(friends);

temp = friends.shift();
console.log("shift Ele :"+temp);
console.log(friends);

temp = friends.unshift("Sachin");
console.log("Unshift ele "+temp);
console.log(friends);

friends[friends.length] = "Abhi";
console.log(friends);

// delete friends[2];               //keep undefined space, use pop or shift

const oldFriends1 = ["Ganesh", "Gokul", "Gandhi", "Lodha"]
const oldFriends2 = ["Akash","Dhawan","Joshi"];
console.log(oldFriends1);
console.log(oldFriends2);


console.log(friends.concat(oldFriends1));
console.log(friends.concat(oldFriends1,oldFriends2));
console.log(friends.concat("Babu", "Krushna"));


console.log(friends);
console.log(friends.copyWithin(2,0));
console.log(friends.copyWithin(2,0,2));


const nums = [[1,2],[4,5],[[6,7],8]];
console.log(nums);
console.log(nums.flat());


const numbers = [3,4,5,6,7];
const newNumbers = numbers.flatMap(x=>[x,x*10]);
console.log(numbers);
console.log(newNumbers);


numbers.splice(2,0,88,99);
console.log(numbers);

numbers.splice(4,2,11,33)
console.log(numbers);


console.log(numbers.slice(2));
console.log(numbers.slice(5));
console.log(numbers.slice(2,5));