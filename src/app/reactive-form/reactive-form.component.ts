import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl(''),
  });
}
