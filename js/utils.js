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
