import { Injectable } from '@angular/core';
import { Model } from './repository.model';
import { RestDataSource } from './rest.datasource';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable()
export class ModelResolver implements Resolve<Product[]> {
  constructor(private model: Model,
    private dataSource: RestDataSource) { }
  /**
   * 解析器方法
   * @param route 正在导航的路由
   * @param state 当前的路由
   */
  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Product[]> {
    return this.model.getProducts().length === 0 ? this.dataSource.getData() : null;
  }
}