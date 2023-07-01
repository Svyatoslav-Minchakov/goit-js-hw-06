window.addEventListener('load', changeValue)
const ranger = document.querySelector('#font-size-control');
const rangeText = document.querySelector('#text');


ranger.addEventListener('input', changeValue);

function changeValue() {
  const fonSize = ranger.value + 'px';
  rangeText.style.fontSize = fonSize;
}


