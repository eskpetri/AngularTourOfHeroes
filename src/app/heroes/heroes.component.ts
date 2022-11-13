import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = []; //Hero Array to be injected
  //selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }//Dependency injection 

  getHeroes(): void {
    this.heroService.getHeroes()                                                                        //Syncronous fetch: The HeroService.getHeroes() method has a synchronous signature (local mock array)
        .subscribe(heroes => this.heroes = heroes);  //Serves when done let browser do what it wants and wakes up when ready(callback)
  }             //On long fetch use loading screen                                                      //Beware you have to make asynchronous calls or that init is good. Pre Fetch?!?
  ngOnInit(): void {
    this.getHeroes();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
  /*onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }*/
}