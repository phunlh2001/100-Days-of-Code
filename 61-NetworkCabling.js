// Medium puzzle

const N = parseInt(readline())
const ys = []

let minX = Number.MAX_VALUE
let maxX = Number.MIN_VALUE

for (let i = 0; i < N; i++) {
    var [x, y] = readline().split(' ').map(Number)
    ys.push(y)

    minX = Math.min(minX, x)
    maxX = Math.max(maxX, x)
}

ys.sort((a,b) => a-b)

const medianY = ys[Math.floor(ys.length / 2)]
let total = Math.abs(maxX - minX)

ys.forEach(i => {
    total += Math.abs(i - medianY)
})

console.log(total)