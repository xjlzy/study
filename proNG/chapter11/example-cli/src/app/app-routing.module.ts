import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Chapter12Component } from './chapter12/chapter12.component';
import { Chapter11Component } from './chapter11/chapter11.component';

const routes: Routes = [{
  path: 'chapter12',
  component: Chapter12Component
},{
  path: 'chapter11',
  component: Chapter11Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
