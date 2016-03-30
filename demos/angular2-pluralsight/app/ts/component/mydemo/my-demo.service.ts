import {Injectable} from 'angular2/core';

@Injectable()
export class DemoService {
	getFoo() {
		return Promise.resolve({foo: 'bar'});
	}
}