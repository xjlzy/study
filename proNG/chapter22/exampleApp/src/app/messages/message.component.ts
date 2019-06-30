import { Component } from "@angular/core";
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
  selector: 'paMessages',
  moduleId: module.id,
  templateUrl: 'message.component.html'
})

export class MessageComponent {
  lastMessage: Message;
  constructor(private messageService: MessageService) {
    messageService.registerMessageHandler(m => this.lastMessage = m);
  }
}