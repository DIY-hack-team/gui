import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Team } from './entites/team.entity';
import { TeamStatusEnum } from './enums/team-status.enum';
import { TeamTypeEnum } from './enums/team-type.enum';

@Injectable()
export class ApiTeamsService {
  constructor(private router: Router, private http: HttpClient) {}

  async get(): Promise<Array<Team>> {
    return Promise.resolve([
      {
        id: 'OS-P05',
        name: 'Preparation of the Customer Project',
        nameRus: 'Подготовка клиентского проекта',
        teamType: TeamTypeEnum.Product,
        costCenter: 823,
        status: TeamStatusEnum.Active,
        domainId: 'DM560',
      },
      {
        id: 'RI-P02',
        name: 'Import / Export Operations',
        nameRus: 'Импортно-экспортные операции',
        teamType: TeamTypeEnum.Product,
        costCenter: 896,
        status: TeamStatusEnum.Active,
        domainId: 'DM400',
      },
      {
        id: 'TC-O07',
        name: 'Infrastructure Operations',
        nameRus: 'Операционная инфраструктура',
        teamType: TeamTypeEnum.Operation,
        costCenter: 702,
        status: TeamStatusEnum.Active,
        domainId: 'DM700',
      },
    ]);
  }
}
