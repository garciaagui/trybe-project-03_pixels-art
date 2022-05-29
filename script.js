const colorPallete = document.getElementById('color-palette');
const pixelsBoard = document.getElementById('pixel-board');
const clearButton = document.getElementById('clear-board');
const generateBoardInput = document.getElementById('board-size');
const generateBoardButton = document.getElementById('generate-board');

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
  // for (let i = 0; i < pixelsBoard.length; i += 1) {
  //   pixelsBoard.remove(pixelsBoard.lastChild);
  // }
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
generateBoardButton.addEventListener('click', function () {
  if (generateBoardInput.value === 0 || generateBoardInput.value === '') {
    window.alert('Board inválido!');
  } else {
    changeBoardSize();
  }
});
