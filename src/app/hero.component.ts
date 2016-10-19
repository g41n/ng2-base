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
        this.heroes = this.backend.getHeroes();
    }
}