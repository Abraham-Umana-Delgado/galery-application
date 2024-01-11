import closeGaleryPhotos from './closeGalery';
import { loadImageDirection } from './uploadActiveImage';
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

    if(button?.dataset?.accion === 'siguiente')
});
