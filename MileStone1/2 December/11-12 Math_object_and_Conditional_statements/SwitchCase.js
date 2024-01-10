// Switch cases use strict comparison (===).
// The values must be of the same type to match.
// A strict comparison can only be true if the operands are of the same type.


let num = 3;
switch(num){
    case 0:
    case "1":
        console.log("It's Zero");
        break;
    case 1:
    case 2:
    case 3:
        console.log("Work From Office");
        break;
    case 4:
    case 5:
        console.log("Work From Home");
        break;
    default:
        console.log("Its Holiday");

}