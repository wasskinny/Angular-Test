import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel -->
import { HeroDetailComponent } from './hero-detail.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,
  		 FormsModule // <-- import the formsModule -->
  		 ],
  declarations: [ 
  	AppComponent, 
  	HeroDetailComponent
  	],
  
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
