/**
 * 是非函子
 */
class ether {
    constructor(val) {
        this._val = val
    }
    static of(val) {
        return new this(val);
    }
    join() { // used to get the value out of the Monad
        return this._val;
    }
    chain(f) {//Helper func that maps and then gets the value out
        return this.map(f).join();
    }
    ap(someOtherMonad) {//Used to deal w/ multiple Monads
        return someOtherMonad.map(this._val);
    }
}

class left extends ether {
    map(f) { //do nothing
        this._val && console.log('Error: ' + this._val.message);
        return left.of(null);
    }
}

class right extends ether {
    map(f) { // call f
        return right.of(f(this._val));
    }
}

function filterUser(val) {
    if (val < 0) return left.of(new Error("value should below 0"))
    try {
        return right.of(val);
    } catch (e) {
        return left.of(new Error("error occur"))
    }
}

filterUser(22).map(a => a * 2).map(a => -1).map(a => a * 2)