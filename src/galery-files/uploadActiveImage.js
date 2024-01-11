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

const loadImageDirection = (direction) =>{

}

export { uploadActiveImage, loadImageDirection };

