import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

import { DashboardComponent } from './dashboard.component';
import { MyDemoComponent } from './component/mydemo/my-demo.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/view/main.html',
  styleUrls: ['app/css/app.component.css'],
  directives: [
  	ROUTER_DIRECTIVES,
  	HeroesComponent,
  	DashboardComponent,
  	MyDemoComponent
  ],
  providers: [
	ROUTER_PROVIDERS,
	HeroService
  ]
})

@RouteConfig([
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	},
	{
		path: '/detail/:id',
		name: 'HeroDetail',
		component: HeroDetailComponent
	}
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	}
])

export class AppComponent {
  title = 'Tour of Heroes';
  routerLink = "aa";
}
