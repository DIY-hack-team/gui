import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { GetProjectsParamsDto } from './models/get-projects-params.dto';
import { Project } from './models/project.entity';

@Injectable()
export class ApiProjectsService {
  constructor(private router: Router, private http: HttpClient) {}

  async get(params?: GetProjectsParamsDto): Promise<Array<Project>> {
    return await this.http
      .get(`${environment.basePath}/projects`, { params: params })
      .toPromise()
      .then((items: any) => {
        items = items || [];
        return items.map((item: any) => {
          return {
            id: item.product_id,
            name: item.name,
            employee: item.employee,
            itSystem: item.it_system,
            status: item.status,
          };
        });
      });
  }
}
