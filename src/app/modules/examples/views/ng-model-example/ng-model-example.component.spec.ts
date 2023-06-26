import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelExampleComponent } from './ng-model-example.component';

describe('NgModelExampleComponent', () => {
  let component: NgModelExampleComponent;
  let fixture: ComponentFixture<NgModelExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgModelExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgModelExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
