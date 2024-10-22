export const generateLetters = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < 120; i++) {
        const letter = document.createElement('div');
        letter.textContent = alphabet[Math.floor(Math.random() * alphabet.length)];
        const fontSize = Math.floor(11 + (i / 119) * 119);
        letter.style.fontSize = `${fontSize}px`;
        if (i < 40) {
            letter.style.fontWeight = '300';
        } else if (i < 80) {
            letter.style.fontWeight = '400';
        } else {
            letter.style.fontWeight = '600';
        }
        document.body.appendChild(letter);
    }
}