// Medium puzzle

const N = parseInt(readline())
const C = parseInt(readline())
const budgets = []
let total = 0
for (let i = 0; i < N; i++) {
    const B = parseInt(readline())
    total += B
    budgets.push(B)
}


if (total < C) {
    console.log("IMPOSSIBLE");
} else {
    budgets.sort((a, b) => a - b)

    let remain = C
    let res = []

    for (let i = 0; i < N - 1; i++) {
        const mean = Math.floor(remain / (N - i))
        const current = Math.min(budgets[i], mean)
        res.push(current)
        remain -= current
    }

    res.push(remain)
    
    console.log(res.join('\n'))
}
