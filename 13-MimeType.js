const N = parseInt(readline()) // Number of elements which make up the association table.
const Q = parseInt(readline()) // Number Q of file names to be analyzed.

const mimeMap = {}
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ')
    const EXT = inputs[0].toLocaleLowerCase() // file extension
    const MT = inputs[1] // MIME type.

    mimeMap[EXT] = MT
}
for (let i = 0; i < Q; i++) {
    const FNAME = readline() // One file name per line.
    const idx = FNAME.lastIndexOf('.')

    if (idx !== -1) {
        const extension = FNAME.substring(idx + 1).toLowerCase()
        console.log(mimeMap[extension] ?? 'UNKNOWN')
    } else {
        console.log('UNKNOWN')
    }
}
