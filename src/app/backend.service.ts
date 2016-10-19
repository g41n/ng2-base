import { Injectable } from '@angular/core';

@Injectable()
export class BackendService {

    constructor() { }

    getHeroes() {
        return [
            {
                name: "Super Pippo",
                age: 74
            }, {
                name: "Batman",
                age: 87
            }, {
                name: "Spiderman",
                age: 24
            }, {
                name: "Thor",
                age: 182
            }
        ];
    }
}