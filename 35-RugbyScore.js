let score = parseInt(readline())

for (let i = 0; i <= score / 5; i++) {
    for (let j = 0; j <= i; j++) {
        let point = score - (i * 5) - (j * 2)

        if (point >= 0 && point % 3 === 0) {
            console.log('%d %d %d', i, j, point / 3)
        }
    }
}