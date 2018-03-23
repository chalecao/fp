const add = a => b => a + b
let arr = [1, 2, 3, 4]


console.log(arr.map(add(1)).map(add(2)))