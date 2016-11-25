import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
    selector: 'my-app',
    providers: [HeroService],
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `
})
export class AppComponent implements OnInit {

    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService.getHeroes() // Promise
            .then(heroes => this.heroes = heroes, error => console.error(error));
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    ngOnInit(): void {
        this.getHeroes();
    }
}
