/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline())
const fizz = []
const buzz = []
let value = null

for (let i = 1; i <= n; i++) {
    const line = readline();
    
    if (line.includes('Fizz')) {
        fizz.push(i)
    } 
    if (line.includes('Buzz')) {
        buzz.push(i)
    }
    if (value === null || isNaN(value)) {
        const current = parseInt(line)
        value = current - i
    }
}

const fizzRes = fizz.length === 1 ? fizz[0] + value : fizz[1] - fizz[0]
const buzzRes = buzz.length === 1 ? buzz[0] + value : buzz[1] - buzz[0]

console.log('%d %d', fizzRes, buzzRes)