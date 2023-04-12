import {getOffers} from "./getoffers.js";
import  "./sendoffer.js";
import {getMap} from "./map.js";
import {getDataFilters} from "./filter.js"

const data = await getOffers();
getMap(data);
getDataFilters(data);


