import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
// import { GetBreedImageService} from './get-breed-image.service';

@Component({
  selector: 'app-response',
  template: '<h3>Response </h3>' +
  '<br> <label> Breed Name in Response: </label>' + '',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {



  constructor() { }


  ngOnInit(): void {
  }

}
