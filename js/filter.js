import {getMap} from "./map.js";
import {filtersObject, countShowFilter, settingPrice} from "./constants.js";
const formFilters = document.querySelector(".map__filters");

let dataFilter;

export function getDataFilters(data){
    if(data){
        dataFilter =  data;
    } else{
        console.log("Не прийшли данні з серверу")
    }
}

function roomsFilter(offer){
    if(filtersObject.rooms !== "any"){
        return offer.offer.rooms === Number(filtersObject.rooms);
    } else {
        return offer
    }
}

function typeFilter(offer){
    if(filtersObject.type !== "any"){
        return offer.offer.type === filtersObject.type;
    } else{
        return offer
    }
}

function priceFilter(offer){
    if(filtersObject.price !== "any"){
        return offer.offer.price > settingPrice[filtersObject.price].min && offer.offer.price < settingPrice[filtersObject.price].max;
    } else{
        return offer
    }
}

function guestsFilter(offer){
    if(filtersObject.guests !== "any"){
        return offer.offer.guests === Number(filtersObject.guests);
    } else{
        return offer
    }
}

function featuresFilter(offer){
    if(filtersObject.features.length !== 0){
        return filtersObject.features.every(item => offer.offer.features.includes(item))
    } else{
        return offer
    }
}

function filter(){
    const filtersArray = dataFilter.slice(0)
    .filter(typeFilter)
    .filter(roomsFilter)
    .filter(priceFilter)
    .filter(guestsFilter)
    .filter(featuresFilter);
    getMap(filtersArray.slice(0, countShowFilter))
}

function toggleDataCheckbox(checkbox){
    if(checkbox.checked){
        filtersObject.features.push(checkbox.id.split("-")[1]);
        filter();
    }else{
        filtersObject.features.forEach((value, index) => {
            if(value === checkbox.id.split("-")[1]){
                filtersObject.features.splice(index, 1);
            }
        });
        filter();
    }
}

function setDataSelect(select){
    filtersObject[select.id.split("-")[1]] = select.value;
    filter();
}

function checkFilter(e){
    if(e.target.getAttribute("name") === "features"){
        toggleDataCheckbox(e.target);
    } else if(e.target.classList.value === "map__filter"){
        setDataSelect(e.target)
    }
}

formFilters.addEventListener("change", checkFilter);