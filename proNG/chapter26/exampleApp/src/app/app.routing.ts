import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './core/form.component';
import { TableComponent } from './core/table.component';
import { NotFoundComponent } from './core/notFound.component';

const routes: Routes = [
  // {path: 'form/edit', component: FormComponent},
  // {path: 'form/create', component: FormComponent},
  { path: 'form/:mode/:id', component: FormComponent },
  { path: 'form/:mode', component: FormComponent },
  { path: 'does', redirectTo: '/form/create', pathMatch: 'prefix' },
  { path: 'table', component: TableComponent },
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

export const routing = RouterModule.forRoot(routes);