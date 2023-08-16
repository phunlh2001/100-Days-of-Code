/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of mountains
var inputs = readline().split(' ').map(Number);

const highest = Math.max(...inputs)
let patterns = []

inputs.forEach(count => {
    for (let i = 0; i < count; i++) {
        patterns.push(" ".repeat(highest - i - 1) + "/" + " ".repeat(i));
    }
    for (let i = count - 1; i >= 0; i--) {
        patterns.push(" ".repeat(highest - i - 1) + "\\" + " ".repeat(i));
    }
})

for (let i = 0; i < highest; i++) {
    let row = ""
    for (const line of patterns) {
        row += line[i] || " "
    }
    console.log(row.trimEnd())
}