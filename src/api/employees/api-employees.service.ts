import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Employee } from './models/employee.entity';
import { GetEmployeesParamsDto } from './models/get-employees-params.dto';

@Injectable()
export class ApiEmployeesService {
  constructor(private router: Router, private http: HttpClient) {}

  async get(params?: GetEmployeesParamsDto): Promise<Array<Employee>> {
    return await this.http
      .get(`${environment.basePath}/employees`, { params: params })
      .toPromise()
      .then((items: any) => {
        items = items || [];
        return items.map((item: any) => {
          return {
            ldap: item.ldap,
            userName: item.name,
            legalEntity: item.legal_entity,
            organisation: item.organisation,
            businessRole: item.business_role,
            costCenter: item.cost_center,
          };
        });
      });
  }

  async getEmployeeByLdap(ldap: number): Promise<Employee> {
    return await this.http
      .get(`${environment.basePath}/employees/${ldap}`)
      .toPromise()
      .then((item: any) => {
        return {
          ldap: item.ldap,
          userName: item.name,
          legalEntity: item.legal_entity,
          organisation: item.organisation,
          businessRole: item.business_role,
          costCenter: item.cost_center,
        };
      });
  }
}
