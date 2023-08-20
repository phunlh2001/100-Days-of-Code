/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const number = readline();
const D = parseInt(readline());

let result = 0

function largestNumber(number, depth) {
    const num = parseInt(number)
    
    if (num % D === 0 && num > result) {
        result = num
    }
    
    if (depth === 2) {
        return
    }

    for (let i = 0; i < number.length; i++) {
        largestNumber(number.slice(0, i) + number.slice(i + 1), depth + 1)
    }
}

largestNumber(number, 0)
console.log(result)