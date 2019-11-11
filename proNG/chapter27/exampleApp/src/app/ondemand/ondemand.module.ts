import { NgModule } from "@angular/core";
import { OndemandComponent } from './ondemand.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';

let routing: Routes = [
  {
    path: '', component: OndemandComponent, children: [
      { path: '', component: FirstComponent, outlet: 'primary' },
      { path: '', component: SecondComponent, outlet: 'left' },
      { path: '', component: SecondComponent, outlet: 'right' }
    ]
  },
  {
    path: 'swap', component: OndemandComponent, children: [
      {path: '', component: SecondComponent, outlet: 'primary'},
      { path: '', component: FirstComponent, outlet: 'left' },
      { path: '', component: FirstComponent, outlet: 'right' }
    ]
  }
]

@NgModule({
  declarations: [OndemandComponent, FirstComponent, SecondComponent],
  exports: [OndemandComponent],
  imports: [RouterModule.forChild(routing), CommonModule]
})
export class OndemandModule { }