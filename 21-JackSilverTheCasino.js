/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const ROUNDS = parseInt(readline());
let cash = parseInt(readline());

for (let i = 0; i < ROUNDS; i++) {
    const arr = readline().split(' ')
    const roulette = parseInt(arr[0])
    const turn = arr[1]
    
    let bet = Math.ceil(cash / 4)
    cash -= bet

    if ((turn === 'EVEN' && (roulette && roulette % 2 === 0)) || (turn === 'ODD' && roulette % 2 === 1)) {
        cash += 2 * bet
    } else if (turn === 'PLAIN' && roulette === parseInt(arr[2])) {
        cash += 36 * bet
    }
}

console.log(cash)
