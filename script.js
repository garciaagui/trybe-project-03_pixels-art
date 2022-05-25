const colorPallete = document.getElementById('color-palette');

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

createColorPallete();
setColors();