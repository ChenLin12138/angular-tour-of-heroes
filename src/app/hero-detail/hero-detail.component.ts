import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Input } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //hero需要点一个@Input属性，因为外部的HeroesComponent组件将会绑定它。
  //因为他的值是使用hero-detail的父组件传递进来的
  @Input() hero : Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
