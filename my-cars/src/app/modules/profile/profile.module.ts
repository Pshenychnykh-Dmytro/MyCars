import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSigninComponent } from './components/profile-signin/profile-signin.component';
import { ProfileSignupComponent } from './components/profile-signup/profile-signup.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';



@NgModule({
  declarations: [    
    ProfileSigninComponent,
    ProfileSignupComponent,
    ProfileEditComponent,
    ProfileViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
