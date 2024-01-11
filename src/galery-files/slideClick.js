import { uploadActiveImage } from "./uploadActiveImage";
import dataPictures from "../data/dataPictures";
const { pictures } = dataPictures;
const galery = document.getElementById('galeria');

const slideClick = (event) => {
    let name, description, src;
    const identifier = parseInt(event.target.dataset.id);
    const activeCategory = galery.dataset.category;
    const photos = pictures[activeCategory];

    photos.forEach((photo) => {
        if (photo.id === identifier) {
            name = photo.name;
            description = photo.description;
            src = photo.source;
        }
    });

    uploadActiveImage(identifier, name, description, src);
}

export default slideClick;