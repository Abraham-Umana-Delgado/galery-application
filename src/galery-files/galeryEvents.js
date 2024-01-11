import closeGaleryPhotos from './closeGalery';
import { loadImageDirection } from './uploadActiveImage';
import carouselImageDirection from './carouselImageDirection';
import slideClick from './slideClick';
const galery = document.getElementById('galeria');

galery.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (button?.dataset?.accion === 'cerrar-galeria') {
        closeGaleryPhotos();
    }

    if (event.target.dataset.id) {
        slideClick(event);
    }

    if (button?.dataset?.accion === 'siguiente-imagen') {
        loadImageDirection('next');
    } else if (button?.dataset?.accion === 'anterior-imagen') {
        loadImageDirection('former');
    }

    if (button?.dataset?.accion === 'siguiente-slide') {
        carouselImageDirection('next');
    } else if (button?.dataset?.accion === 'anterior-slide') {
        carouselImageDirection('former');
    }
});
