import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { MainComponent } from './main/main.component';
import { FormComponent } from './main/form/form.component';
import { ResponseComponent } from './main/response/response.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    ResponseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
