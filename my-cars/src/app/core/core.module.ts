import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from './services/car.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  providers: [CarService],
  imports: [
    CommonModule,
    HttpClientModule
  ]  
})
export class CoreModule { }
