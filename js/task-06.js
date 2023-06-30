const symbols = document.querySelector('#validation-input');


symbols.addEventListener('blur', checkSymbols);
const validQuantity = symbols.dataset.length;

function checkSymbols() {
  if(symbols.value.length >= validQuantity) {
    symbols.classList.add('invalid')
  } else {symbols.classList.add('valid');}
}
















