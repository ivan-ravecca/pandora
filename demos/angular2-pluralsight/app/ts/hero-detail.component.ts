import { Component, OnInit } from 'angular2/core';

import {Hero} from './hero';
import { HeroService } from './hero.service';
import { Router, RouteParams } from 'angular2/router';


@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/view/hero-detail.component.html',
	styleUrls: ['app/css/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
	constructor(
		private _heroService: HeroService,
		private _routeParams: RouteParams) {
	}

	hero: Hero;

	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._heroService.getHero(id)
			.then(hero => this.hero = hero);
	}

	goBack() {
		window.history.back();
	}
}