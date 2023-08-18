/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');

if (n <= 0) {
    console.log(0)
    return
}

let closestToZero = Number.MAX_VALUE
let nearestT = closestToZero

for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    const absT = Math.abs(t)

    if (absT < nearestT || (absT === nearestT && t > closestToZero)) {
        closestToZero = t
        nearestT = absT
    }
}

console.log(closestToZero)
