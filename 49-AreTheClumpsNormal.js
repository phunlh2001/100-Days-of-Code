const numbers = readline().split('').map(Number)
let min = 1

for (let i = 1; i <= 9; i++) {
    let nbModular = 1
    let currModulo = numbers[0] % i

    for (let j = 1; j < numbers.length; j++) {
        let tmp = numbers[j] % i

        if (currModulo !== tmp) {
            nbModular++
            currModulo = tmp
        }
    }

    if (i > 1 && nbModular < min) return console.log(i)
    
    min = nbModular
}

console.log('Normal')
