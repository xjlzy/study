import { Component } from "@angular/core";
import { Message } from './message.model';
import { MessageService } from './message.service';
import { Router, NavigationEnd, NavigationCancel } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'paMessages',
  moduleId: module.id,
  templateUrl: 'message.component.html'
})

export class MessageComponent {
  lastMessage: Message;
  constructor(private messageService: MessageService, private router: Router) {
    messageService.message.subscribe(m => this.lastMessage = m);

    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd || e instanceof NavigationCancel)
    ).subscribe(e => { this.lastMessage = null; });
  }
}