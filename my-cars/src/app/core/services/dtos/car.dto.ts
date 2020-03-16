export interface CarDto{
    id: number;
    title: string;
    model: string;
    price: number;
    year?: number;    
    fuelType?: FuelType;
    turbo?: boolean;
    engineVolume?: number;    
    transmissionType?: TransmissionType;
}

export enum TransmissionType{
    manual, automatic, variator, robot
}

export enum FuelType{
    gas, lpg, gas_lpg, diesel, electro, hybrid
}