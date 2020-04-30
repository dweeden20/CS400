import {Component, Input, OnInit} from '@angular/core';
import {FormComponent} from './form/form.component';


@Component({
  selector: 'app-main',
  template: '<h3> main </h3>' + '<app-form></app-form>' +
  '<app-response></app-response>',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  breed_name: string;

  //getOutputVal(selected: string);

  constructor() { }

  ngOnInit(): void {
  }

}
