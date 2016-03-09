// One or more import statements to reference the things we need.
import {Component} from 'angular2/core';

// A @Component decorator that tells Angular 
// what template to use and how to create the component.
@Component({
	// The selector specifies a simple CSS selector for an HTML element
	// that represents the component.
    selector: 'my-app',
    // The template specifies the component's companion template, 
    // written in an enhanced form of HTML that tells Angular 
    // how to render this component's view 
    template: '<h1>My First Angular 2 App</h1><br/> Expanding template content'
})

// A component class that controls the appearance and behavior 
// of a view through its template.
// We can expand this class with properties and application logic. 
export class AppComponent { }

// Now we need something to tell Angular to load the root component --> main.ts