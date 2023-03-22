import { QUAKES_API } from "../constants";
import { parseDate, parseDepth } from "../utils/parse";
import { type ListQuakesAPITypes, type ListQuakesContract } from "../types";

const contractQuakes = (quakes: ListQuakesAPITypes): ListQuakesContract => {
    return quakes.map((quake) => ({
        id: crypto.randomUUID(),
        date: parseDate(quake.Fecha),
        depth: parseDepth(quake.Profundidad),
        magnitude: quake.Magnitud,
        geoRef: quake.RefGeografica,
        dateUpdate: parseDate(quake.FechaUpdate)
    }));
};

export const getAllQuakes = async () => {
    const res = await fetch(QUAKES_API);
    const quakes: ListQuakesAPITypes = await res.json();

    const contractedQuakes = contractQuakes(quakes);
    return contractedQuakes;
};
