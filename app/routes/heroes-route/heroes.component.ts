import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  moduleId: module.id,
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title: string = 'Tour of Heroes';
  heroes: Hero[]; 
  selectedHero: Hero = null;

  //SERVICES
  constructor(
    private heroService: HeroService,
    private router: Router
    ) { }

  //METHODS
  getHeroes(): void {
    this.heroService.getHeroes().then( (heroes) => {
      this.heroes = heroes
    });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  //LIFE CYCLE
  ngOnInit(): void {
    this.getHeroes();
  }
}
