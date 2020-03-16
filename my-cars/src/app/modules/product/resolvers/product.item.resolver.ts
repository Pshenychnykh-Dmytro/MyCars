import { Resolve, RouterStateSnapshot, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CarService } from 'src/app/core/services/car.service';
import { CarDto } from 'src/app/core/services/dtos/car.dto';

@Injectable()
export class ProductItemResolver implements Resolve<CarDto>{
    constructor(private carService: CarService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CarDto> {
        let id: number = +route.paramMap.get('id');
        return this.carService.GetCarById(id);
    }
}