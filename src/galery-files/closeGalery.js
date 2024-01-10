const galery = document.getElementById('galeria');

const closeGaleryPhotos = () => {
    galery.classList.remove('galeria--active');
    document.body.style.overflow = '';
}

export default closeGaleryPhotos;