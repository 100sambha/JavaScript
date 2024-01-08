const users = {
    user1:"Sam",
    user2:"John",
    user3:"karan",
    user4:"yoab",
}
console.log(users);

function myFunction(){
    let n = 0;
    return {
        next: function() {
            n+=10;
            return {value:n, done:true};
        }
    }
}


const n = myFunction();
console.log(n);
console.log(n.next());
console.log(n.next());
console.log(n.next());


const myNumbers = {};

myNumbers[Symbol.iterator] = function() {
    let n = 0;
    done = false;
    return {
        next() {
            n+=10;
            if(n==100){
                done=true;
            }
            return {value:n,done:done};
        }
    };
}

let iterator = myNumbers[Symbol.iterator]();

while(true){
    const result = iterator.next();
    // console.log(result);
    if(result.done){
        break;
    }
    console.log(result.value);
}