import { gossips } from './gossip-grid.data.js'

export const grid = () => {

    let form = document.createElement('form');
    form.className = "gossip"

    let textarea = document.createElement('textarea');
    textarea.setAttribute("placeholder", "Got a gossip share ?")

    let submitButton = document.createElement('button');
    submitButton.textContent = "Share gossip!";
    submitButton.type = "submit";

    form.appendChild(textarea);
    form.appendChild(submitButton);
    document.body.appendChild(form);

    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        const textareaValue = document.querySelector('textarea').value

        let div = document.createElement('div')
        div.className = "gossip"
        div.textContent = textareaValue
        form.insertAdjacentElement('afterend', div)
        document.querySelector('textarea').value = ''
    })

    for (let index = 0; index < gossips.length; index++) {
        let div = document.createElement('div')
        div.className = "gossip"
        div.textContent = gossips[index]
        document.body.appendChild(div)
    }
    let rangesDiv = document.createElement('div');
    rangesDiv.className = 'ranges';

    let widthRange = document.createElement('input');
    widthRange.type = 'range';
    widthRange.className = 'range';
    widthRange.id = 'width';
    widthRange.min = '200';
    widthRange.max = '800';

    let fontSizeRange = document.createElement('input');
    fontSizeRange.type = 'range';
    fontSizeRange.className = 'range';
    fontSizeRange.id = 'fontSize';
    fontSizeRange.min = '20';
    fontSizeRange.max = '40';


    let backgroundRange = document.createElement('input');
    backgroundRange.type = 'range';
    backgroundRange.className = 'range';
    backgroundRange.id = 'background';
    backgroundRange.min = '20';
    backgroundRange.max = '75';

    rangesDiv.appendChild(widthRange);
    rangesDiv.appendChild(fontSizeRange);
    rangesDiv.appendChild(backgroundRange);
    document.body.appendChild(rangesDiv);
    
    document.getElementById('fontSize').addEventListener('input', (event) => {
        let allGossipDivs = document.getElementsByClassName('gossip')
        let fontSizeValue = event.target.value + 'px'
        for (let index = 0; index < allGossipDivs.length; index++) {
          allGossipDivs[index].style.fontSize = fontSizeValue;
        }
        console.log(fontSizeValue);
       })
       document.getElementById('background').addEventListener('input', (event) => {
        let allGossipDivs = document.getElementsByClassName('gossip')
        let backgroundValue = event.target.value
        for (let index = 0; index < allGossipDivs.length; index++) {
          allGossipDivs[index].style.background = `hsl(280, 50%, ${backgroundValue}%)`;
        }
       })
       document.getElementById('width').addEventListener('input', (event) => {
        let allGossipDivs = document.getElementsByClassName('gossip')
        let widthValue = event.target.value
        for (let index = 0; index < allGossipDivs.length; index++) {
          allGossipDivs[index].style.width = widthValue + "px";
        }
      })
       
}
