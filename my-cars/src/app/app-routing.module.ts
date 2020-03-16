import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeViewComponent } from './modules/home/components/home-view/home-view.component';


const ROUTES: Routes = [  
  { path: 'home', component: HomeViewComponent },
  { path: '', component: HomeViewComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
