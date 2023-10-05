// medium - https://www.codingame.com/ide/puzzle/the-optimal-urinal-problem

const n = parseInt(readline())
const totals = []

let max = 1, spot = 1

for (let i = 0; i <= Math.floor(n / 2); i++) {
    const sum =
        (i > 1 ? 3 : 2) +
        (totals[i] ? totals[i] : calcSpot(0, i)) +
        (totals[n - 1 - i] ? totals[n - 1 - i] : calcSpot(i, n - 1))

    if (max < sum) {
        max = sum
        spot = i
    }
}

console.log(`${max} ${spot + 1}`)

function calcSpot(start, end) {
    const distance = end - start

    if (distance <= 3) return 0
    if (totals[distance]) return totals[distance]
    
    const mid = Math.floor((start + end) / 2)
    totals[distance] = 1 + calcSpot(start, mid) + calcSpot(mid, end)
    
    return totals[distance]
}
