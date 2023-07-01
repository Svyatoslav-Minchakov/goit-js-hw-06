
const itemsList = document.querySelectorAll('.item');
console.log(itemsList)
console.log(`Number of categories - ${itemsList.length}`);

itemsList.forEach(item => {
  const itemTittle = item.firstElementChild.textContent;
  const itemQuantity = item.lastElementChild.children.length;

  console.log(`Category: ${itemTittle}`);
  console.log(`Elements: ${itemQuantity}`);
})

