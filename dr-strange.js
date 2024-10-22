function addWeek(date) {
    const dayesmap = new Map([
        [1, 'Monday'],
        [2, 'Tuesday'],
        [3, 'Wednesday'],
        [4, 'Thursday'],
        [5, 'Friday'],
        [6, 'Saturday'],
        [7, 'Sunday'],
        [8, 'secondMonday'],
        [9, 'secondTuesday'],
        [10, 'secondWednesday'],
        [11, 'secondThursday'],
        [12, 'secondFriday'],
        [13, 'secondSaturday'],
        [14, 'secondSunday']
    ]);

    let times = new Date('0001-01-01')
    let day = (date - times) / (1000 * 60 * 60 * 24) + 1
    let getday = ""
    if (day === 14) {
        getday = dayesmap.get(14)
    } else {
        getday = dayesmap.get(day % 14)
    }
    return getday
}

function timeTravel(date) {
    date.date.setHours(date.hour, date.minute, date.second);
    return date.date
}
