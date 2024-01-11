import dataPictures from "../data/dataPictures";
import { uploadActiveImage } from "./uploadActiveImage";
const { pictures } = dataPictures;
const categoryContainer = document.getElementById('categorias');
const galery = document.getElementById('galeria');

categoryContainer.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.closest('a')) {
        galery.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';

        const activeCategory = event.target.closest('a').dataset.category;
        galery.dataset.category = activeCategory;

        const photos = pictures[activeCategory];
        const { id, name, description, source } = photos[0];
        uploadActiveImage(id, name, description, source);

        const PhotoCarousel = galery.querySelector('.galeria__carousel-slides');
        PhotoCarousel.innerHTML = '';

        photos.forEach((picture) => {
            const slide = `<a href="#" class="galeria__carousel-slide">
            <img class="galeria__carousel-image" src="${picture.source}" data-id="${picture.id}" alt="" />
        </a>`

            galery.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });

        galery.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
    }
})
