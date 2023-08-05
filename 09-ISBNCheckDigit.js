/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
let inputs = []
for (let i = 0; i < N; i++) {
    const ISBN = readline();

    inputs.push(ISBN)
}

//my result
const result = findErrorISBN(inputs)
console.log(`${result.length} invalid:`)
result.forEach(item => {
    console.log(item)
})

// functions helper
function findErrorISBN(arr) {
    const resultArr = []
    for (const item of arr) {
        const digits = item.replace(/[^0-9X]/gi, '').split('')
        if (digits.length === 13) {
            const lastDigit = digits.pop()
            if (!isValidISBN13(digits, lastDigit)) {
                resultArr.push(item)
            }
        } else if (digits.length === 10) {
            const lastDigit = digits.pop()
            if (!isValidISBN10(digits, lastDigit)) {
                resultArr.push(item)
            }
        } else {
            resultArr.push(item)
        }
    }
    return resultArr
}

function isValidISBN10(digits, lastDigit) {
    let numDiv = 10
    let sum = 0
    for (let i = 0; i < digits.length; i++) {
        sum += digits[i] * numDiv
        numDiv--;
    }
    let remainder = sum % 11;
    let result = (remainder === 0) ? 0 : 11 - remainder;
    return (result === 10 && lastDigit === 'X') || (result === parseInt(lastDigit))
}

function isValidISBN13(digits, lastDigit) {
    let sum = digits.map((value, idx) => {
        if (idx % 2 === 0) {
            return parseInt(value)
        } else {
            return parseInt(value) * 3
        }
    }).reduce((total, curr) => total + curr, 0)
    let remainder = sum % 10
    let result = (remainder === 0) ? 0 : 10 - remainder
    
    return result === parseInt(lastDigit)
}
