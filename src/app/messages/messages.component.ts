import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'; 

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  
  //因为这个messageService要在模板中绑定它，所以它必须是一个公共属性
  constructor(public messageService : MessageService) { }

  ngOnInit(): void {
  }

}
