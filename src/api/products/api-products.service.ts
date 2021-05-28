import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ProductStatusEnum } from './enums/product-status.enum';
import { Product } from './models/product.entity';

@Injectable()
export class ApiProductsService {
  constructor(private router: Router, private http: HttpClient) {}

  async get(): Promise<Array<Product>> {
    return Promise.resolve([
      {
        id: 'P0288',
        name: 'BPM',
        teamId: 'TC-O08',
        status: ProductStatusEnum.Active,
      },
      {
        id: 'P0342',
        name: 'Backend PRO',
        teamId: 'MP-P01',
        status: ProductStatusEnum.Active,
      },
      {
        id: 'P0210',
        name: 'Backup Server in Store',
        teamId: 'TC-O07',
        status: ProductStatusEnum.Active,
      },
    ]);
  }
}
