import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSigninComponent } from './profile-signin.component';

describe('ProfileSigninComponent', () => {
  let component: ProfileSigninComponent;
  let fixture: ComponentFixture<ProfileSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
