import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstModuleComponent } from './my-first-module.component';

describe('MyFirstModuleComponent', () => {
  let component: MyFirstModuleComponent;
  let fixture: ComponentFixture<MyFirstModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFirstModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
