function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const changeColorMean = document.querySelector('.color')
const bodyArea = document.querySelector('body');

changeColorBtn.addEventListener('click', addBgColor);

function addBgColor() {
  bodyArea.style.backgroundColor = getRandomHexColor();
  changeColorMean.textContent = getRandomHexColor();
}
