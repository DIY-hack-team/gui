import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { GetProductsParamsDto } from './models/get-products-params.dto';
import { Product } from './models/product.entity';

@Injectable()
export class ApiProductsService {
  constructor(private router: Router, private http: HttpClient) {}

  async get(params?: GetProductsParamsDto): Promise<Array<Product>> {
    return await this.http
      .get(`${environment.basePath}/products`, { params: params })
      .toPromise()
      .then((items: any) => {
        return items.map((item: any) => {
          return {
            id: item.id,
            name: item.product_name,
            teamId: item.product_team_id,
            status: item.status,
          };
        });
      });
  }
}
