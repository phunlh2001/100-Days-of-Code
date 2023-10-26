// meidum - https://www.codingame.com/training/medium/micro-assembly

const [a, b, c, d] = readline().split(' ').map(Number)
const register = new Map()
register.set('a', a)
register.set('b', b)
register.set('c', c)
register.set('d', d)

const n = parseInt(readline())
const instructions = []

for (let i = 0; i < n; i++) {
  instructions.push(readline().split(' '))
}

for (let i = 0; i < instructions.length; i++) {
  const s = instructions[i]

  const i2 = register.has(s[2]) ? register.get(s[2]) : parseInt(s[2])
  const i3 =
    s.length === 4
      ? register.has(s[3])
        ? register.get(s[3])
        : parseInt(s[3])
      : 0

  switch (s[0]) {
    case 'MOV':
      register.set(s[1], i2)
      break
    case 'ADD':
      register.set(s[1], i2 + i3)
      break
    case 'SUB':
      register.set(s[1], i2 - i3)
      break
    case 'JNE':
      if (i2 !== i3) {
        i = parseInt(s[1]) - 1
      }
      break
  }
}

console.log(Array.from(register.values()).join(' '))
