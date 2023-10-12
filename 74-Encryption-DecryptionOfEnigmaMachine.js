const rotor1 = new Map()
const rotor2 = new Map()
const rotor3 = new Map()
const decodeRotor1 = new Map()
const decodeRotor2 = new Map()
const decodeRotor3 = new Map()
const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const operation = readline()
const N = parseInt(readline())
for (let i = 0; i < 3; i++) {
  const rotor = readline()
  parseRotor(rotor, i + 1)
}
const message = readline()

let msg = operation === 'ENCODE' ? encode(message, N) : decode(message, N)

console.log(msg)

function parseRotor(rotor, index) {
  let splitted = rotor.split('')
  for (let i = 0; i < splitted.length; i++) {
    if (index === 1) {
      rotor1.set(keys[i], splitted[i])
      decodeRotor1.set(splitted[i], keys[i])
    } else if (index === 2) {
      rotor2.set(keys[i], splitted[i])
      decodeRotor2.set(splitted[i], keys[i])
    } else if (index === 3) {
      rotor3.set(keys[i], splitted[i])
      decodeRotor3.set(splitted[i], keys[i])
    }
  }
}

function encode(word, N) {
  const str = word.split('')
  const res = []
  let i = 0
  for (const s of str) {
    let tmp = getLetter(s, N + i++, true)
    tmp = rotor1.get(tmp)
    tmp = rotor2.get(tmp)
    tmp = rotor3.get(tmp)
    res.push(tmp)
  }
  return res.join('')
}

function decode(word, N) {
  const str = word.split('')
  const res = []
  let i = 0
  for (const s of str) {
    let tmp = decodeRotor3.get(s)
    tmp = decodeRotor2.get(tmp)
    tmp = decodeRotor1.get(tmp)
    tmp = getLetter(tmp, N + i++, false)
    res.push(tmp)
  }
  return res.join('')
}

function getLetter(letter, N, encode) {
  let tmp = 0
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === letter) {
      tmp = i
      break
    }
  }
  tmp = encode ? tmp + N : tmp - N

  tmp = tmp % 26
  if (tmp < 0) tmp = 26 + tmp
  return keys[tmp]
}
