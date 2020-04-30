import { Component, EventEmitter ,Output} from '@angular/core';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-form',
  template: '<h3>Form</h3>' +' <br> <label>Enter a Breed Name: </label> ' +
    '<input type = "text" [formControl] = "breed"> <button (click)="sendToMain(breed_name)">Submit</button>',
  styleUrls: ['./form.component.css']
})


//<label>Dog Breed: </label> <input type="'text" [formControl]="breed_name">
export class FormComponent  {
  breed: FormControl = new FormControl('labrador');
  breed_name: string;
  @Output() outputToMain = new EventEmitter<string>();
  sendToMain(selected: string){
    this.outputToMain.emit(selected);
  }



}
