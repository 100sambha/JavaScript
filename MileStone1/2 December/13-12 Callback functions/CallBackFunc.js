// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

function displayResult(result){
    console.log(result);
}

function doAddition(a, b, callbackFunc){
    let re = a + b;
    callbackFunc(re);
}
doAddition(3,6,displayResult);


// (x) => x >= 0 is a callback function.
const numsArray = [3,-4,-9,3,1,5,7,-7];
const posNums = removeNegNums(numsArray,(num)=>num>0);
console.log(posNums);
function removeNegNums(nums,func){
    const result = [];
    for (let i in nums)
    {
        if(func(nums[i])){
            result.push(nums[i]);
        }
    }

    return result;
}

