import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroceryDetailComponent } from './add-grocery-detail.component';

describe('AddGroceryDetailComponent', () => {
  let component: AddGroceryDetailComponent;
  let fixture: ComponentFixture<AddGroceryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGroceryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroceryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
