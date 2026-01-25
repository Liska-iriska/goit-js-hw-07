const categories = document.querySelector('#categories');
const categoryList = categories.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach((category) => {
    const categoryTitle = category.querySelector(`h2`).textContent;
    const elementsInCategory = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elementsInCategory}`);
})