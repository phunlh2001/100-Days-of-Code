var inputs = readline().split(' ')
const n = parseInt(inputs[0])
const m = parseInt(inputs[1])
const c = parseInt(inputs[2])

const devices = []
const devicesOn = []

var inputs = readline().split(' ')
for (let i = 0; i < n; i++) {
    devices.push(parseInt(inputs[i]))
    devicesOn.push(false)
}
let blown = false
let min = c
let tmp = c

var inputs = readline().split(' ')
for (let i = 0; i < m; i++) {
    const mx = parseInt(inputs[i]) - 1

    if (devicesOn[mx]) tmp += devices[mx]
    else tmp -= devices[mx]

    if (tmp < 0) {
        blown = true
        break
    }

    if (tmp < min) min = tmp
    devicesOn[mx] = !devicesOn[mx]
}

if (blown) {
    console.log("Fuse was blown.")
} else {
    console.log("Fuse was not blown.")
    console.log("Maximal consumed current was " + (c - min) + " A.")
}