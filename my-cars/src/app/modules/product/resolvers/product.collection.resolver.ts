import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CarService } from 'src/app/core/services/car.service';
import { CarDto } from 'src/app/core/services/dtos/car.dto';

@Injectable()
export class ProductCollectionResolver implements Resolve<CarDto[]>{
    constructor(private carService: CarService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CarDto[]> {
        return this.carService.GetAllCars();
    }
}