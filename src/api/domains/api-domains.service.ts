import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { DomainStatusEnum } from './enums/domain-status.enum';
import { Domain } from './models/domain.entity';

@Injectable()
export class ApiDomainsService {
  constructor(private router: Router, private http: HttpClient) {}

  async get(): Promise<Array<Domain>> {
    return Promise.resolve([
      {
        id: 'DM300',
        tag: 'EX',
        name: 'Expansion and Real Estate management',
        nameRus: 'Развитие и Управление недвижимостью',
        status: DomainStatusEnum.Active,
      },
      {
        id: 'DM400',
        tag: 'RI',
        name: 'Replenishment & Import',
        nameRus: 'Снабжение и импорт',
        status: DomainStatusEnum.Active,
      },
    ]);
  }
}
