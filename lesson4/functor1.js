const container = (val) => {
    const isNumber = (val) => typeof val == "number"
    return {
        map: (f) => {
            if (val == "exception") return container("exception")
            try {
                if (!isNumber(val)) val = +val
                return container(f(val))
            } catch (e) {
                console.error(e)
                return container("exception")
            }
        },
        join: () => val
    }
}

container(2).map(a => { throw "test exception" }).map(a => a * 2)
// container(2).map(a => a + 1).map(a => a * 2).map(a => console.log(a))