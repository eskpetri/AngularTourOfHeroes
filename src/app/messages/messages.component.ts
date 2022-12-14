import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
//Angular injects the singleton MessageService into that property when it creates the MessagesComponent
//The messageService property must be public because you're going to bind to it in the template.
//Angular only binds to public component properties.
  constructor(public messageService: MessageService) { }  //Last time to type dependency injection

  ngOnInit(): void {
  }

}
