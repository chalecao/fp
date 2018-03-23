class container {
    constructor(val) {
        this.val = val
    }
    static init(val) {
        return new container(val)
    }
    map(f) {
        if (this.val == "exception") return new container("exception")
        try {
            return new container(()=>f(this.val()))
        } catch (e) {
            return new container("exception")
        }
    }
    join(){
        this.val()
    }

}
let b = 1
let test = container.init(() => {return { href: "123" }})
    .map(a => a.href+b)
    .map(a => console.log(a))

b = 2
test.join()
    