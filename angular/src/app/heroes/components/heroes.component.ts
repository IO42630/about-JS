import { Component, OnInit } from '@angular/core';

import { Hero } from '../domain/hero';
import { HeroRepoService } from '../service/hero-repo.service';

// selector : CSS selector - how component is referenced in a css file.
// matches the name of the HTML element that identifies this component within a parent component's template.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

// (?) interface OnInit
export class HeroesComponent implements OnInit {

  heroes: Hero[];


  constructor(private heroService: HeroRepoService) { }

  // lifecycle hook
  // called shortly after creating the component
  ngOnInit() {
    this.getHeroes();
  }


  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
