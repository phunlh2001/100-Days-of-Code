// medium - https://www.codingame.com/training/medium/number-of-letters-in-a-number---binary

var [start, n] = readline().split(' ').map(Number)

for (let i = 0; i < n; i++) {
  const s = start.toString(2)
  const end =
    Array.from(s).filter((c) => c === '1').length * 3 +
    Array.from(s).filter((c) => c === '0').length * 4

  if (start === end) break
  start = end
}

console.log(start)
