import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero';
import { HEROES } from '../mocked-data/mock-heroes';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {
    constructor(private http: Http) { }
    private  url = `https://randomuser.me/api/?results=5`
    getHeroes(): Promise<Hero[]> {
       return this.http.get(this.url)
               .toPromise()
               .then(response => response.json().results )
               .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}