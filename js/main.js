import {getOffers} from "./getoffers.js";
import  "./sendoffer.js";
import {getMap} from "./map.js";

const data = await getOffers();

getMap(data);

