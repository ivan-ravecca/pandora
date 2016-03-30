import { Component, OnInit } from 'angular2/core';


@Component({
	selector: 'my-demo',
	templateUrl: 'app/ts/component/mydemo/my-demo.component.html',
	styleUrls: ['app/ts/component/mydemo/my-demo.component.css']
})

export class MyDemoComponent implements OnInit {
	constructor() {
		console.log("this is demo component");
	}

	ngOnInit() {
		
	}
}