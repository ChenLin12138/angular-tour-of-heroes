import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

//这个类似Spring中的@Component声明
@Injectable({
  providedIn: 'root',
})
export class HeroService {

  deleteHero(hero : Hero | number ): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }
  
  addHero(hero: Hero) : Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero : Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
  
  httpOptions = { headers : new HttpHeaders({'Content-Type' : 'application/json'})};
  
  updateHero(hero: Hero) : Observable<any>{
    return this.http.put(this.heroesUrl, hero, this.httpOptions)
    .pipe(tap(_=>this.log(`updated hero id=${hero.id}`)),
    catchError(this.handleError<any>('updateHero')));
  }

  
  
  //url for web api
  private heroesUrl = 'api/heroes';

  //注入消息服务
  //以公共属性注入,因为我们会在模板中绑定它
  constructor(public messageService : MessageService, private http : HttpClient ) { }


  getHero(id: number) : Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(tap(_=>this.log(`fetched hero id = ${id}`)),
    catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  
  getHeroes() : Observable<Hero[]> {
    this.messageService.add('HeroService: Fetch heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(tap(_=> this.log('fetched heroes')),
    catchError(this.handleError<Hero[]>('getHeroes',[])));
  }

  handleError<T>(operation = 'operation', result ? : T) {
    return (error : any) : Observable<T> =>{
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  private log(message : string){
    this.messageService.add(`HeroService: ${message}`);
  }

}
