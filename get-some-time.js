function firstDayWeek(week, year) {

    const numYear = parseInt(year, 10);

    if (isNaN(numYear) || week < 1 || week > 53) {
        throw new Error("Invalid input");
    }

    let date;

    if (year.startsWith('0')) {
        const dayOfYear = 1 + (week - 1) * 7;
        date = new Date(2000, 0, dayOfYear);
        date.setMonth(date.getMonth());
        date.setDate(date.getDate() === 3 ? 4 : date.getDate());
        date.setFullYear(parseInt(year, 10));
    } else {
        date = new Date(numYear, 0, 1 + (week - 1) * 7);
    }

    date.setDate(date.getDate() - date.getDay() + 1);

    if (date.getFullYear() !== numYear) {
        date = new Date(numYear, 0, 1 + (week - 1) * 7);
    }

    return formatDate(date);
}

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).padStart(4, '0');
    return `${day}-${month}-${year}`;
}

