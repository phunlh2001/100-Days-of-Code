let r1 = parseInt(readline())
let r2 = parseInt(readline())

function getNextRiver(number) {
    let next = number

    while(number > 0) {
        next += number % 10
        number -= number % 10
        number /= 10
    }

    return next
}

while(r1 !== r2) {
    if (r1 < r2) r1 = getNextRiver(r1)
    else r2 = getNextRiver(r2)
}

console.log(r1)