
export function getRandomUniqueArray(array){
    const lengthArray = array.length;
    const randomUniqueArray = getRandomUnique(lengthArray , getRandomInt(1, lengthArray + 1));
    return randomUniqueArray.map((elem) => array[elem - 1]);
}

export function getRandomUnique(range, count){
    let nums = new Set();
    while (nums.size < count) {
        nums.add(Math.floor(Math.random() * (range - 1 + 1) + 1));
    }
    return [...nums];
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}


export function addDisabledOptions(options){
    for(let i = 0; i<options.length; i++){
        options[i].disabled = true;
    }
}

export function removeDisabledOptions(options){
    for(let i = 0; i<options.length; i++){
        options[i].disabled = false;
    }
}

export function toggleDisabledForm(elements, bool){
    for(let i = 0; i<elements.length; i++){
        elements[i].disabled = bool;
    }
}
