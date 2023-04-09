import {typesObject, priceInput as constPriceInput, roomsGuests, guestsRooms} from "./constants.js";
import {addDisabledOptions, removeDisabledOptions} from "./utils.js"

const form = document.querySelector(".ad-form");
const priceInput = form.querySelector("#price");
const titleInput = form.querySelector("#title");
const roomsSelect = form.querySelector("#room_number");
const guestsSelect = form.querySelector("#capacity");
const timeInSelect = form.querySelector("#timein");
const timeOutSelect = form.querySelector("#timeout");


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

function checkPrice(input){
    input.setCustomValidity("");
    if(input.value < constPriceInput.min){
        input.setCustomValidity(`Мінімальна ціна за ніч ${constPriceInput.min}`);
    }
    return input.reportValidity();
}

function checkTitle(input){
    input.setCustomValidity("");
    if(input.value.length < 5){
        input.setCustomValidity(`Мінімальна довжина заголовку 5`);
    } else if(!isValidTitle(input.value)){
        input.setCustomValidity(`Заголовок повиннен починатися з великої літери і без спецсимволів(;₴'?:%*)`);
    }
    return input.reportValidity();
}


export function validate(){
    if(!checkTitle(titleInput)){
        return false;
    }else if(!checkPrice(priceInput)){
        return false;
    }
    return true;
}



form.addEventListener("change", checkSelect);
titleInput.addEventListener("input", function(e){
    checkTitle(e.target);
});
priceInput.addEventListener("input", function(e){
    checkPrice(e.target);
})

window.addEventListener("load", (e) => {
    priceInput.placeholder = constPriceInput.min;
    setOptionsRoomsGuests(roomsSelect.value, guestsSelect, roomsGuests);
    
});