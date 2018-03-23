
const state = {
    Animal: 0,
    DOG: 1,
    speak: [' makes a noise.', ' barks.']
}
const actions = {
    of: (name) => (speak) => {
        speak(name)
    },
    speak: (kind) => (name) => {
        console.log(name + state.speak[kind]);
    }
}

actions.of('compose')(actions.speak(state.DOG))


let aa = actions.of('AAA')
let bb = actions.of('BBB')

aa(actions.speak(state.DOG))

bb(actions.speak(state.Animal))

aa(actions.speak(state.Animal))