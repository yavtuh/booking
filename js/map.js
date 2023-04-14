import {toggleDisabledForm} from "./utils.js"
import {cardGenerate} from "./cardGenerate.js";

const form = document.querySelector(".ad-form");
const inputAddress = form.querySelector("#address");
toggleDisabledForm(form.elements, true);


     const map = L.map('map-canvas').on("load", function(e) {
        toggleDisabledForm(form.elements, false);
        inputAddress.setAttribute("readonly", true);
        inputAddress.value = `${e.target._lastCenter.lat}, ${e.target._lastCenter.lng}`;
    }).setView([35.67000, 139.80000], 13);
    
    const myIcon = L.icon({
        iconUrl : "/img/main-pin.svg",
        iconSize:35
    });
    const blueIcon = L.icon({
        iconUrl : "/img/pin.svg",
        iconSize:35
    });
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    export const myMarker = L.marker([35.67000, 139.80000],{icon: myIcon, draggable:true})
    .on("drag", function(e){
        const latLng = e.target.getLatLng();
        inputAddress.value = `${latLng.lat}, ${latLng.lng}`;
    })
    .addTo(map);
    
export function getMap(data){
    console.log(data)
    try {
        data.forEach((item) => { 
            new L.marker([item.offer.location.x, item.offer.location.y],{icon: blueIcon})
            .bindPopup(cardGenerate(item))
            .on("click", function(e){
                e.target.bindPopup(cardGenerate(item));
            })
            .addTo(map);
        });
    } catch (error) {
        console.log(error);
    }
}




