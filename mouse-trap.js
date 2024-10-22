let lastCircle = null;
let box = null;
let isTrapped = false;

export function createCircle(event) {
    if (event !== undefined) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.background = 'white';
        circle.style.left = `${event.clientX - 25}px`;
        circle.style.top = `${event.clientY - 25}px`;
        document.body.appendChild(circle);
        lastCircle = circle;
        isTrapped = false;
    }
}

export function moveCircle(event) {
    if (lastCircle) {
        const boxRect = box.getBoundingClientRect();
        let newX = event.clientX - 25;
        let newY = event.clientY - 25;

        if (isTrapped) {
            newX = Math.max(boxRect.left + 1, Math.min(newX, boxRect.right - 50 - 1));
            newY = Math.max(boxRect.top + 1, Math.min(newY, boxRect.bottom - 50 - 1));
            lastCircle.style.background = 'var(--purple)';
        } else {
            if (newX >= boxRect.left + 1 && newX <= boxRect.right - 50 - 1 && 
                newY >= boxRect.top + 1 && newY <= boxRect.bottom - 50 - 1) {
                lastCircle.style.background = 'var(--purple)';
                isTrapped = true;
            } else {
                lastCircle.style.background = 'white';
            }
        }
        lastCircle.style.left = `${newX}px`;
        lastCircle.style.top = `${newY}px`;
    }
}

export function setBox() {
    box = document.createElement('div');
    box.className = 'box';
    document.body.appendChild(box);
}

document.addEventListener('click', createCircle);
document.addEventListener('mousemove', moveCircle);
