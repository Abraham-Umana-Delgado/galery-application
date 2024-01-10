import dataPictures from "./dataPictures";
const { pictures } = dataPictures;

export default {
    categories: [
        { id: 'america', name: 'America', photoNumber: pictures['america'], src: './img/america.jpg' },
        { id: 'europa', name: 'Europa', photoNumber: pictures['europa'], src: './img/europa.jpg' },
        { id: 'africa', name: 'Africa', photoNumber: pictures['africa'], src: './img/africa.jpg' },
        { id: 'asia', name: 'Asia', photoNumber: pictures['asia'], src: './img/asia.jpg' },
        { id: 'oceania', name: 'Oceania', photoNumber: pictures['oceania'], src: './img/oceania.jpg' },
        { id: 'antartida', name: 'Antartida', photoNumber: pictures['antartida'], src: './img/antartida.jpg' },
    ]
}