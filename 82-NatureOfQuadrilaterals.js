const n = parseInt(readline())
for (let i = 0; i < n; i++) {
  var inputs = readline().split(' ')
  const A = inputs[0]
  const xA = parseInt(inputs[1])
  const yA = parseInt(inputs[2])
  const B = inputs[3]
  const xB = parseInt(inputs[4])
  const yB = parseInt(inputs[5])
  const C = inputs[6]
  const xC = parseInt(inputs[7])
  const yC = parseInt(inputs[8])
  const D = inputs[9]
  const xD = parseInt(inputs[10])
  const yD = parseInt(inputs[11])

  const abY = Math.abs(yB - yA)
  const abX = Math.abs(xB - xA)
  const bcY = Math.abs(yC - yB)
  const bcX = Math.abs(xC - xB)
  const cdY = Math.abs(yD - yC)
  const cdX = Math.abs(xD - xC)
  const daY = Math.abs(yA - yD)
  const daX = Math.abs(xA - xD)

  let flags = new Set()

  if (abY / abX === cdY / cdX && bcY / bcX === daY / daX) {
    flags.add('PARALLELOGRAM')
  }

  if (
    Math.hypot(abY, abX) === Math.hypot(cdY, cdX) &&
    Math.hypot(abY, abX) === Math.hypot(bcY, bcX)
  ) {
    flags.add('RHOMBUS')
  }
  
  if (
    Math.abs(((Math.atan2(yD - yA, xD - xA) - Math.atan2(yB - yA, xB - xA)) * (180 / Math.PI)) % 90) === 0 && 
    Math.abs(((Math.atan2(yB - yC, xB - xC) - Math.atan2(yD - yC, xD - xC)) * (180 / Math.PI)) % 90) === 0
  ) {
    flags.add('RECTANGLE')
  }

  displayFlag(A + B + C + D, flags)
}

function displayFlag(value, flags) {
  let res
  if (flags.has('RECTANGLE') && flags.has('RHOMBUS')) {
    res = 'square'
  } else if (flags.has('RECTANGLE')) {
    res = 'rectangle'
  } else if (flags.has('RHOMBUS')) {
    res = 'rhombus'
  } else if (flags.has('PARALLELOGRAM')) {
    res = 'parallelogram'
  } else {
    res = 'quadrilateral'
  }
  console.log(value + ' is a ' + res + '.')
}
