import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './core/form.component';
import { TableComponent } from './core/table.component';
import { NotFoundComponent } from './core/notFound.component';
import { ProductCountComponent } from './core/productCount.component';
import { CategoryCountComponent } from './core/categoryCount.component';
import { ModelResolver } from './model/model.resolver';
import { TermsGuard } from './terms.guard';
import { UnsavedGuard } from './core/unsaved.guard';
import { LoadGuard } from './load.guard';

// const childRoutes: Routes = [
//   {
//     path: '',
//     children: [
//       { path: 'products', component: ProductCountComponent },
//       { path: 'categories', component: CategoryCountComponent },
//       { path: '', component: ProductCountComponent }
//     ],
//     resolve: { model: ModelResolver },
//     canActivateChild: [TermsGuard]
//   }
// ]

// const routes: Routes = [
//   { path: 'form/:mode/:id', component: FormComponent, canDeactivate: [UnsavedGuard] },
//   { path: 'form/:mode', component: FormComponent },
//   { path: 'table', component: TableComponent },
//   { path: 'table/:category', component: TableComponent },
//   { path: '', redirectTo: 'table', pathMatch: 'full' },
//   { path: '**', component: NotFoundComponent }
// ];

const routes: Routes = [{
  path: 'ondemand',
  loadChildren: () => import('./ondemand/ondemand.module').then(mod => mod.OndemandModule)
}, {
  path: '', redirectTo: '/ondemand', pathMatch: 'full'
}];

export const routing = RouterModule.forRoot(routes);