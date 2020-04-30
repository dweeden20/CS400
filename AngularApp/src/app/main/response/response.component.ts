import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';

@Component({
  selector: 'app-response',
  template: '<h3>Response</h3>' +
  '<br> input from child: {{breed_name}}',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {


  @Input() breed_name: string;
  private http: any;

  getBreedImage() {
    return this.http.get('https://dog.ceo/api/breed/'+this.breed_name+'/images/random');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
