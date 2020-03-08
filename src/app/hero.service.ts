import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

//这个类似Spring中的@Component声明
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  
  getHero(id: number) : Observable<Hero> {
    this.messageService.add(`HeroService: fetch hero id = ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  //注入消息服务
  //以公共属性注入,因为我们会在模板中绑定它
  constructor(public messageService : MessageService ) { }

  getHeroes() : Observable<Hero[]> {
    this.messageService.add('HeroService: Fetch heroes');
    return of(HEROES);
  }

}
