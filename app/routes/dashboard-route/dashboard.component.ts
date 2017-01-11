import { Component } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
@Component({
    selector: 'my-dashboard',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[];
    constructor(private heroService: HeroService) { }
    ngOnInit(): void {
        this.heroService.getHeroes().then( (heroes) => {
            debugger
            console.log(heroes)
            //this.heroes = heroes.slice(1,5);
        })
    }
}
