const mix =
    (a) =>
        (b) =>
            (c) => a + b * c

const mix1 = (b) =>
        (c) => 1 + b * c

console.log(mix(1)(2)(3))
console.log(mix1(2)(3))