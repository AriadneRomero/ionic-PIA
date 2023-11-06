import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthPage } from './auth.page';
import { FormGroup } from '@angular/forms';

describe('AuthPage', () => {
  let component: AuthPage;
  let fixture: ComponentFixture<AuthPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
