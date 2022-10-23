// Definição das Variáveis;
const paletteElements = document.getElementsByClassName('color');
const generatePaletteButton = document.getElementById('another-palette');
const pixelsBoard = document.getElementById('pixel-board');
const pixelsCreated = document.getElementsByClassName('pixel');
const clearButton = document.getElementById('clear-board');
const generateBoardInput = document.getElementById('board-size-input');
const generateBoardButton = document.getElementById('generate-board');

// Criação das Funções;
function generateRandomColors() {
  const hexComposition = 'aAbBcCdDeEfF0123456789';
  let randomColor = '#';
  for (let i = 1; i <= 6; i += 1) {
    randomColor += hexComposition[Math.floor(Math.random() * hexComposition.length)];
  }
  return randomColor;
}

function setColors() {
  for (let i = 0; i < paletteElements.length; i += 1) {
    if (i !== 0) {
      paletteElements[i].style.backgroundColor = generateRandomColors();
    } else {
      paletteElements[i].style.backgroundColor = 'black';
    }
  }
}

function selectBlackColorFirst() {
  paletteElements[0].classList.add('selected');
}

function changePainter(e) {
  const lastSelected = document.querySelector('.selected');
  lastSelected.classList.remove('selected');
  e.target.classList.add('selected');
}

function paintPixel(e) {
  const colorSelected = document.querySelector('.selected').style.backgroundColor;
  e.target.style.backgroundColor = colorSelected;
}

function whiteAllPixels() {
  for (let i = 0; i < pixelsCreated.length; i += 1) {
    pixelsCreated[i].style.backgroundColor = 'white';
  }
}

function generatePixels(number) {
  for (let i = 1; i <= number; i += 1) {
    const newPixelLine = document.createElement('section');
    for (let index = 1; index <= number; index += 1) {
      const newPixel = document.createElement('section');
      newPixel.setAttribute('class', 'pixel');
      newPixelLine.appendChild(newPixel);
    }
    pixelsBoard.appendChild(newPixelLine);
  }
  for (let i = 0; i < pixelsCreated.length; i += 1) {
    pixelsCreated[i].addEventListener('click', paintPixel);
  }
  whiteAllPixels();
}

function removePixelBoardChilds() {
  while (pixelsBoard.firstChild) {
    pixelsBoard.removeChild(pixelsBoard.firstChild);
  }
}

function checkInputLimitValues(value) {
  const inputValue = generateBoardInput.value;
  let newBoardSize = value;
  if (inputValue > 0 && inputValue < 5) {
    newBoardSize = 5;
    window.alert('O valor mínimo permitido é 5. Consideramos 5 :)');
  } else if (inputValue > 50) {
    newBoardSize = 50;
    window.alert('O valor máximo permitido é 50. Consideramos 50 :)');
  } else {
    newBoardSize = inputValue;
  }
  return newBoardSize;
}

function changeBoardSize() {
  const inputValue = checkInputLimitValues();
  removePixelBoardChilds();
  generatePixels(inputValue);
}

function checkInputValueValidity() {
  if (generateBoardInput.value === 0 || generateBoardInput.value === '') {
    window.alert('Board inválido!');
  } else {
    changeBoardSize();
  }
}

// Ativação das Funções;
window.addEventListener('load', () => {
  setColors();
  generatePixels(5);
  selectBlackColorFirst();
});
for (let i = 0; i < paletteElements.length; i += 1) {
  paletteElements[i].addEventListener('click', changePainter);
}
generatePaletteButton.addEventListener('click', setColors);
clearButton.addEventListener('click', whiteAllPixels);
generateBoardButton.addEventListener('click', checkInputValueValidity);
