import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';



@Injectable()
export class BackendService {

    constructor(private http: Http) { }

    getHeroes() {
        return this.http.get('http://localhost:4200/heroes.json')
            .toPromise()
            .then((response) => response.json())
            .catch(error => { console.log(error); });
    }

}