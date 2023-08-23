/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
const arr = []
let D = Number.MAX_VALUE

for (let i = 0; i < N; i++) {
    const pi = parseInt(readline());
    arr.push(pi)
}

arr.sort((a, b) => a - b)

for (let i = 0; i < N; i++) {
    const val = arr[i] - arr[i - 1]
    if (!isNaN(val)) {
        D = Math.min(D, val)
    }
}

console.log(D)
