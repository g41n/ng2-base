import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent implements OnInit {

    heroes = [
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

    constructor() { }

    ngOnInit() { }
}