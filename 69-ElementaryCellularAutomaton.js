// medium - https://www.codingame.com/training/medium/elementary-cellular-automaton

const R = parseInt(readline())
const N = parseInt(readline())
let pattern = readline()

const binPattern = ["111", "110", "101", "100", "011", "010", "001", "000"]
const bin = (1 << 8 | +R).toString(2).slice(1).split('')

console.log(pattern)

pattern = pattern.replace(/\./g, '0').replace(/@/g, '1')
let len = pattern.length

for (let i = 0; i < N - 1; i++) {
  let tmp = ''

  for (let j = 0; j < len; j++) {
    const c = pattern[(len + j - 1) % len]
    const c1 = pattern[(len + j) % len]
    const c2 = pattern[(len + j + 1) % len]

    const index = binPattern.indexOf('' + c + c1 + c2)
    tmp += bin[index]
  }

  pattern = tmp
  console.log(pattern.replace(/0/g, '.').replace(/1/g, '@'))
}