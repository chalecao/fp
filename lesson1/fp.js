/**
 * 命令式编程：将数组元素变成3倍
 * @param {*} arr 
 */
const triple = (arr) => {
    let results = []
    for (let i = 0; i < arr.length; i++) {
        results.push(arr[i] * 3)
    }
    return results
}

/**
 * 声明式编程：将数组元素变成3倍
 * @param {*} arr 
 */
const triple2 = (arr) => arr.map((currentItem) => currentItem * 3)

console.log(triple([1,2,3]))
console.log(triple2([1,2,3]))

/**
 * 头等函数
 */
// const log = (content) => console.log(content)
// const err = (content) => console.error(content)

// const arrFunc = [
//     log, err
// ]
// const hashFunc = {
//     log, err
// }
// const exec = (func, content) => func && func(content)
// exec(log, "hello")

// const compute = () => (a, b) => a + b
// compute()(1, 3)

// const mix = (a) => (b) => (c) => a + b * c
// mix(1, 2, 3)

// /**
//  * 纯函数
//  */
// const log1 = (content) => console.log(content)
// let context = "browser:"
// const log2 = (content) => console.log(context, content)

// /**
//  * 引用透明
//  */
// const plus = (a, b) => a + b
// const plus2 = () => {
//     return plus(1, 2) + 3
// }
// const plus3 = () => {
//     return 3 + 3
// }
// plus2()