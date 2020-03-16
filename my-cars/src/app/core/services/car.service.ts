import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarDto } from './dtos/car.dto';

@Injectable()
export class CarService {
    //private readonly apiUrl: string = "http://localhost:1488/api/cars";
    private readonly apiUrl: string = "assets/mock/allcars.json";
    private readonly apiUrlSingle: string = "assets/mock/car";
    constructor(private httpClient: HttpClient){        
    }

    GetAllCars(): Observable<CarDto[]>{        
        return this.httpClient.get<CarDto[]>(this.apiUrl);
    }
    
    GetCarById(id: number): Observable<CarDto>{
        return this.httpClient.get<CarDto>(`${this.apiUrlSingle}${id}.json`);
    }
}