const products = ["Laptop", "Charger", "Headphone", "Mouse", "Keyboard"];

console.log(products.sort());
console.log(products.reverse());

// console.log(products.toSorted());


const nums = [10, 2,54,23,55,75];
console.log(nums);
console.log(nums.sort());                           //Alphabetic order sorting
console.log(nums.sort(function(a,b){return a-b}));  //Numerical sorting
console.log(nums.sort(function(a,b){return b-a}));



console.log(nums.sort(function(){return 0.5-Math.random()}));   //Random Order sorting

console.log(sortArray());             //Fisher Yate sorting Method
function sortArray(){
    for(let i = nums.length-1; i>0 ; i--){
        let j = Math.floor(Math.random()*(i+1))
        let k = nums[i];
        nums[i] = nums[j];
        nums[j] = k;
    }
    return nums;
}

console.log("Ascending");
nums.sort(function(a,b){return a-b});   //sort array to find smallest element and largest element in assending array
console.log(nums[0]);                   //Smallest element
console.log(nums[nums.length-1]);       //largest element

console.log("Descending");
nums.sort(function(a,b){return b-a});   //sort array to find smallest element and largest element in descending array
console.log(nums[0]);                   //largest element
console.log(nums[nums.length-1]);       //Smallest element


console.log("using Math Max and Min");
minMaxValue(nums);
function minMaxValue(arr){
    console.log(Math.max.apply(null, arr));
    console.log(Math.min.apply(null, arr));
}

console.log("Using Methods");
console.log(myArrayMin(nums));
console.log(myArrayMax(nums));

function myArrayMin(arr){
    let len = arr.length;
    let min = Infinity;
    while (len--){
        if (arr[len]<min){
            min = arr[len];
        }
    }
    return min;
}

function myArrayMax(arr){
    let len = arr.length;
    let max = -Infinity;
    while (len--){
        if (arr[len]>max){
            max = arr[len];
        }
    }
    return max;
}



const myArrayObject = [
    {year:2006, model:"Victus"},
    {year:2014, model:"Inspiron"},
    {year:2024, model:"Thinkpad"},
    {year:2020, model:"Ipad"},
    {year:2019, model:"Notepad"}
]
console.log(myArrayObject);

// console.log(myArrayObject.sort());
console.log(myArrayObject.sort(function(a,b){return a.year - b.year}));

console.log(myArrayObject.sort(function(a,b){
    let x = a.model.toLowerCase();
    let y = b.model.toLowerCase();
    if(x<y){ return -1};
    if(x>y){ return 1};
    return 0;
}));