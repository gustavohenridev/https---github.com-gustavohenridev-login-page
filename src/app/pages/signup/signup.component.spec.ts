import { ComponentFixture, TestBed } from '@angular/core/testing';

import { signUpComponent } from './signup.component';

describe('LoginComponent', () => {
  let component: signUpComponent;
  let fixture: ComponentFixture<signUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [signUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(signUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
