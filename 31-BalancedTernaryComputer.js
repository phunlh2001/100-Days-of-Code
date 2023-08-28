const N = parseInt(readline())

if (N === 0) console.log(0)
else console.log(convertToTenary(N))

function convertToTenary(number) {
    if (number < 0) {
        const balanceTenary = convertToTenary(-number)
        let balanceTenaryFormat = ""
    
        for (let i = 0; i < balanceTenary.length; i++) {
            const c = balanceTenary.charAt(i)
            balanceTenaryFormat += (c === 'T') ? '1' : ((c === '1') ? 'T' : '0')
        }
    
        return balanceTenaryFormat
    }

    if (number === 0) return ""

    if (number % 3 === 2) return convertToTenary(Math.floor((number + 1) / 3)) + "T"
    else return convertToTenary(Math.floor(number / 3)) + (number % 3)
}