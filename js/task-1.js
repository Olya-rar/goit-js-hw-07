const listNumber = document.querySelectorAll('.item');
// console.log(listNumber);
const arrayListNumber = [...listNumber];
console.log(`Numbers of categories: ${arrayListNumber.length}`);

arrayListNumber.forEach(element => {
  const categoryName = element.querySelector('h2').textContent; // Назва категорії (припустимо, що h2 містить її)
  const elementsCount = element.querySelectorAll('li').length; // Кількість елементів у категорії
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});