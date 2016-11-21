import { Component, OnInit } from '@angular/core';

import { BackendService } from './backend.service';

@Component({
    selector: 'hero',
    templateUrl: 'hero.component.html',
    providers: [BackendService]
})
export class HeroComponent implements OnInit {

    heroes = [];

    constructor(private backend: BackendService) { }

    ngOnInit() {
        this.backend.getHeroes().then(heroes => this.heroes = heroes);
    }
}