import { places } from "./where-do-we-go.data.js";

export const explore = () => {
    const sortedPlaces = sort()
    const body = document.body

    sortedPlaces.forEach(place => {
        const placeSection = document.createElement('section')
        const city = place.name.split(',')[0].toLowerCase().replace(/\s+/g, '-')
        placeSection.style.background = `url('./where-do-we-go_images/${city}.jpg')`
        placeSection.style.backgroundSize = 'cover'
        placeSection.style.backgroundPosition = 'center'
        placeSection.style.backgroundRepeat = 'no-repeat'
        placeSection.style.width = '100%'
        placeSection.style.height = '100vh'
        body.appendChild(placeSection)
    })

    const locationIndicator = document.createElement('a')
    locationIndicator.className = 'location'
    locationIndicator.textContent = `${sortedPlaces[0].name}\n${sortedPlaces[0].coordinates}`
    locationIndicator.href = `https://www.google.com/maps/place/${sortedPlaces[0].coordinates}`
    locationIndicator.style.color = sortedPlaces[0].color
    locationIndicator.target = '_blank'
    body.appendChild(locationIndicator)

    const compass = document.createElement('div')
    compass.className = 'direction'
    body.appendChild(compass)

    let oldScroll = 0
    document.addEventListener("scroll", function() {
        const newScroll = window.scrollY;
        compass.innerHTML = newScroll > oldScroll ? "&#8595;<br>S" : "&#8593;<br>N"

        const index = Math.round(newScroll / window.innerHeight)
        locationIndicator.href = `https://www.google.com/maps/place/${sortedPlaces[index].coordinates}`
        locationIndicator.style.color = sortedPlaces[index].color
        locationIndicator.textContent = `${sortedPlaces[index].name}\n${sortedPlaces[index].coordinates}`

        oldScroll = newScroll;
    })
}

const sort = () => {
    const northPlaces = places.filter(place => place.coordinates.includes("N"))
    const southPlaces = places.filter(place => place.coordinates.includes("S"))
    northPlaces.sort((a, b) => {
        if (a.coordinates > b.coordinates) return -1
        if (b.coordinates > a.coordinates) return 1
        return 0
    })
    southPlaces.sort((b, a) => {
        if (a.coordinates > b.coordinates) return -1
        if (b.coordinates > a.coordinates) return 1
        return 0
    })
    return northPlaces.concat(southPlaces)
}