import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel -->
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule, // <-- import the formsModule -->
  	RouterModule.forRoot([
		{
			path: '',
			redirectTo: '/dashboard',
			pathMatch: 'full'
		},
		{
			path: 'dashboard',
			component: DashboardComponent
		},
		{
			path: 'heroes',
			component: HeroesComponent
		},
		
	])
  ],
  
  declarations: [ 
  	AppComponent,
  	DashboardComponent,
  	HeroDetailComponent,
  	HeroesComponent
  	],
  	
  providers: [
	HeroService
  ],
  
  bootstrap:    [ AppComponent ]
})

export class AppModule {
	
}
