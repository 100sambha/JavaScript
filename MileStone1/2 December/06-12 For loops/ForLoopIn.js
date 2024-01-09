const nums = [3,5,4,6,87,9];
console.log(nums);

for(let num in nums){
    console.log(nums[num]);
}

const ProductDetails = {
    Name : "Computer",
    ram:"2GB",
    rom:"256GB",
    price:12345.50,
    serial_No:23423
}
for(let num in ProductDetails){
    console.log(num,"-", ProductDetails[num]);
}


const empData = ["Sambhaji",9000,"lapy"];
empData.forEach(myFun);
function myFun(value,index,array){
    console.log(value);
}