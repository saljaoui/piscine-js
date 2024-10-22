function sunnySunday(date) {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();
    let days = (year - 1) * 365 + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400);
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let i = 0; i < month; i++) {
        days += daysInMonth[i];
    }
    days += day - 1;

    if (month > 1 && ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))) {
        days++;
    }
    const weekdayIndex = days % 6;
    return weekdays[weekdayIndex];
}