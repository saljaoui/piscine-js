import { colors } from './fifty-shades-of-cold.data.js'

export const generateClasses = () => {
    const style = document.createElement("style");
    for (let index = 0; index < colors.length; index++) {
        let color = colors[index];
        style.textContent += `.${color} {\nbackground: ${color};\n}\n`;
    }
    document.head.appendChild(style);
}

export const generateColdShades = () => {
    const coldColors = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];
    for (let index = 0; index < colors.length; index++) {
        let color = colors[index];
        if (coldColors.some(coldColor => color.includes(coldColor))) {
            const square = document.createElement("div");
            square.className = `${color}`;
            square.textContent = `${color}`;
            document.body.appendChild(square);
        }
    }
}

export const choseShade = (color) => {
    const allDivs = document.querySelectorAll('div');
    for (let index = 0; index < allDivs.length; index++) {
        allDivs[index].className = `${color}`;
    }
}