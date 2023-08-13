/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const BEGIN = readline();
const END = readline();
console.error(BEGIN, END)

console.log(dateTimeFormater(BEGIN, END))

function dateTimeFormater(beginDate, endDate) {
    const [beginDay, beginMonth, beginYear] = beginDate.split(".").map(Number)
    const [endDay, endMonth, endYear] = endDate.split(".").map(Number)

    const daysInMonth = {}
    for (let i = 0; i < 12; i++) {
        const month = i + 1
        if (month === 2) {
            daysInMonth[month] = 28
        } else if (month === 4 || month === 6 || month === 9 || month === 11) {
            daysInMonth[month] = 30
        } else {
            daysInMonth[month] = 31
        }
    }

    let yearDiff = endYear - beginYear
    let monthDiff = endMonth - beginMonth
    let dayDiff = endDay - beginDay

    if (dayDiff < 0) {
        monthDiff--
        dayDiff += daysInMonth[beginMonth]
    }
    
    if (monthDiff < 0) {
        yearDiff--
        monthDiff += 12
    }
    
    let totalDays = getTotalDaysPerYear(beginYear, yearDiff) + dayDiff
    
    for (let i = beginMonth - 1; i < beginMonth + (monthDiff - 1); i++) {
        let currMonth = ((i + 12) % 12) + 1
        totalDays += daysInMonth[currMonth]
        console.error('1:', daysInMonth[currMonth])
        
        if (currMonth === 1 && isLeapYear(beginYear)) {
            totalDays += 1
        }
    }

    let result = []
    if (yearDiff > 0) {
        result.push(`${yearDiff} ${yearDiff === 1 ? 'year' : 'years'}`);
    }
    if (monthDiff > 0) {
        result.push(`${monthDiff} ${monthDiff === 1 ? 'month' : 'months'}`)
    }
    result.push(`total ${totalDays} ${totalDays === 1 ? 'day' : 'days'}`)

    return result.join(", ")
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
}

function getTotalDaysPerYear(startYear, yearDiff) {
    let totalDays = 0
    for (let year = startYear; year < startYear + yearDiff; year++) {
        totalDays += (isLeapYear(year) ? 366 : 365)
    }
    return totalDays
}