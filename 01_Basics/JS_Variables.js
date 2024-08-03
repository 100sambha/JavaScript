console.log("let Variable examples");
let a = 300;
{
    let x = 2;
    let a = 100;
    // let x = 200;                        //Not allowed to re-declare in same scope
    console.log("Inside x :"+ x);
    console.log("1 Inside a :"+ a);
}
// console.log("Outside x :"+x);        //Outside scope Not accessible
console.log("2 Outside a :"+a);
console.log("\n");


let p = 100;
{
    p=200;
    console.log("2 Inside P :"+p);
}
console.log("3 Outside P :"+p);



console.log("var Variable examples");
var m = 200;
{
    console.log("Inside M - "+m);
    m = 222;
    
    var n = 100;
    console.log("Inside N - "+n);
    var n = "Hundred";                          //Var variable can re-clared in same scope
    console.log("Reclared Inside N - "+n);
}
console.log("Outside N : "+n);                  //Outside scope Accessible var datatype variables
console.log("Outside m : "+m);



console.log("const Variable examples");
const m = 200;
{
    console.log("Inside M - "+m);    
    const n = 100;
    console.log("Inside N - "+n);
    // const n = "Hundred";                     //const can not allowed re-initialized
    // console.log("Reclared Inside N - "+n);
}
// console.log("Outside N : "+n);                  //Outside of scope not Accessible const datatype variables
console.log("Outside m : "+m);

// const array and object values we can change but we can't re-initialize