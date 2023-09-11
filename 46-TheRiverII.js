const r1 = parseInt(readline())
let isMeet = false

for (let i = r1 - 1; i > 0 && !isMeet; i--) {
    isMeet = getNextRiver(i) === r1
}

console.log(isMeet ? 'YES': 'NO')

function getNextRiver(number) {
    let next = number

    while(number > 0) {
        next += number % 10
        number -= number % 10
        number /= 10
    }

    return next
}