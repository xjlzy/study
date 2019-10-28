import { NgModule } from "@angular/core";
import { Model } from './repository.model';
import { StaticDataSource } from './static.datasource';
import { REST_URL, RestDataSource } from './rest.datasource';

@NgModule({
  providers: [
    Model, StaticDataSource, RestDataSource,
    { provide: REST_URL, useValue: `http://${location.hostname}:3500/products2` }]
})

export class ModelModule { }