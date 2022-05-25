const colorPallete = document.getElementById('color-palette');
const pixelsBoard = document.getElementById('pixel-board');
const clearButton = document.getElementById('clear-board');

function createColorPallete() {
  for (let i = 1; i <= 4; i += 1) {
    const newPalleteElement = document.createElement('section');
    newPalleteElement.setAttribute('class', 'color');
    colorPallete.appendChild(newPalleteElement);
  }
}

const createdPalleteElements = document.getElementsByClassName('color');

function setColors() {
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

function whiteAllPixels() {
  for (let i = 0; i < pixelsCreated.length; i += 1) {
    pixelsCreated[i].style.backgroundColor = 'white';
  }
}

function selectBlackColorFirst() {
  createdPalleteElements[0].classList.add('selected');
}

function changePainter(event) {
  const hadSelectedClass = document.querySelector('.selected');
  hadSelectedClass.classList.remove('selected');
  event.target.classList.add('selected');
}

function paintPixel(event) {
  const colorSelected = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = colorSelected;
}

// Ativação das Funções...
createColorPallete();
setColors();
generatePixels();
window.addEventListener('load', whiteAllPixels);
window.addEventListener('load', selectBlackColorFirst);
createdPalleteElements[0].addEventListener('click', changePainter);
createdPalleteElements[1].addEventListener('click', changePainter);
createdPalleteElements[2].addEventListener('click', changePainter);
createdPalleteElements[3].addEventListener('click', changePainter);
for (let i = 0; i < pixelsCreated.length; i += 1) {
  pixelsCreated[i].addEventListener('click', paintPixel);
}
clearButton.addEventListener('click', whiteAllPixels);
