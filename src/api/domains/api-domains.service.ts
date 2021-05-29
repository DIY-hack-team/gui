import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Domain } from './models/domain.entity';
import { GetDomainsParamsDto } from './models/get-domains-params.dto';

@Injectable()
export class ApiDomainsService {
  constructor(private router: Router, private http: HttpClient) {}

  async get(params?: GetDomainsParamsDto): Promise<Array<Domain>> {
    return await this.http
      .get(`${environment.basePath}/domains`, { params: params })
      .toPromise()
      .then((items: any) => {
        return items.map((item: any) => {
          return {
            id: item.domain_id,
            tag: item.domain_tag,
            name: item.domain_name,
            nameRus: item.domain_name_rus,
            status: item.status,
          };
        });
      });
  }
}
