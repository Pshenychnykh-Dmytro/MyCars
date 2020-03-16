import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/core/services/dtos/car.dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-table-view',
  templateUrl: './product-table-view.component.html',
  styleUrls: ['./product-table-view.component.scss']
})
export class ProductTableViewComponent implements OnInit {

  private _cars: CarDto[];
  
  constructor(private route: ActivatedRoute) {    
  }

  ngOnInit(): void {
    this.route.parent.data.subscribe(
      data => this._cars = data['products']
    )    
  }

  get cars(): CarDto[]{
    return this._cars;
  }

}
