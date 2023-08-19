/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const R = parseInt(readline());
const V = parseInt(readline());

let robbers = new Array(R).fill(0)

for (let i = 0; i < V; i++) {
    const [C, N] = readline().split(' ');
    
    robbers[0] += Math.pow(10, N) * Math.pow(5, C - N)
    robbers.sort((a, b) => a - b)
}

console.log(robbers[R - 1])
