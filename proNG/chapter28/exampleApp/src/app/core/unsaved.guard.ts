import { Injectable } from "@angular/core";
import { CanDeactivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MessageService } from '../messages/message.service';
import { FormComponent } from './form.component';
import { Observable, Subject } from 'rxjs';
import { Message } from '../messages/message.model';

@Injectable()
export class UnsavedGuard implements CanDeactivate<FormComponent> {

  constructor(private message: MessageService, private router: Router) { }

  /**
   * 
   * @param component 将要失活的组件
   * @param currentRoute 
   * @param currentState 
   * @param nextState 
   */
  canDeactivate(
    component: FormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | Observable<boolean> {
      console.log(currentRoute);
      console.log(currentState);
      console.log(nextState);
    if (component.editing) {
      if (['name', 'category', 'price'].some(prop => component.product[prop] !== component.originalProduct[prop])) {
        let subject = new Subject<boolean>();

        let respones: [[string, (string) => void]] = [
          ['Yes', () => {
            subject.next(true);
            subject.complete();
          }],
          ['No', () => {
            subject.next(false);
            subject.complete();
          }]
        ];

        this.message.reportMessage(new Message('Discard Changes?', true, respones));
        return subject;
      }
    }
    return true;
  }
}