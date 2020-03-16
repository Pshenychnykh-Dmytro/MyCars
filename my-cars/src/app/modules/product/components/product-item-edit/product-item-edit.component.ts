import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarDto } from 'src/app/core/services/dtos/car.dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item-edit',
  templateUrl: './product-item-edit.component.html',
  styleUrls: ['./product-item-edit.component.scss']
})
export class ProductItemEditComponent implements OnInit {  
  public title = new FormControl('', Validators.required);
  public model = new FormControl('', Validators.required);
  public price = new FormControl('', Validators.required);
  public year = new FormControl('', Validators.required);

  public productForm = new FormGroup({
    title: this.title, // new FormControl('', Validators.required),
    model: this.model, // new FormControl('', Validators.required),
    price: this.price,//new FormControl('', Validators.required),
    year: this.year //new FormControl('', Validators.required)
  });

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {   
    this.route.data.subscribe(data => {
        let id = +this.route.snapshot.params['id'];
        if(id && id !==0) {
          let car: CarDto = data['product'];
          this.title.setValue(car.title);         
          this.model.setValue(car.model);
          this.price.setValue(car.price);
          this.year.setValue(car.year);          
        }
      }
    )
  }  

  public onSubmit(): void{
    let title: string = this.productForm.value.title;
    let model: string = this.productForm.value.model;
    let price: number = this.productForm.value.price;
    let year: number = this.productForm.value.year;    
  }
}
