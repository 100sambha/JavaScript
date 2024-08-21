const fruits = ["Pinapple", "Banana", "Mango", "Apple"];
console.log(fruits);
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

const animals = ["Dog", "Cat", "Tiger", "Lion", "Panther"];
animals.toSorted();
console.log(animals);
console.log(animals.toSorted());
animals.toReversed();
console.log(animals.toReversed());

const nums = [8, 9, 12, 7, 10, 22, 89, 65, 4, 55, 70];
console.log(nums.toSorted());

console.log("Assending");
nums.sort(function (a, b) { return a - b });
console.log(nums);
console.log("Descending");
nums.sort(function (a, b) { return b - a });
console.log(nums);

console.log("Find Max");
console.log("Max : " + nums[0]);
console.log("Find Max");
console.log("Min : " + nums[nums.length - 1]);


console.log("Ganerate Randon Order");
const points = [40, 100, 1, 5, 25, 10];
console.log(points);
for (let i = points.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
}
console.log(points);

console.log("Way 1");
console.log(myArrMin(points));
function myArrMin(arr) {
    return Math.min.apply(null, arr);
}

console.log(myArrMax(points));
function myArrMax(arr) {
    return Math.max.apply(null, arr);
}

console.log("Way 2");
myArrMax2(points);
function myArrMax2(points) {
    let max = -Infinity;
    let arrLen = points.length;
    while (arrLen--) {
        if (points[arrLen] > max)
            max = points[arrLen];
    }
    console.log("Max : " + max);
}

myArrMin2(points);
function myArrMin2(points) {
    let min = Infinity;
    let arrLen = points.length;
    while (arrLen--) {
        if (points[arrLen] < min)
            min = points[arrLen];
    }
    console.log("Min : " + min);
}


const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

console.log("Based on Year");
cars.sort(function (a, b) {
    return a.year - b.year;
});

console.log(cars);

console.log("Based on Type");
cars.sort(function (a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) { return -1 }
    if (x > y) { return 1 }
    return 0;
});
console.log(cars);