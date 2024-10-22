export const pick = () => {
    let hue = null
    let luminosity = null

    const ok = document.querySelector('body');
    const updateBackground = (event) => {

        hue = Math.round((event.clientX / window.innerWidth) * 360);
        luminosity = Math.round((event.clientY / window.innerHeight) * 100);
        ok.style.background = `hsl(${hue}, 50%, ${luminosity}%)`;

        const existingHsl = document.querySelector('.hsl');
        if (existingHsl) {
            existingHsl.remove();
        }

        const existingHue = document.querySelector('.hue');
        if (existingHue) {
            existingHue.remove();
        }

        const existingLuminosity = document.querySelector('.luminosity');
        if (existingLuminosity) {
            existingLuminosity.remove();
        }

        const hsl = document.createElement('div');
        hsl.className = 'hsl';
        hsl.textContent = `hsl(${hue}, 50%, ${luminosity}%)`;
        document.body.appendChild(hsl);

        const huee = document.createElement('div');
        huee.className = 'hue';
        huee.style.position = "absolute"
        huee.textContent = `${hue}`;
        document.body.appendChild(huee);

        const luminosityy = document.createElement('div');
        luminosityy.className = 'luminosity';
        luminosityy.style.position = "absolute"
        luminosityy.textContent = `${luminosity}`;
        document.body.appendChild(luminosityy);

        const axisX = document.getElementById('axisX');
        const axisY = document.getElementById('axisY');
        if (axisX && axisY) {
            axisX.setAttribute('x1', event.clientX);
            axisX.setAttribute('x2', event.clientX);
            axisY.setAttribute('y1', event.clientY);
            axisY.setAttribute('y2', event.clientY);
        }
    };
    document.addEventListener('mousemove', updateBackground);

    document.addEventListener('click', () => {
        const hslValue = `hsl(${hue}, 50%, ${luminosity}%)`;
        navigator.clipboard.writeText(hslValue).then(() => {
            console.log('HSL value copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy HSL value: ', err);
        });
    });

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    const axisX = document.createElementNS("http://www.w3.org/2000/svg", "line");
    axisX.setAttribute('id', 'axisX');
    axisX.setAttribute('y1', '0');
    axisX.setAttribute('y2', '100%');

    const axisY = document.createElementNS("http://www.w3.org/2000/svg", "line");
    axisY.setAttribute('id', 'axisY');
    axisY.setAttribute('x1', '0');
    axisY.setAttribute('x2', '100%');

    svg.appendChild(axisX);
    svg.appendChild(axisY);
    document.body.appendChild(svg);
}