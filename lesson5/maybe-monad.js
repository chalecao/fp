
class maybe {
    constructor(val) {
        this._val = val
    }
    static of(val) {
        return new this(val);
    }
    map(f) {
        if(!this.isNull()){
            return maybe.of(f(this._val))
        }else{
            return maybe.of(null)
        }
    }
    isNull() { return this._val == null || this._val ==  undefined}
}

//maybe.of(2).map(a => return null).map(a => a * 2).map(a => console.log(a))
