import closeGaleryPhotos from './closeGalery';
const galery = document.getElementById('galeria');

galery.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (button?.dataset?.accion === 'cerrar-galeria') {
        closeGaleryPhotos();
    }

});
