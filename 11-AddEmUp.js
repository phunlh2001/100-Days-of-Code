/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
var inputs = readline().split(' ').map(Number)

console.log(lowestCost(inputs))

function lowestCost(arr) {
    arr.sort((a, b) => a - b)
    let total = 0

    while(arr.length > 1) {
        const val = arr.shift() + arr.shift()
        total += val
        arr.push(val)
        arr.sort((a, b) => a - b)
    }

    return total
}