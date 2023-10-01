const K = parseInt(readline());
var inputs = readline().split(' ')
const arr = []

for (let i = 0; i < K; i++) {
    const A = parseFloat(inputs[i])

    let val = 1
    let fact = 0

    while (val * Math.log(A) > fact) {
        fact += Math.log(++val)
    }

    arr.push(val)
}

console.log(arr.join(' '))