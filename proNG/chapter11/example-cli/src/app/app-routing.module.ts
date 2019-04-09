import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Chapter13Component } from './chapter13/chapter13.component';
import { Chapter12Component } from './chapter12/chapter12.component';

const routes: Routes = [{
  path: 'chapter13',
  component: Chapter13Component
},{
  path: 'chapter12',
  component: Chapter12Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
