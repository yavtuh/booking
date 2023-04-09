import {validate} from "./validation.js";
import {myMarker, getMap} from "./map.js";
const form = document.querySelector(".ad-form");
const titleForm = form.querySelector("#title");
const addressForm = form.querySelector("#address");
const typeForm = form.querySelector("#type");
const priceForm = form.querySelector("#price");
const timeinForm = form.querySelector("#timein");
const timeoutForm = form.querySelector("#timeout");
const room_numberForm = form.querySelector("#room_number");
const capacityForm = form.querySelector("#capacity");
const checkBoxForm = form.querySelectorAll('.feature__checkbox');
const descriptionForm = form.querySelector("#description");

function getCheckedValue(){
    const checkedArray = Array.from(checkBoxForm);
    const checkedItems = checkedArray.filter((item) => item.checked);
    return checkedItems.map((item) => item.id.split("-")[1]);
}


async function sendForm(e){
    e.preventDefault();
    if(validate()){
        await fetch("http://localhost:4000/offer", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData())),
        })
        .then(function (resp) {
            return resp.json();
        })
        .then((result) => {
            console.log(result);
            myMarker.setLatLng([35.67000, 139.80000]).update();
            getMap(result);
            form.reset();
        })
        .catch((error) => {
            console.log(error)
        });
    }
}

function formData(){
    const formData = new FormData();
    formData.append("title", titleForm.value);
    formData.append("address", addressForm.value);
    formData.append("type", typeForm.value);
    formData.append("price", priceForm.value);
    formData.append("timein", timeinForm.value);
    formData.append("timeout", timeoutForm.value);
    formData.append("room_number", room_numberForm.value);
    formData.append("capacity", capacityForm.value);
    formData.append("feature", getCheckedValue());
    formData.append("locationX", myMarker.getLatLng().lat);
    formData.append("locationY", myMarker.getLatLng().lng);
    formData.append("description", descriptionForm.value);
    return formData;
}

form.addEventListener("submit", sendForm);