import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent implements OnInit {

    name = "Super Pippo";

    constructor() { }

    ngOnInit() { }
}