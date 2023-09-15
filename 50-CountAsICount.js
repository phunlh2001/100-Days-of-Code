const n = parseInt(readline())
let sum = 0

function calc(currSum, round, val) {
    if (round > 4) return

    if (currSum === 50) return sum += val

    for (let i = 1; i <= 12 && 50 - currSum >= i; i++) {
        calc(currSum + i, round + 1, val * (i === 1 ? 1 : 2))
    }
}

calc(n, 0, 1)
console.log(sum)