import _ from "lodash"

const add = _.curry((a, b, c) => (a + b + c))

console.log(add(1)(2)(3))

console.log(add(1, 2)(3))
console.log(add(1)(2, 3))