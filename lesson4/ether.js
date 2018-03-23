const ether = {
    _val: null,
    init: (val) => {
        ether._val = val;
        return ether;
    },
    map: (f) => {
        if(ether._val == "exception" ) return ether;
        try {
            return ether.init(f(ether._val))
        } catch (e) {
            return ether.init("exception")
        }
    }
}
// ether.init(2).map(a => {throw "test exception"}).map(a => a * 2)