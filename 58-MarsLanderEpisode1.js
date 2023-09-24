const surfaceN = parseInt(readline())
for (let i = 0; i < surfaceN; i++) {
    var inputs = readline().split(' ')
}

while (true) {
    var inputs = readline().split(' ')
    const vSpeed = parseInt(inputs[3])

    if (vSpeed <= -40) {
        console.log("0 4");
    } else if (vSpeed <= -30) {
        console.log("0 3");
    } else {
        console.log("0 0");
    }
}