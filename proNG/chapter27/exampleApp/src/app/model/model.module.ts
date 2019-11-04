import { NgModule } from "@angular/core";
import { Model } from './repository.model';
import { StaticDataSource } from './static.datasource';
import { REST_URL, RestDataSource } from './rest.datasource';
import { ModelResolver } from './model.resolver';

@NgModule({
  providers: [
    Model, StaticDataSource, RestDataSource, ModelResolver,
    { provide: REST_URL, useValue: `http://${location.hostname}:3500/products` }]
})

export class ModelModule { }