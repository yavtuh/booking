
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
