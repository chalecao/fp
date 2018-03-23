const container = (val) => {return {
    map: (f) => container(f(val)),
    join:()=> val
}}
let init = container(2)
console.log(init.join()) //2

init.map(a => a * 2)
    .map(a => a * 3)
    .map(a => { console.log(a); }) //12

console.log(init.join()) //2

// Array.prototype.map