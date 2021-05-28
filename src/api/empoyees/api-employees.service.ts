import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Employee } from './models/employee.entity';

@Injectable()
export class ApiEmployeesService {
  constructor(private router: Router, private http: HttpClient) {}

  async get(): Promise<Array<Employee>> {
    return Promise.resolve([
      {
        ldap: 60059749,
        userName: 'Кузьмина Наталия Петровна',
        legalEntity: 'ЛМВ',
        organisation: 'Центральный офис',
        businessRole: 'руководитель отдела корпоративных финансов',
        costCenter: 'Корпоративные финансы',
      },
      {
        ldap: 60076834,
        userName: 'Шашкин Валентин Игоревич',
        legalEntity: 'ЛМВ',
        organisation: 'Центральный офис',
        businessRole: 'бизнес-аналитик финансовой дирекции',
        costCenter: 'ПК Дочерние компании',
      },
      {
        ldap: 60094988,
        userName: 'Хорошев Андрей Владимирович',
        legalEntity: 'ЛМВ',
        organisation: 'Центральный офис',
        businessRole: 'разработчик',
        costCenter: 'ПК Импортно-экспортные операции',
      },
      {
        ldap: 60102827,
        userName: 'Перлов Степан Дмитриевич',
        legalEntity: 'ЛМВ',
        organisation: 'Центральный офис',
        businessRole: 'разработчик',
        costCenter: 'ПК Импортно-экспортные операции',
      },
    ]);
  }
}
