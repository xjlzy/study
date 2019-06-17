import { Pipe, PipeTransform } from "@angular/core";
import { Product } from '../model/product.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class PaCategoryFilterPipe implements PipeTransform {
  transform(value: Product[], category: string): Product[] {
    return category ? value.filter(p => p.category === category) : value;
  }
}