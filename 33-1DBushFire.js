const N = parseInt(readline())
for (let i = 0; i < N; i++) {
    const line = readline()
    let result = 0

    for (let j = 0; j < line.length; j++) {
        if (line[j] === 'f') {
            result++
            j += 2
        }
    }
    console.log(result)
}