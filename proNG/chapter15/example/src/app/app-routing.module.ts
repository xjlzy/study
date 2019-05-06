import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Knobble1Component } from './knobble1/knobble1.component';
import { Knobble2Component } from './knobble2/knobble2.component';
import { Knobble3Component } from './knobble3/knobble3.component';

const routes: Routes = [{
  path: 'knobble1',
  component: Knobble1Component
},{
  path: 'knobble2',
  component: Knobble2Component
},{
  path: 'knobble3',
  component: Knobble3Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
