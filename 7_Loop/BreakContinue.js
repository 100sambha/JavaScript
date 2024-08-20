console.log("*************Break**************")
const arr = [34,2,6,2,77,4,7,9,23,4]
for(let i = 0; i < arr.length; i++){
    if(arr[i]==7){
        console.log(arr[i]);
        console.log("found");
        break;
    }
    console.log(arr[i]);
}

console.log("*************Continue**************")

for(let i = 0; i < arr.length; i++){
    if(arr[i]==7){
        console.log("found");
        continue;
    }
    console.log(arr[i]);
}