import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListViewComponent } from './components/product-list-view/product-list-view.component';
import { ProductTableViewComponent } from './components/product-table-view/product-table-view.component';
import { ProductItemViewComponent } from './components/product-item-view/product-item-view.component';
import { ProductItemEditComponent } from './components/product-item-edit/product-item-edit.component';
import { ProductNavBarComponent } from './components/product-nav-bar/product-nav-bar.component';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductCollectionResolver } from './resolvers/product.collection.resolver';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ProductListViewComponent,
    ProductTableViewComponent,
    ProductItemViewComponent,
    ProductItemEditComponent,
    ProductNavBarComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    RouterModule.forChild([      
      { 
        path: 'products',
        component: ProductViewComponent,
        resolve: { products: ProductCollectionResolver },       
        children: [
          { path: '', redirectTo: 'table', pathMatch: 'full' },
          { path: 'table', component: ProductTableViewComponent },
          { path: 'list', component: ProductListViewComponent },
          { path: 'add', component: ProductItemEditComponent }
        ]
      },
      
    ])    
  ],
  providers: [
    ProductCollectionResolver
  ]
})
export class ProductModule { }
