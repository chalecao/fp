const triple = (arr)=>{
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i]*3
    }
    return arr;
}
// ctrl + shift + b
console.log(triple([1,2,3]))

const triple2 = (arr)=>{
    return arr.map(item=>item*3)
}
console.log(triple2([1,2,3]))