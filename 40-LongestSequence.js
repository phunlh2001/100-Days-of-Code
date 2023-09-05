const b = readline()
let max = 0, cur = 0, flip = 0

for (let i = 0; i < b.length; i++) {
    if (b[i] === '1') {
        cur += 1
    } else {
        flip = b[i + 1] !== '1' ? 0 : cur
        cur = 0
    }

    max = Math.max(max, flip + cur)
}

console.log(max + 1)