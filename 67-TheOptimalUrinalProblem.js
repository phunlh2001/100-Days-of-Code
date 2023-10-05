const n = parseInt(readline())
const totals = new Map()

if (n === 3 || n === 4) {
    return console.log("2 1")
}

let max = 1;
let spot = 1;

for (let i = 0; i <= n / 2; i++) {
    const sum =
        (i <= 1 ? 2 : 3) +
        (totals.has(i) ? totals.get(i) : calcSpot(0, i)) +
        (totals.has(n - i - 1) ? totals.get(n - i - 1) : calcSpot(i, n - 1))

    if (max < sum) {
        max = sum
        spot = i + 1
    }
}

console.log(`${max} ${spot}`)

function calcSpot(start, end) {
    const distance = end - start

    if (distance <= 3) {
        return 0
    }

    if (totals.has(distance)) {
        return totals.get(distance)
    }

    const mid = Math.floor((start + end) / 2)
    const nb = 1 + calcSpot(start, mid) + calcSpot(mid, end)
    
    totals.set(distance, nb)
    return nb
}