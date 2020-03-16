import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListViewComponent } from './components/product-list-view/product-list-view.component';
import { ProductTableViewComponent } from './components/product-table-view/product-table-view.component';
import { ProductItemViewComponent } from './components/product-item-view/product-item-view.component';
import { ProductItemEditComponent } from './components/product-item-edit/product-item-edit.component';
import { ProductNavBarComponent } from './components/product-nav-bar/product-nav-bar.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [ProductListViewComponent, ProductTableViewComponent, ProductItemViewComponent, ProductItemEditComponent, ProductNavBarComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class ProductModule { }
