

export const typesObject = {
    palace: {
        name:"Палац",
        minPrice: 10000
    },
    flat: {
        name:"Квартира",
        minPrice: 1000
    },
    house: {
        name:"Будинок",
        minPrice: 5000
    },
    bungalow: {
        name:"Бунгало",
        minPrice: 0
    }
};

export const priceInput = {
    min: 1000
};

export const roomsGuests = {
    1:[1],
    2:[1,2],
    3:[1,2,3],
    100:[0]
}

export const guestsRooms = {
    0:[100],
    1:[1],
    2:[1,2],
    3:[1,2,3]
};

export const filtersObject = {
    type:"any",
    price:"any",
    rooms:"any",
    guests:"any",
    features:[]
};

export const countShowFilter = 10;

export const settingPrice = {
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
