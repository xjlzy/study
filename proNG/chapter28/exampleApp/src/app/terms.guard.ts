import { Injectable } from "@angular/core";
import { MessageService } from './messages/message.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Message } from './messages/message.model';

@Injectable()
export class TermsGuard implements CanActivate, CanActivateChild {
  constructor(private message: MessageService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    if (route.params['mode'] === 'create') {
      return new Promise<boolean>((resolve, reject) => {
        let responses: [string, (string) => void][] = [
          ["Yes", () => { resolve(true); }],
          ['No', () => {
            // 用来避免点击取消后Angular不允许再次激活路由
            // this.router.navigateByUrl(this.router.url);
            resolve(false);
          }]
        ];
        this.message.reportMessage(new Message('Do you accept the terms & conditions?', false, responses));
      });
    } else {
      return true;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    if (route.url.length > 0 && route.url[route.url.length - 1].path === 'categories') {
      return new Promise<boolean>((resolve, reject) => {
        let responses: [string, (string) => void][] = [
          ["Yes", () => { resolve(true); }],
          ['No', () => {
            // this.router.navigateByUrl(this.router.url);
            resolve(false);
          }]
        ];
        this.message.reportMessage(new Message('Do you want to see the categories component?', false, responses));
      });
    } else {
      return true;
    }
  }
}