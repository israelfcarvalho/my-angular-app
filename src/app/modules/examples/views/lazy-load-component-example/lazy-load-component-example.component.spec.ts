import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadComponentExampleComponent } from './lazy-load-component-example.component';

describe('LazyLoadComponentExampleComponent', () => {
  let component: LazyLoadComponentExampleComponent;
  let fixture: ComponentFixture<LazyLoadComponentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadComponentExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyLoadComponentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
