const c = readline()
let m = parseInt(readline())

let index = c.indexOf('+')
if (index === -1) {
  index = c.lastIndexOf('-')
}

const cReal = parseFloat(c.substring(0, index))
const cImag = parseFloat(c.substring(index, c.length - 1))

let zReal = 0
let zImag = 0

for (let i = 0; i < m; i++) {
  const tmp = zReal
  zReal = zReal * zReal - zImag * zImag + cReal
  zImag = 2 * tmp * zImag + cImag

  if (zReal * zReal + zImag * zImag >= 4.0) {
    m = i + 1
    break
  }
}

console.log(m)
