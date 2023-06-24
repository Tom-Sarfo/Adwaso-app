import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroceryImageComponent } from './add-grocery-image.component';

describe('AddGroceryImageComponent', () => {
  let component: AddGroceryImageComponent;
  let fixture: ComponentFixture<AddGroceryImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGroceryImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroceryImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
