const colorPallete = document.getElementById('color-palette');
const pixelsBoard = document.getElementById('pixel-board');

function createColorPallete() {
  for (let i = 1; i <= 4; i += 1) {
    const newPalleteElement = document.createElement('section');
    newPalleteElement.setAttribute('class', 'color');
    colorPallete.appendChild(newPalleteElement);
  }
}

function setColors() {
  const createdPalleteElements = document.getElementsByClassName('color');
  createdPalleteElements[0].style.backgroundColor = 'black';
  createdPalleteElements[1].style.backgroundColor = '#2A9D8F';
  createdPalleteElements[2].style.backgroundColor = '#E9C46A';
  createdPalleteElements[3].style.backgroundColor = '#E76F51';
}

function generatePixels() {
  for (let i = 1; i <= 25; i += 1) {
    const newPixel = document.createElement('section');
    newPixel.setAttribute('class', 'pixel');
    pixelsBoard.appendChild(newPixel);
  }
}

const pixelsCreated = document.getElementsByClassName('pixel');

function whiteColorOnload() {
  for (let i = 0; i < pixelsCreated.length; i += 1) {
    pixelsCreated[i].style.backgroundColor = 'white';
  }
}

createColorPallete();
setColors();
generatePixels();
window.addEventListener('load', whiteColorOnload);
