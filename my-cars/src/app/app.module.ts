import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AppNavBarComponent } from './shared/components/app-nav-bar/app-nav-bar.component';
import { ProductModule } from './modules/product/product.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AppNavBarComponent    
  ],
  imports: [
    BrowserModule,    
    ProductModule,
    HomeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
