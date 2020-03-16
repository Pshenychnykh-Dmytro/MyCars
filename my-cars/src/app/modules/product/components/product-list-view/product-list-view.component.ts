import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/core/services/dtos/car.dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {

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
