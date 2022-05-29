const paletteElements = document.getElementsByClassName('color');
const pixelsBoard = document.getElementById('pixel-board');
const clearButton = document.getElementById('clear-board');
const generateBoardInput = document.getElementById('board-size');
const generateBoardButton = document.getElementById('generate-board');

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
}

function removePixelBoardChilds() {
  while (pixelsBoard.firstChild) {
    pixelsBoard.removeChild(pixelsBoard.firstChild);
  }
}

function regulateInputValue(n) {
  if (generateBoardInput.value > 0 && generateBoardInput.value < 5) {
    n = 5;
    window.alert('Valor inserido menor que o permitido. Consideramos 5.');
  } else if (generateBoardInput.value > 50) {
    n = 50;
    window.alert('Valor inserido maior que o permitido. Consideramos 50.');
  } else {
    n = generateBoardInput.value;
  }
  return n;
}

function changeBoardSize(n) {
  removePixelBoardChilds();
  n = regulateInputValue();
  for (let i = 1; i <= n; i += 1) {
    const newPixelLine = document.createElement('section');
    for (let index = 1; index <= n; index += 1) {
      const newPixel = document.createElement('section');
      newPixel.setAttribute('class', 'pixel');
      newPixel.style.backgroundColor = 'white';
      newPixelLine.appendChild(newPixel);
    }
    pixelsBoard.appendChild(newPixelLine);
  }
}

const pixelsCreated = document.getElementsByClassName('pixel');

function whiteAllPixels() {
  for (let i = 0; i < pixelsCreated.length; i += 1) {
    pixelsCreated[i].style.backgroundColor = 'white';
  }
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
  const colorSelected = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = colorSelected;
}

// Ativação das Funções...
setColors();
generatePixels();
window.addEventListener('load', whiteAllPixels);
window.addEventListener('load', selectBlackColorFirst);
paletteElements[0].addEventListener('click', changePainter);
paletteElements[1].addEventListener('click', changePainter);
paletteElements[2].addEventListener('click', changePainter);
paletteElements[3].addEventListener('click', changePainter);
for (let i = 0; i < pixelsCreated.length; i += 1) {
  pixelsCreated[i].addEventListener('click', paintPixel);
}
clearButton.addEventListener('click', whiteAllPixels);
generateBoardButton.addEventListener('click', function () {
  if (generateBoardInput.value === 0 || generateBoardInput.value === '') {
    window.alert('Board inválido!');
  } else {
    changeBoardSize();
  }
});
