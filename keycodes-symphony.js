export function compose() {
    const generateColor = (char) => {
        const color = (char.charCodeAt(0));
        return `rgb(${color}, ${color}, 230)`;
    };

    document.addEventListener('keydown', event => {

        if (event.key >= 'a' && event.key <= 'z') {
        const style = document.createElement('div');
        style.className = 'note';
        style.textContent = event.key
        style.style.background = generateColor(event.key);
        document.body.appendChild(style);

        } else if (event.key === 'Backspace') {

            let arr = document.querySelectorAll('div')
            arr[arr.length-1].remove()

        } else if (event.key === 'Escape') {

            let arr = document.querySelectorAll('div')
            for (let i = 0; i < arr.length; i++) {
                arr[i].remove()
            }
        }
    })
}