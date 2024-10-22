function dayOfTheYear(date) {
    let count = 0;
    const year = date.getUTCFullYear();
    const currentDate = new Date(Date.UTC(year, date.getUTCMonth(), date.getUTCDate()));
    const firstDay = new Date(Date.UTC(year, 0, 1));
  
    while (currentDate > firstDay) {
      currentDate.setUTCDate(currentDate.getUTCDate() - 1);
      count++;
    }
    return count + 1;
  }