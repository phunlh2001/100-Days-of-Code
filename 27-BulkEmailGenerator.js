/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
let lines = []

for (let i = 0; i < N; i++) {
    lines.push(readline())
}

let templates = lines.join('\n')
let counter = -1

let email = templates.replace(/\([^)]*\)/g, (match) => {
    counter++

    let choices = match.substring(1, match.length - 1).split('|')
    return choices[counter % choices.length]
})

console.log(email)
