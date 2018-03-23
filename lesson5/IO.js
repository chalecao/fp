class IO {
    constructor(val) {
        this._val = val
    }
    static of(val) {
        return new IO(val);
    }
    map(f) {
        return IO.of(() => f(this._val()))
    }
    join() { // used to get the value out of the Monad
        return this._val;
    }
    chain(f) {//Helper func that maps and then gets the value out
        return this.map(f).join();
    }
}
const getQuery = url => url.split("?")[1] || ""

const split = (reg, str) => str.split(reg)

const findParam = key => IO.of(() => window.location.href)
    .map(getQuery)
    .map(split.bind(this, "&"))
    .map(a => a.map(split.bind(this, "=")))
    .chain(a => a.filter(b => b[0] == key))

findParam("aa")