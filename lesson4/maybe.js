const maybe = {
    _val: null,
    init: (val) => {
        maybe._val = val;
        return maybe;
    },
    map: (f) => {
        if(isNull){
            return maybe.init(f(maybe._val))
        }else{
            return maybe.init(null)
        }
    },
    isNull: () => (maybe._val === null || maybe._val === undefined)
}
// maybe.init(2).map(a => {throw "test exception"}).map(a => a * 2)
