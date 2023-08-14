const BEGIN = readline()
const END = readline()

console.log(dateTimeFormatter(BEGIN, END))

function dateTimeFormatter(beginDate, endDate) {
    const [beginDay, beginMonth, beginYear] = beginDate.split(".").map(Number)
    const [endDay, endMonth, endYear] = endDate.split(".").map(Number)

    const begin = new Date(beginYear, beginMonth - 1, beginDay).getTime()
    const end = new Date(endYear, endMonth - 1, endDay).getTime()

    const timeDiff = end - begin;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
    const months = new Date(timeDiff).getUTCMonth()
    const years = Math.floor(days / 365)

    let result = []
    if (years > 0) {
        result.push(`${years} ${years === 1 ? 'year' : 'years'}`);
    }
    if (months > 0) {
        result.push(`${months} ${months === 1 ? 'month' : 'months'}`)
    }
    result.push(`total ${days} ${days === 1 ? 'day' : 'days'}`)

    return result.join(", ")
}