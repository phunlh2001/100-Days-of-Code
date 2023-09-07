const L = parseInt(readline())
const H = parseInt(readline())
const text = readline().toUpperCase()

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?'

for (let i = 0; i < H; i++) {
    const ROW = readline()
    let result = ''

    for (const c of text) {
        let index = alphabet.indexOf(c)
        if (index === -1) {
            index = alphabet.indexOf('?')
        }
        result += ROW.slice(index * L, (index + 1) * L)
    }
    console.log(result)
}