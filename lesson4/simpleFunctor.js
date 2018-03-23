const container = {
    _val: "",
    init: (val) => {
        container._val = val;
        return container;
    },
    map: (f) => container.init(f(container._val))
}


let init = container.init(2)
console.log(init._val) //2

init.map(a => a * 2)
    .map(a => a * 3)
    .map(a => { console.log(a); return a }) //12
console.log(init._val) //12
