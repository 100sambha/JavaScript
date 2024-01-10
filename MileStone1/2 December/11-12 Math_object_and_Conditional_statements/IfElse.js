// In JavaScript we have the following conditional statements:
    // Use if to specify a block of code to be executed, if a specified condition is true
    // Use else to specify a block of code to be executed, if the same condition is false
    // Use else if to specify a new condition to test, if the first condition is false
    // Use switch to specify many alternative blocks of code to be executed

let time = 10;
if(time<12 && time>4){
    console.log("Good Morning");
}
else if(time>12 && time<18){
    console.log("Good Afternoon");
}
else{
    console.log("Good Night");
}