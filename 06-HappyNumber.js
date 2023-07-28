/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    const x = readline()
    console.log(`${x} %s`, isHappy(x) ? ':)' : ':(')
}
 
function isHappy(str) {
    const num = parseInt(str)
    if (num === 2 || num === 4 || num === 6 || num === 9) {
        return false
    }
    const result = str.split("").map(x => x**2).reduce((prev, curr) => prev + curr)
    if (result === 1) {
        return true
    } else {
        return isHappy(String(result))
    }
} 
