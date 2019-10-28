import { Injectable } from "@angular/core";
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class Model {
  private products: Product[];
  private locator = (p: Product, id: number) => p.id === id;

  constructor(private dataSource: RestDataSource) {
    this.products = new Array<Product>();

    this.dataSource.getData().subscribe(data => this.products = data);//.forEach(p => this.products.push(p));
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find(p => this.locator(p, id));
  }

  saveProduct(product: Product): void {
    if(product.id === 0 || product.id === null) {
      // product.id = this.generateID();
      // this.products.push(product);
      this.dataSource.saveProduct(product).subscribe(p => this.products.push(p));
    } else {
      this.dataSource.updateProduct(product).subscribe(pro => {
        let index = this.products.findIndex(p => this.locator(p, pro.id));
        this.products.splice(index, 1, pro);
      });
    }
  }

  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(p => {
      let index = this.products.findIndex(p => this.locator(p, id));
      if(index > -1) {
        this.products.splice(index, 1);
      }
    });
  }

  private generateID(): number {
    let candidate: number = 100;
    while(this.getProduct(candidate) != null) {
      candidate ++;
    }
    return candidate;
  }
}