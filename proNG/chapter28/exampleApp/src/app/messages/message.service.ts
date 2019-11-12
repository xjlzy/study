import { Injectable } from "@angular/core";
import { Message } from './message.model';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class MessageService {
  private subject = new Subject<Message>();
  reportMessage(msg: Message): void {
    this.subject.next(msg);
  }

  get message(): Observable<Message> {
    return this.subject;
  }
}