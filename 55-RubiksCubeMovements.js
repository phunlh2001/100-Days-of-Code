class Face {
  constructor(s1, s2) {
      this.s1 = s1
      this.s2 = s2
  }
}

const rotations = readline().split(" ")
const availableRotations = ["x", "x'", "y", "y'", "z", "z'"]
const map = new Map([
  ['F', 'UDLRFF'],
  ['B', 'DURLBB'],
  ['U', 'BFUURL'],
  ['D', 'FBDDLR'],
  ['L', 'LLBFUD'],
  ['R', 'RRFBDU'],
])

const faces = new Face(readline(), readline())

rotations.forEach(rot => {
  let idx = availableRotations.indexOf(rot)
  faces.s1 = map.get(faces.s1).substring(idx, idx + 1)
  faces.s2 = map.get(faces.s2).substring(idx, idx + 1)
})

console.log(faces.s1)
console.log(faces.s2)