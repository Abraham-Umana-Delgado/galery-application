import dataPictures from "../data/dataPictures";
const { pictures } = dataPictures;
const galery = document.getElementById('galeria');

const uploadActiveImage = (id, name, description, source) => {
    galery.querySelector('.galeria__imagen').src = source;
    galery.querySelector('.galeria__imagen').dataset.id = id;
    galery.querySelector('.galeria__titulo').innerHTML = name;
    galery.querySelector('.galeria__descripcion-imagen-activa').innerHTML = description;

    const activeCategory = galery.dataset.category;
    const photographys = pictures[activeCategory];
    let indexActiveImage;

    photographys.forEach((photo, index) => {
        if (photo.id === id) {
            indexActiveImage = index;
        }
    });

    if (galery.querySelectorAll('.galeria__carousel-slide').length > 0) {
        galery.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');
        galery.querySelectorAll('.galeria__carousel-slide')[indexActiveImage].classList.add('galeria__carousel-slide--active');
    }
};

const loadImageDirection = (direction) => {
    const activeCategory = galery.dataset.category;
    const photographys = pictures[activeCategory];
    const idActiveImage = parseInt(galery.querySelector('.galeria__imagen').dataset.id);
    let indexActiveImage;

    photographys.forEach((photo, index) => {
        if (photo.id === idActiveImage) {
            indexActiveImage = index;
        }
    });

    if (direction === 'next') {
        if (photographys[indexActiveImage + 1]) {
            const { id, name, description, source } = photographys[indexActiveImage + 1];
            uploadActiveImage(id, name, description, source);
        }
    } else if (direction === 'former') {
        if (photographys[indexActiveImage - 1]) {
            const { id, name, description, source } = photographys[indexActiveImage - 1];
            uploadActiveImage(id, name, description, source)
        }
    }
}

export { uploadActiveImage, loadImageDirection };

