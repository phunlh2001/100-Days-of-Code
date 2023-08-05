const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    const card = readline();
    console.log(isValidNumber(card) ? "YES" : "NO")
}

function isValidNumber(card) {
    card = card.replace(/\D/g, '')
    
    const digits = card.split('').map(Number).reverse()

    let sum = digits.map((val, index) => {
        if (index % 2 !== 0) {
            val *= 2
            if (val > 9) {
                val -= 9
            }
        }
        return val
    }).reduce((total, curr) => total + curr, 0)
    
    return sum % 10 === 0
}
