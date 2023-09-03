const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    const F = parseInt(readline())
    console.log(isVictory(F) ? "VICTORY" : "DEFEAT")
}

function isVictory (number) {
    number = reduce(number, 5)
    number = reduce(number, 3)
    number = reduce(number, 2)

    return number === 1
}

function reduce(number, red) {
    while(number % red === 0) {
        number /= red
    }

    return number
}