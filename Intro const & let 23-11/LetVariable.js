// Let variable declared with >let have Block Scope
//                            >let must be Declared before use
//                            >let cannot be Redeclared in the same scope


// Ex


{
    let x = 2;
    console.log(x);
}

// console.log(x);             // We can't use let outside


// console.log(p);                // Variable must be defined before use

let p = 10;
console.log(p);

{
    let p = 20;
    console.log(p);
}

// let p = 30;                 // We can't redeclare variable with same name in same scope
// console.log(p);