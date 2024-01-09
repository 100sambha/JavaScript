const bindCouter = (function(){
    let counter = 0;
    return function(){
        counter += 1;
        return counter;
    }
})();

console.log(bindCouter());
console.log(bindCouter());
console.log(bindCouter());