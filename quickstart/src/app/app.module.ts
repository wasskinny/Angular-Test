import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel -->

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,
  		 FormsModule // <-- import the formsModule -->
  		 ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
