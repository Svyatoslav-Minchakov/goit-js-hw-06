
const itemsList = document.querySelectorAll('.item');
console.log(`Number of categories - ${itemsList.length}`);

itemsList.forEach(item => {
  const itemTittle = item.querySelector('h2').textContent;
  const itemQuantity = item.querySelectorAll('li').length;

  console.log(`Category: ${itemTittle}`);
  console.log(`Elements: ${itemQuantity}`);
})

