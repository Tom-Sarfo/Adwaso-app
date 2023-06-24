import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-grocery-detail',
  templateUrl: './add-grocery-detail.component.html',
  styleUrls: ['./add-grocery-detail.component.css']
})
export class AddGroceryDetailComponent implements OnInit {

  
  form = this.fb.group({
    groceryName: [
      "", 
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(15)
  ]
});

constructor(private fb: FormBuilder) { 
  
}
  

  ngOnInit(): void {
  }

}
