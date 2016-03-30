import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {Router} from 'angular2/router';


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/view/heroes.component.html',
	styleUrls: ['app/css/heroes.component.css'],
	directives: [HeroDetailComponent]

})

export class HeroesComponent implements OnInit {
	// we add a constructor.
	// we add to the component's providers metadata
	// Now Angular will know to supply an instance of the HeroService when it creates a new AppComponent
	constructor(
		private _heroService: HeroService,
		private _router: Router
	) { }

	selectedHero: Hero;
	public title = 'Tour of Heroes';
	public heroes: Hero[];
	onSelect(hero: Hero) { this.selectedHero = hero; }

	getHeroes() {
		this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}

	ngOnInit() {
		this.getHeroes();
	}

	gotoDetail() {
		this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	}
}