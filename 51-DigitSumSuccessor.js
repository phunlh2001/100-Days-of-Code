// Medium puzzle

const N = parseInt(readline())

const digits = (number) => Array.from(number.toString(), Number)
const sumDigits = (number) => digits(number).reduce((sum, curr) => (sum + curr))

const lastDigitIndex = (number) =>
    digits(number).reduce(
        ({ sum, lastIndex }, curr, i) => ({
            sum: sum === 0 ? sum : sum - curr,
            lastIndex: sum === 0 ? lastIndex : i
        }),
        {
            sum: sumDigits(N),
            lastIndex: -1
        }
    ).lastIndex

function nextRounded(number) {
    const index = lastDigitIndex(number)
    const digitsArray = digits(number)
    const factor = digitsArray.length - 1 - index
    const toAdd = (10 - digitsArray[index]) * 10 ** factor
    return number + toAdd
}

function nextTarget(number) {
    const numArray = digits(number).reverse()
    let currentSum = sumDigits(number)
    const targetSum = sumDigits(N)
    let i = 0

    while (currentSum !== targetSum) {
        const nextToAdd = targetSum - currentSum
        numArray[i++] = nextToAdd >= 10 ? 9 : nextToAdd
        number = Number([...numArray].reverse().join(''))
        currentSum = sumDigits(number)
    }
    return number
}

console.log(nextTarget(nextRounded(N)))