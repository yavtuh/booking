const formFilters = document.querySelector(".map__filters");
const formFiltersType = formFilters.querySelector("#housing-type");
const formFiltersPrice = formFilters.querySelector("#housing-price");
const formFiltersRooms = formFilters.querySelector("#housing-rooms");
const formFiltersGuests = formFilters.querySelector("#housing-guests");
const formFiltersCheckBox = formFilters.querySelectorAll(".map__checkbox");
const filtersObject = {
    type:"any",
    price:"any",
    rooms:"any",
    guests:"any",
    features:[]
};
const settingPrice = {
    middle:{
        min: 10000,
        max: 50000
    },
    low: {
        min: 0,
        max: 10000
    },
    high: {
        min:50000,
        max: Infinity
    }
};
let dataFilter, dataMain, countFilters;

export function getDataFilters(data){
    if(data){
        dataFilter =  data.slice(0);
        dataMain = data;
    } else{
        console.log("Не прийшли данні з серверу")
    }
}

function isFilterArray(offer){

    for (const filterObject in filtersObject) {
        if(filtersObject[filterObject].length !== 0 && filtersObject[filterObject] !== "any"){
            console.log(`${filterObject}: ${filtersObject[filterObject]}`);
            // if(filterObject === "price"){
            //     return 
            // }
            return offer[filterObject].every((key) => offer[key] === filtersObject[filterObject])
            // return offer.keys(this).every((key) => user[key] === this[key])
        }
    }
}

function filter(){
    console.log(filtersObject);
    const filtersArray = dataFilter.slice(0).filter((item) => isFilterArray((item.offer)));
    console.log(filtersArray, dataFilter);
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