import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Project } from './entities/project.entity';
import { ProjectStatusEnum } from './enums/project-status.enum';

@Injectable()
export class ApiProjectsService {
  constructor(private router: Router, private http: HttpClient) {}

  async get(): Promise<Array<Project>> {
    return Promise.resolve([
      {
        id: 'PR49',
        name: 'ADEO CUSTOMER & COMMERCE DIGITAL PLATFORM',
        itSystem: null,
        status: ProjectStatusEnum.InProgress,
      },
      {
        id: '1?',
        name: 'Система управления транспортировками для импорта / TMS for import',
        itSystem: 'TMS',
        status: ProjectStatusEnum.Done,
      },
      {
        id: '2?',
        name: 'Построение целевой архитектуры Плана трансформации',
        itSystem: 'План трансформации',
        status: ProjectStatusEnum.Done,
      },
      {
        id: 'PR81',
        name: 'Эволюция ITSM',
        itSystem: null,
        status: ProjectStatusEnum.Cancelled,
      },
    ]);
  }
}
