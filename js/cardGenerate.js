import {typesObject} from "./constants.js";

const mapCanvas = document.querySelector("#map-canvas");
const cardTemplate = document.querySelector("#card");
const card = cardTemplate.content.cloneNode(true);
const cardFragment = new DocumentFragment;
const cardTitle = card.querySelector(".popup__title");
const cardAvatar = card.querySelector(".popup__avatar");
const cardAdrress = card.querySelector(".popup__text--address");
const cardPrice = card.querySelector(".popup__text--price");
const cardType = card.querySelector(".popup__type");
const cardCapacity = card.querySelector(".popup__text--capacity");
const cardTime = card.querySelector(".popup__text--time");
const cardFeatures = card.querySelector(".popup__features");
const cardDescription = card.querySelector(".popup__description");
const cardPhotos = card.querySelector(".popup__photos");

function featuresGenerate(array){
    const featuresFragment = new DocumentFragment;
    const listFeatures = document.createElement('li');
    array.forEach((elem) => {
        listFeatures.setAttribute("class", `popup__feature popup__feature--${elem}`);
        featuresFragment.appendChild(listFeatures.cloneNode(true));
    });
    return featuresFragment;
}

function photosGenerate(array){
    const photosFragment = new DocumentFragment;
    const photosElement = cardPhotos.querySelector(".popup__photo");
    array.forEach((elem) => {
        photosElement.src = elem;
        photosFragment.appendChild(photosElement.cloneNode(true));
    });
    return photosFragment;
}

function cardGenerate(cardArray){
    
        cardTitle.innerText = cardArray.offer.title;
        cardAvatar.src = cardArray.author.avatar;
        cardAdrress.innerText = cardArray.offer.address;
        cardPrice.innerHtml = `${cardArray.offer.price} <span>грн/ніч</span>`;
        cardType.innerText = typesObject[cardArray.offer.type];
        cardCapacity.innerText = `${cardArray.offer.rooms} кімнати для ${cardArray.offer.guests} гостей`;
        cardTime.innerText = `Заїзд після ${cardArray.offer.checkin}, виїзд до ${cardArray.offer.checkout}`;
        cardFeatures.replaceChildren(featuresGenerate(cardArray.offer.features));
        cardDescription.innerText = cardArray.offer.description;
        cardPhotos.replaceChildren(photosGenerate(cardArray.offer.photos));
        cardFragment.appendChild(card.cloneNode(true));
}
export function getCard(cardsArrays){
    cardsArrays.forEach((cardArray) => cardGenerate(cardArray));
    mapCanvas.appendChild(cardFragment)
}


