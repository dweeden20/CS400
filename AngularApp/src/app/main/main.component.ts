import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: '' + '<h3> main </h3>' + '<app-main-form></app-main-form>' +
  '<app-main-response></app-main-response>',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  breed_name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
