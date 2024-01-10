import dataPictures from "./dataPictures";
const { pictures } = dataPictures;

export default {
    categories: [
        { id: 'america', name: 'America', photoNumber: pictures['america'].length, coverImage: './img/america.jpg' },
        { id: 'europa', name: 'Europa', photoNumber: pictures['europa'].length, coverImage: './img/europa.jpg' },
        { id: 'africa', name: 'Africa', photoNumber: pictures['africa'].length, coverImage: './img/africa.jpg' },
        { id: 'asia', name: 'Asia', photoNumber: pictures['asia'].length, coverImage: './img/asia.jpg' },
        { id: 'oceania', name: 'Oceania', photoNumber: pictures['oceania'].length, coverImage: './img/oceania.jpg' },
        { id: 'antartida', name: 'Antartida', photoNumber: pictures['antartida'].length, coverImage: './img/antartida.jpg' },
    ]
}