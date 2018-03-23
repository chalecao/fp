class Monad{
    constructor(val){
        this.val = val
    }
    static of(val){
        return new Monad(val)
    }
    map(f){
        return new Monad(f(val))
    }
    join(){
        return this.val
    }
    chain(f){
        return this.map(f).join()
    }
    ap(otherMonad){
        return otherMonad.of(this.val)
    }
}