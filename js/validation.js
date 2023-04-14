import {typesObject, priceInput as constPriceInput, roomsGuests, guestsRooms} from "./constants.js";
import {addDisabledOptions, removeDisabledOptions} from "./utils.js"

const form = document.querySelector(".ad-form");
const priceInput = form.querySelector("#price");
const roomsSelect = form.querySelector("#room_number");
const guestsSelect = form.querySelector("#capacity");
const timeInSelect = form.querySelector("#timein");
const timeOutSelect = form.querySelector("#timeout");

export function validate(){

}

function setDataPriceInput(value){
    constPriceInput.min = typesObject[value].minPrice;
    priceInput.placeholder = constPriceInput.min;
    priceInput.value = '';
}

function setOptionsRoomsGuests(value, select, setting){
    addDisabledOptions(select.options);
    const enableOptions =  setting[value];
    select.value = enableOptions[0];
    enableOptions.forEach(elem => {
        select.querySelector(`option[value="${elem}"]`).disabled = false;
    });
}

function setOptionsTimes(value, select){
    select.value = value;
}
/* я сделал случайно валидацию Комнаты - Гости на прошлом дз */
function checkSelect(e){
    switch (e.target.id) {
        case "type":
            setDataPriceInput(e.target.value);
            break;
        case "room_number":
            removeDisabledOptions(roomsSelect.options);
            setOptionsRoomsGuests(e.target.value, guestsSelect, roomsGuests);
            break;
    
        case "capacity":
            removeDisabledOptions(guestsSelect.options);
            setOptionsRoomsGuests(e.target.value, roomsSelect, guestsRooms);
            break;

        case "timein":
            setOptionsTimes(e.target.value, timeOutSelect);
            break;
                
        case "timeout":
            setOptionsTimes(e.target.value, timeInSelect);
            break;
        default:
            break;
    } 
}

function isValidTitle(title){
    const re = /^[A-Z][a-zA-Z0-9^@#()_!., ]+$/;
    let flag = false;
    if (!(re.test(title))) {
        flag = false;
    } else {
        flag = true;
    }
    return flag;
}

function checkInput(e){
    e.target.setCustomValidity("");
    if(e.target.id === "price"){
        e.target.setCustomValidity("");
        console.log(constPriceInput.min)
        if(e.target.value < constPriceInput.min){
            e.target.setCustomValidity(`Мінімальна ціна за ніч ${constPriceInput.min}`);
        }
    }
    if(e.target.id === "title"){
        console.log(isValidTitle(e.target.value))
        if(e.target.value.length < 5){
            e.target.setCustomValidity(`Мінімальна довжина заголовку 5`);
        } else if(!isValidTitle(e.target.value)){
            e.target.setCustomValidity(`Заголовок повиннен починатися з великої літери і без спецсимволів(;₴'?:%*)`);
        }
        
    }
    e.target.reportValidity();
}

form.addEventListener("change", checkSelect);
form.addEventListener("input", checkInput);
window.addEventListener("load", (e) => {
    priceInput.placeholder = constPriceInput.min;
    setOptionsRoomsGuests(roomsSelect.value, guestsSelect, roomsGuests);
    
});