const countOffers = 10;
const countAvatar = {
    min: 1,
    max: 8
};
const countPrice = {
    min: 10,
    max: 10000
};
const countRooms = {
    min: 1,
    max: 3
};
const countGuests = {
    min: 1,
    max: 6
};
const locationXValues = {
    min: 35.65000,
    max: 35.70000
}
const locationYValues = {
    min: 139.70000,
    max: 139.80000
}

const titleArray = [
    "HOTELLI kohteessa Torremolinos, Espanja",
    "HUONEISTO kohteessa Fuengirola, Espanja",
    "MATKUSTAJAKOTI kohteessa Torremolinos, Espanja",
    "Ocean House Costa del Sol, Affiliated by Melia",
    "Sol Torremolinos - Don Marco Adults Only",
    "Essence Hotel Boutique & Spa by Don Paquito",
    "AluaSoul Costa Malaga - Adults Recommended",
    "Mediterraneo Real Apartamentos Turísticos"
];
const typeArray = [
    "palace",
    "flat",
    "house ",
    "bungalow"
];
const checkinArray = [
    "12:00",
    "13:00",
    "14:00"
];
const checkoutArray = [
    "12:00",
    "13:00",
    "14:00"
];
const featuresArray = [
    "wifi",
    "dishwasher",
    "parking",
    "washer",
    "elevator",
    "conditioner"
];
const descriptionArray = [
    "Tämä perheomisteinen hotelli sijaitsee Torremolinoksessa Montemarin asuinalueella vain 300 metrin päässä kuuluisalta La Carihuelan rannalta ja 10 minuutin ajomatkan päässä Málagan lentokentältä.",
    "Kaikki huoneet ovat täysin ilmastoituja, ja niihin kuuluu suuri terassi, kylpyhuone, puhelin ja vuokrattava tallelokero. Ilmainen WiFi on käytettävissä kaikissa tiloissa. Mukavuuksiin kuuluu myös kaapelikanavat. Voit rentoutua uima-altaalla tai nauttia viileän drinkin baarin aurinkoterassilla, jota ympäröivät hedelmäpuut ja palmut.",
    "Hotellin edessä pysähtyvä bussi tarjoaa säännöllisen yhteyden suurimpiin kaupunkeihin. Myös junat pysähtyvät vain 500 metrin päässä. Voit tutustua 1,5 km:n päässä Carmen Teresasta sijaitsevan Torremolinoksen kauppoihin, ravintoloihin ja kahviloihin. Benalmádenan kuuluisa 'La Marina' -satama on 1 km:n päässä.",
    "Boasting an outdoor swimming pool, a garden, and a terrace, Mi Capricho Luxury Apartment Bajo, P03 A features accommodation in Mijas Costa with free WiFi and sea views. Featuring free private parking, the 4-star apartment is a few steps from Playa de Calahonda - Royal Beach.",
    "The air-conditioned apartment consists of 2 bedrooms, a living room, a fully equipped kitchen with a fridge and a coffee machine, and 2 bathrooms with a bidet and a shower. Towels and bed linen are available in the apartment.",
    "A children's playground is available on site and hiking can be enjoyed within close proximity of the apartment. Playa de Calahonda is 1.2 km from Mi Capricho Luxury Apartment Bajo, P03 A, while La Cala Golf is 12 km from the property.",
    "This property will not accommodate hen, stag or similar parties. Please inform Mi Capricho Luxury Apartment Bajo, P03 A in advance of your expected arrival time. You can use the Special Requests box when booking, or contact the property directly with the contact details provided in your confirmation.",
    "PISCINA INFERIOR is closed from Mon 24 Oct 2022 until Sun 30 Apr 2023 If you cause damage to the property during your stay, you could be asked to pay up to EUR 150 after check-out, according to this property's Damage Policy.",
    "The nearest airport is Malaga Airport, 39 km from the accommodation."
];
const photosArray = [
    "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
    "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
    "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
]

function randomUniqueArray(array){
    const lengthArray = array.length;
    const randomUniqueArray = randomUnique(lengthArray , getRandomInt(1, lengthArray + 1));
    return randomUniqueArray.map((elem) => array[elem - 1]);
}

function randomUnique(range, count){
    let nums = new Set();
    while (nums.size < count) {
        nums.add(Math.floor(Math.random() * (range - 1 + 1) + 1));
    }
    return [...nums];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}


function generateOffer(index){
    return {
        id: index + 1,
        author: {
            avatar: `img/avatars/user0${getRandomInt(countAvatar.min, countAvatar.max)}.png`
        },
        offer: {
            title: titleArray[getRandomInt(0, titleArray.length - 1)],
            address: `${getRandomFloat(1.1, 2.5)}, ${getRandomFloat(1.1, 2.5)}`,
            price: getRandomInt(countPrice.min, countPrice.max),
            type: typeArray[getRandomInt(0, typeArray.length - 1)],
            rooms: getRandomInt(countRooms.min, countRooms.max),
            guests: getRandomInt(countGuests.min, countGuests.max),
            checkin: checkinArray[getRandomInt(0, checkinArray.length - 1)],
            checkout: checkoutArray[getRandomInt(0, checkoutArray.length - 1)],
            features: randomUniqueArray(featuresArray),
            description: descriptionArray[getRandomInt(0, descriptionArray.length - 1)],
            photos: randomUniqueArray(photosArray),
            location: {
                x: getRandomFloat(locationXValues.min, locationXValues.max),
                y: getRandomFloat(locationYValues.min, locationYValues.max)
            }
        },
       

    }
}

const data = new Array(countOffers).fill(null).map((e, index) => generateOffer(index));
console.log(data);