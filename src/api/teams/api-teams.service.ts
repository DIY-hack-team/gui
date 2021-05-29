import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { GetTeamsParamsDto } from './models/get-teams-params.dto';
import { Team } from './models/team.entity';

@Injectable()
export class ApiTeamsService {
  constructor(private router: Router, private http: HttpClient) {}

  async get(params?: GetTeamsParamsDto): Promise<Array<Team>> {
    return await this.http
      .get(`${environment.basePath}/teams`, { params: params })
      .toPromise()
      .then((items: any) => {
        items = items || [];
        return items.map((item: any) => {
          return {
            id: item.product_team_id,
            name: item.product_team_name,
            nameRus: item.product_team_rus,
            teamType: item.product_team_type,
            costCenter: item.cost_center,
            status: item.status,
            domainId: item.domain_id,
          };
        });
      });
  }
}
