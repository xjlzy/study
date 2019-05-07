import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Knobble1Component } from './knobble1/knobble1.component';

const routes: Routes = [{
  path: 'knobble1',
  component: Knobble1Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
