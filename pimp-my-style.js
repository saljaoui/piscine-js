import { styles } from './pimp-my-style.data.js'

let num = 0;
let removing = false;

export const pimp = () => {
  const button = document.querySelector(".button");
  if (!button) return;

  if (removing) {
    if (num > 0) {
      button.classList.remove(styles[num - 1]);
      num--;
    }
    if (num === 0) {
      removing = false;
      button.classList.remove('unpimp');
    }
  } else {
    if (num < styles.length) {
      button.classList.add(styles[num]);
      num++;
    }
    if (num === styles.length) {
      removing = true;
      button.classList.add('unpimp');
    }
  }
};
