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

  constructor(private messageService : MessageService ) { }

  getHeroes() : Observable<Hero[]> {
    this.messageService.add('HeroService: Fetch heroes');
    return of(HEROES);
  }

}
