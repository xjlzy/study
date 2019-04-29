import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Chapter13Component } from './chapter13/chapter13.component';
import { Chapter12Component } from './chapter12/chapter12.component';
import { Chapter14Component } from './chapter14/chapter14.component';

const routes: Routes = [{
  path: 'chapter13',
  component: Chapter13Component
},{
  path: 'chapter12',
  component: Chapter12Component
},{
  path: 'chapter14',
  component: Chapter14Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
