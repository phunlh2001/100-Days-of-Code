const N = parseInt(readline())

let width = 1 + 2 * (N - 1)
let maxWidth = 1 + 2 * width

let space = " ", star = "*"

console.log("." + space.repeat(width - 1) + "*")

for (let i = 1; i < N; i++) {
    let nbStars = 1 + 2 * i
    let nbSpace = (maxWidth - nbStars) / 2
    console.log(space.repeat(nbSpace) + star.repeat(nbStars))
}

for (let i = 0; i < N; i++) {
    let nbStars = (1 + 2 * i)
    let nbSpace1 = (width - nbStars) / 2
    let nbSpace2 = 2 * nbSpace1 + 1
    console.log(space.repeat(nbSpace1) 
            + star.repeat(nbStars) 
            + space.repeat(nbSpace2) 
            + star.repeat(nbStars))
}