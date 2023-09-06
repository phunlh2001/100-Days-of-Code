const framePattern = readline() + ' '
var inputs = readline().split(' ')
const h = parseInt(inputs[0])
const w = parseInt(inputs[1])

const pic = []

for (let i = 0; i < h; i++) {
    const line = readline()
    pic.push(line)
}

for (let i = 0; i < framePattern.length; i++) {
    const pattern = framePattern[framePattern.length - 1 - i]
    const row = pattern.repeat(w + i * 2)
    pic.unshift(row)
    pic.push(row)

    for (let j = 0; j < pic.length; j++) {
        pic[j] = pattern + pic[j] + pattern
    }
}

pic.forEach(out => console.log(out))