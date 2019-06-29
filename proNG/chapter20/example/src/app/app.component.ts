import { Component } from '@angular/core';
import { VALUE_SERVICE } from './valueDisplay.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{
    provide: VALUE_SERVICE,
    useValue: 'Banana'
  }]
})
export class AppComponent {
}
