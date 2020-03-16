import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListViewComponent } from './product-list-view/product-list-view.component';
import { ProductTableViewComponent } from './product-table-view/product-table-view.component';
import { ProductItemViewComponent } from './product-item-view/product-item-view.component';
import { ProductItemEditComponent } from './product-item-edit/product-item-edit.component';
import { ProductNavBarComponent } from './product-nav-bar/product-nav-bar.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [ProductListViewComponent, ProductTableViewComponent, ProductItemViewComponent, ProductItemEditComponent, ProductNavBarComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class ProductModule { }
