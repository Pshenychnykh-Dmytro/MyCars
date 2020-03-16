import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from './services/car.service';



@NgModule({
  declarations: [],
  providers: [CarService],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
