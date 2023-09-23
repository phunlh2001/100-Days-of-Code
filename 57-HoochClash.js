var [A, B] = readline().split(' ').map(Number)
var [C, D] = readline().split(' ').map(Number)

let toFind = Math.pow(C * 0.5, 3) + Math.pow(D * 0.5, 3)

let low = A, high = B
let i = D, j = C

let found = false

while (high >= low) {
    let cal = Math.pow(high * 0.5, 3) + Math.pow(low * 0.5, 3)

    if (cal === toFind) {
        i = high
        j = low
        if (i !== D || j !== C) {
            found = true
            break
        }
        high--
    } else if (cal > toFind) {
        high--
    } else {
        low++
    }
}

console.log(found ? (j + ' ' + i) : "VALID")