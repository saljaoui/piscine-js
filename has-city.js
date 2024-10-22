function hasCity(country, cities) {
    return function(city) {
        for (let index = 0; index < cities.length; index++) {
            if (city === cities[index]) {
                return city +" is a city from " + country
            }
        }
        return city +" is not a city from " + country
      };
}