const n = parseInt(readline());
/**
 * <=> xy = ny + nx
 * <=> xy - nx = ny
 * <=> x(y-n) = ny with (x > y)
 * <=> x = ny / y-n
 * 
 * Having n is input, y = n + 1, find x
 **/
for (let i=1; i<=n; i++) {
    let y = n + i
    let numerator = n*y
    let denominator = y-n
    let x = numerator / denominator
    // only receive 'x' value as an integer
    if (Number.isInteger(x)) {
        console.log(`1/${n} = 1/${x} + 1/${y}`)
    }
}