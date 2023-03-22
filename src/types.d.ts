export interface QuakesContractTypes {
    id: string;
    date: string;
    depth: string;
    magnitude: string;
    geoRef: string;
    dateUpdate: string;
}

export interface QuakesAPITypes {
    Fecha: string;
    Profundidad: string;
    Magnitud: string;
    RefGeografica: string;
    FechaUpdate: string;
}

export type ListQuakesAPITypes = Array<QuakesAPITypes>;
export type ListQuakesContract = Array<QuakesContractTypes>;
