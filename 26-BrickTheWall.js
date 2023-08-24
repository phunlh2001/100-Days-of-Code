/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const X = parseInt(readline());
const N = parseInt(readline());
var inputs = readline().split(' ').map(Number).sort((a, b) => b - a)

let weight = 0
const g = 10
for (let i = 0; i < N; i++) {
    const m = inputs[i]
    const L = Math.floor(i / X)
    
    weight += (L * 6.5 / 100) * g * m
}

console.log(weight.toFixed(3))
