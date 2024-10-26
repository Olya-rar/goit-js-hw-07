const listNumber = document.querySelectorAll('.item');
const arrayListNumber = [...listNumber];
console.log(`Numbers of categories: ${arrayListNumber.length}`);

arrayListNumber.forEach(element => {
  const categoryName = element.querySelector('h2').textContent;
  const elementsCount = element.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});