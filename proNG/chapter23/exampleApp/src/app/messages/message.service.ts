import { Injectable } from "@angular/core";
import { Message } from './message.model';

@Injectable()
export class MessageService {
  private handler: (m: Message) => void;
  reportMessage(msg: Message): void {
    if(this.handler != null) {
      this.handler(msg);
    }
  }

  registerMessageHandler(handler: (m: Message) => void): void {
    this.handler = handler;
  }
}