class Monad {
    constructor(val) {
        this.val = val
    }
    static of(val) {
        return new this(val)
    }
    map(f) {
        return Monad.of(f(this.val))
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
class left extends Monad {
    map(f) {
        return left.of(this.val)
    }
}
class right extends Monad {
    map(f) {
        try {
            return right.of(f(this.val))
        } catch (e) {
            return left.of(this.val)
        }
    }
}


let aa = right.of(22).map(a => a * 2).map(a=>{
    throw "test"
})
.map(a => a * 2)
.join()
console.log(aa)