const N = parseInt(readline())
const xthenCommands = readline()

const pos = xthenCommands.split(";")
let index = parseInt(pos[0]) - 1

const queue = []

for (let i = 1; i < pos.length; i++) {
    let nb = parseInt(pos[i].substring(0, pos[i].length - 1))
    const c = pos[i].charAt(pos[i].length - 1)
    while (nb-- > 0) {
        queue.push(c === 'L' ? -1 : (c === 'R' ? 1 : 0))
    }
}

index += queue.shift()

for (let i = 0; i < N; i++) {
    const patterns = readline().split(";")
    let j = parseInt(patterns[0])
    while (j-- > 0) {
        console.log(patterns[1].substring(0, index) + '#' + patterns[1].substring(index + 1))
        index += queue.shift()
    }
}