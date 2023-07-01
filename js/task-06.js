const symbols = document.querySelector('#validation-input');

symbols.addEventListener('blur', checkSymbols);
const validQuantity = symbols.dataset.length;

function checkSymbols() {
  if(symbols.value.length === Number(validQuantity)) {
    symbols.classList.add('valid');
    symbols.classList.remove('invalid');
  } else {symbols.classList.add('invalid');}
}
















