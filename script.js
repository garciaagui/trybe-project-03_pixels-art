// Definição de Variáveis;
const paletteElements = document.getElementsByClassName('color');
const generatePaletteButton = document.getElementById('another-palette');
const pixelsBoard = document.getElementById('pixel-board');
const pixelsCreated = document.getElementsByClassName('pixel');
const clearButton = document.getElementById('clear-board');
const generateBoardInput = document.getElementById('board-size');
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
  paletteElements[0].style.backgroundColor = 'black';
  paletteElements[1].style.backgroundColor = generateRandomColors();
  paletteElements[2].style.backgroundColor = generateRandomColors();
  paletteElements[3].style.backgroundColor = generateRandomColors();
}

function selectBlackColorFirst() {
  paletteElements[0].classList.add('selected');
}

function changePainter(event) {
  const hadSelectedClass = document.querySelector('.selected');
  hadSelectedClass.classList.remove('selected');
  event.target.classList.add('selected');
}

function paintPixel(event) {
  const pixel = event;
  const colorSelected = document.querySelector('.selected').style.backgroundColor;
  pixel.target.style.backgroundColor = colorSelected;
}

function generatePixels() {
  for (let i = 1; i <= 5; i += 1) {
    const newPixelLine = document.createElement('section');
    for (let index = 1; index <= 5; index += 1) {
      const newPixel = document.createElement('section');
      newPixel.setAttribute('class', 'pixel');
      newPixelLine.appendChild(newPixel);
    }
    pixelsBoard.appendChild(newPixelLine);
  }
  for (let i = 0; i < pixelsCreated.length; i += 1) {
    pixelsCreated[i].addEventListener('click', paintPixel);
  }
}

function whiteAllPixels() {
  for (let i = 0; i < pixelsCreated.length; i += 1) {
    pixelsCreated[i].style.backgroundColor = 'white';
  }
}

function removePixelBoardChilds() {
  while (pixelsBoard.firstChild) {
    pixelsBoard.removeChild(pixelsBoard.firstChild);
  }
}

function checkInputLimitValues(value) {
  let inputValue = value;
  if (generateBoardInput.value > 0 && generateBoardInput.value < 5) {
    inputValue = 5;
    window.alert('Valor inserido menor que o permitido. Consideramos 5.');
  } else if (generateBoardInput.value > 50) {
    inputValue = 50;
    window.alert('Valor inserido maior que o permitido. Consideramos 50.');
  } else {
    inputValue = generateBoardInput.value;
  }
  return inputValue;
}

function changeBoardSize() {
  const inputValue = checkInputLimitValues();
  removePixelBoardChilds();
  for (let i = 1; i <= inputValue; i += 1) {
    const newPixelLine = document.createElement('section');
    for (let index = 1; index <= inputValue; index += 1) {
      const newPixel = document.createElement('section');
      newPixel.setAttribute('class', 'pixel');
      newPixel.style.backgroundColor = 'white';
      newPixelLine.appendChild(newPixel);
    }
    pixelsBoard.appendChild(newPixelLine);
  }
  for (let i = 0; i < pixelsCreated.length; i += 1) {
    pixelsCreated[i].addEventListener('click', paintPixel);
  }
}

function checkInputEmptyValue() {
  if (generateBoardInput.value === 0 || generateBoardInput.value === '') {
    window.alert('Board inválido!');
  } else {
    changeBoardSize();
  }
}

// Ativação das Funções;
setColors();
generatePixels();
window.addEventListener('load', whiteAllPixels);
window.addEventListener('load', selectBlackColorFirst);
generatePaletteButton.addEventListener('click', setColors);
for (let i = 0; i < paletteElements.length; i += 1) {
  paletteElements[i].addEventListener('click', changePainter);
}
clearButton.addEventListener('click', whiteAllPixels);
generateBoardButton.addEventListener('click', checkInputEmptyValue);
