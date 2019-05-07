import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Knobble1Component } from './knobble1/knobble1.component';
import { Knobble2Component } from './knobble2/knobble2.component';
import { Knobble3Component } from './knobble3/knobble3.component';
import { Knobble4Component } from './knobble4/knobble4.component';
import { Knobble5Component } from './knobble5/knobble5.component';
import { Knobble6Component } from './knobble6/knobble6.component';

const routes: Routes = [{
  path: 'knobble1',
  component: Knobble1Component
}, {
  path: 'knobble2',
  component: Knobble2Component
}, {
  path: 'knobble3',
  component: Knobble3Component
}, {
  path: 'knobble4',
  component: Knobble4Component
}, {
  path: 'knobble5',
  component: Knobble5Component
}, {
  path: 'knobble6',
  component: Knobble6Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
