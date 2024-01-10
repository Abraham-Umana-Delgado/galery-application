import dataCategories from '../data/dataCategories';
const { categories } = dataCategories;

const categoryContainer = document.getElementById('categorias');

categories.forEach((category) => {
    const newCategory = document.createElement('a');
    const templateNewCategory = `<img class="categoria__img" src="${category.coverImage}" alt="" />
<div class="categoria__datos">
    <p class="categoria__nombre">${category.name}</p>
    <p class="categoria__numero-fotos">${category.photoNumber} Fotos </p>
</div>
`;

    newCategory.innerHTML = templateNewCategory;
    newCategory.classList.add('categoria');
    newCategory.href = '#';
    newCategory.dataset.category = category.id;

    categoryContainer.append(newCategory);
});