import { Injectable } from "@angular/core";
import { CanLoad, Router } from '@angular/router';
import { MessageService } from './messages/message.service';
import { Route } from '@angular/compiler/src/core';
import { Message } from './messages/message.model';

@Injectable()
export class LoadGuard implements CanLoad {
  private loaded: boolean = false;
  constructor(private message: MessageService, private router: Router) {}

  canLoad(route: Route): Promise<boolean> | boolean {
    return this.loaded || new Promise<boolean>((resolve, reject) => {
      let responses: [string, (string) => void][] = [
        ['Yes', () => {
          this.loaded = true;
          resolve(true);
        }],
        ['No', () => {
          this.loaded = false;
          resolve(false);
        }]
      ];
      this.message.reportMessage(new Message('Do you want to load the module?', false, responses));
    });
  }
}