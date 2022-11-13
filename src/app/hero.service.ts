import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {//This is an example of a typical service-in-service scenario in which you 
  //inject the MessageService into the HeroService which is injected into the HeroesComponent.
  constructor(private messageService: MessageService) { } //Dependency injection

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);  //The backtick ( ` ) characters define a JavaScript template literal for embedding the id.
    return of(hero);  //Like getHeroes(), getHero() has an asynchronous signature. It returns a mock hero as an Observable, using the RxJS of() function.
  }                    //You can rewrite getHero() as a real Http request without having to change the HeroDetailComponent that calls it.
}
