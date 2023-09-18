const LON = parseFloat(readline().replaceAll(',', '.'))
const LAT = parseFloat(readline().replaceAll(',', '.'))
const N = parseInt(readline())

let min = Number.MAX_VALUE
let res = ''

for (let i = 0; i < N; i++) {
    const DEFIB = readline().split(';')
    const defLon = parseFloat(DEFIB[4].replaceAll(',', '.'))
    const defLat = parseFloat(DEFIB[5].replaceAll(',', '.'))

    let x = (defLon - LON) * Math.cos((LAT + defLat) / 2)
    let y = defLat - LAT
    let d = Math.sqrt(x * x + y * y) * 6371

    if (d <= min) {
        res = DEFIB[1]
        min = d
    }
}

console.log(res)