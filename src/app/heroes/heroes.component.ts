import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes :  Hero[];

  // selectedHero : Hero;

  //注入HeroService和MessageService
  constructor(private heroService : HeroService, private messageService : MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero : Hero) : void{
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroService: Selected hero id = ${hero.id}`);
  // }

  getHeroes() : void {
    //异步数据传输
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name : string): void{
    name = name.trim();
    if(!name.trim()) {return;}
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    })
  }

}
