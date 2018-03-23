class Monad {
    constructor(val) {
        this.val = val
    }
    static of(val) {
        return new Monad(val)
    }
    map(f) {
        if (!this.isNull()) {
            return new Monad(f(val))
        } else {
            return new Monad(val)
        }
    }
    isNull() {
        return this.val == undefined
    }
    join() {
        return this.val
    }
    chain(f) {
        return this.map(f).join()
    }
    ap(otherMonad) {
        return otherMonad.of(this.val)
    }
}