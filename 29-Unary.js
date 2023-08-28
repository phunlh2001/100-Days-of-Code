const MESSAGE = readline();

let bin = ""

for (let i = 0; i < MESSAGE.length; i++) {
    let charInBinary = MESSAGE.charCodeAt(i).toString(2)

    // Fill binary with zeroes to get 7 bits.
    charInBinary = "0000000".substring(charInBinary.length) + charInBinary

    bin += charInBinary
}

let lastChar = ' '
let codedMessage = ""
const encodedBits = [" 00 0", " 0 0"]

for (let i = 0; i < bin.length; i++) {
    if (bin.charAt(i) !== lastChar) {
        lastChar = bin.charAt(i)
        codedMessage += encodedBits[Number(lastChar)]
    } else {
        codedMessage += "0"
    }
}

console.log(codedMessage.substring(1))
