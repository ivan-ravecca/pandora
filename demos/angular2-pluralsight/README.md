# DOCS
	angular.io/docs
# Some more tools
	https://cmatskas.com/getting-started-with-typescript-and-sublime-text/

Data binding
interpolation (DOM <---- component)
one way binding (DOM <----- component) [attribute]
Event binding (DOM -----> component) ~> (click)
Two way binding (DOM <----> component) ~> [(ngModel)]

==== Servicess ====
	Now all is a class (using Injectable)
==== Dependency injection ====
	We use provider: [ProviderName] in the decorator component
	Note: we need to add the dependency in the highest component, then children will be able to consume that dependency.
	If we add the same dependency on each component of a hierarchy structure, we'll get as many instances as declarations are.
==== Components ====
	Each component should delcare child components (in the @Component decorator add: directives: [MyOtherComponent])
	If not, it won't have an error but the child component may not be shown.

	We can use url for template (templateUrl: 'path') files along to style (styleUrls: []) sheets.

	Use [] to send values from the component to the template
	*** One Way binding ***
		{{expression}}
		[target] = "expression" 
			------- Out -------
			~~~> <img [src]="myObj.srcUrl">
			~~~> <my-component [myAttribute]="myAttributeValue"></my-component>
			~~~> <div [ngClass] = "{selected: isSelected}">blha</div>
			------- In -------
			~~~> <button [attr.aria-label]= "Cancel">Cancel</button>
			~~~> <div [class.isStoppped]= "isStopped">Stopped</div>
			~~~> <div [style.color]= "isStopped ? 'red' : 'green'">Stopped</div>
		bind-target = "expression"
	Use () to send events from the Template to the Component
	*** One Way binding ***
		(target)="statement"
		on-target="statement"
		~~~> <button (click)="save()">Save</button>
		~~~> <my-component (changed)="applyChangedValue()"></my-component>
		~~~> <input [value]="obj.value" (input)="obj.value=$event.target.value">
	Use [()] to sends a value from Component to Template and sends valu echanges in the Template to the Component
	*** Two Way binding ***
		~~~> [(ngModel)]="expression"
		~~~> bindon-ngModel="expression"


==== Events ====
	A way to communicate between components is using events (EventEmitter??)
	Which it defines an @Output() ~> communicate anyone hosting the component (emiting using .emit(something))
	and @Input() which is used to get data.

{code}
import { Component, EventEmitter, Input, OnInit, Output } from 'angular2/core';
import { Character, CharacterService } from './character.service';
import { CharacterComponent } from './character.component';

@Component({
  selector: 'story-characters',
  templateUrl: './app/characters.component.html',
  styleUrls: ['./app/characters.component.css'],
  directives: [CharacterComponent],
  providers: [CharacterService]
})
export class CharactersComponent implements OnInit {
  @Output() changed = new EventEmitter<Character>();
  @Input() storyId: number;
  characters: Character[];
  selectedCharacter: Character;

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
    this._characterService.getCharacters(this.storyId)
      .subscribe(characters => this.characters = characters);
  }

  select(selectedCharacter: Character) {
    this.selectedCharacter = selectedCharacter;
    this.changed.emit(selectedCharacter);
  }
}
{code}

==== @ViewChild ====
Use this component when the parent component needs to communicate to the child ones.-

=== removed stuff ====
Say goodbay to .apply, .digest, watch, 

==== Other Weird stuff ====
Elvis operator: in an interpolation we can use: {{myObject?.myAttribute}} meaning that it can use myAttribute when it's available and not throw an error when is not.
There are pipes (instead of filters) and you can create them by using @Pipe decortaror; to sue those pipes you can add pipes: [] as it were directives dependencies in the @Component decorator

==== Lifecycle Hooks ====
	We "implements" the hook (export class MyComponent implements OnInit..., then we need to to implement the method ngOnInit())
--------------------

==== HTTPD ====
it's a separated module so we need to add a new script and dependency in order to use it,
look at the map, handling error, .do(), .toPromise() and .finally() stuff here
==== RXJs ====
Reactive Js implements the async observable pattern.
==== Async pipes receives a promise or observable as input and suscribes to the input,  emiting ther values as change arrives
(when using this in the template we need top add "| async")

==== Routing ====
ANgular 1 vs Angular 2
$routeProvider.when() ~~~~> @RouteConfig({})
<ng-view> ~~~~>  <route-outlet>
ng-href="" ~~~~> [routerLink]="linkParameters"
$routeParams ~~~~> RouteParams
$router ~~~~> Router