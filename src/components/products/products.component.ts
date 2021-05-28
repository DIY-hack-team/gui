import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ApiProductsService } from 'src/api/products/api-products.service';
import { Product } from 'src/api/products/models/product.entity';
import { FilterParams } from '../filters/model/filter-params';

@Component({
  selector: 'app-teams',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent implements OnInit {
  public products: Array<Product> = [];

  constructor(private apiProducts: ApiProductsService) {}

  ngOnInit(): void {
    this.apiProducts.get().then((products: Array<Product>) => {
      this.products = products;
    });
  }

  onSearch(params: FilterParams) {
    console.log(params);
  }
}
