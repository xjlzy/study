import { Injectable, ErrorHandler } from "@angular/core";
import { MessageService } from './message.service';
import { Message } from './message.model';

@Injectable()
export class MessageErrorHandler implements ErrorHandler {
  constructor(private messageService: MessageService) {}

  handleError(error) {
    let msg = error instanceof Error? error.message : error.toString();
    console.log(error);
    setTimeout(() => {
      this.messageService.reportMessage(new Message(msg, true));
    }, 0);
  }
}