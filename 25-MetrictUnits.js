/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const expression = readline().match(/(\d+\.?\d*)(\w+) \+ (\d+\.?\d*)(\w+)/);
const units = ["km", null, null, "m", "dm", "cm", "mm", null, null, "um"]

let u1 = units.indexOf(expression[2])
let u2 = units.indexOf(expression[4])

let val1 = parseFloat(expression[1])
let val2 = parseFloat(expression[3])

let sum = 0
let unit = null
if (u1 < u2) {
    sum = val1 * Math.pow(10, u2 - u1) + val2
    unit = expression[4]
} else {
    sum = val2 * Math.pow(10, u1 - u2) + val1
    unit = expression[2]
}

console.log('%d%s', sum.toFixed(4), unit)