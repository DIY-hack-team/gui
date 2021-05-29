import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable()
export class AppbarRoutesService {
  public routes = [
    {
      path: 'employees',
      name: 'Сотрудники',
      description:
        'На владке можно найти сотрудники. Поисковая строка ищет по ldap или по имени с подстановкой. В детальном окне пользователя можно узнать к каким командам, проектам, продуктам, доменам он находится.',
    },
    {
      name: 'Команды',
      path: 'teams',
      description:
        'На владке можно найти команду. Поисковая строка ищет по id или по имени с подстановкой. В детальном окне команды можно узнать к каким проектам, продуктам, доменам он находится. В нём можно узнать какие сотрудники входят в команду.',
    },
    {
      name: 'Проекты',
      path: 'projects',
      description:
        'На владке можно найти проект. Поисковая строка ищет по id или по имени с подстановкой. В детальном окне проекта можно узнать к каким продуктам, доменам он находится. В нём можно узнать какие сотрудники, команды входят в проект.',
    },
    {
      name: 'Продукты',
      path: 'products',
      description:
        'На владке можно найти продукт. Поисковая строка ищет по id или по имени с подстановкой. В детальном окне продукта можно узнать к каким доменам он находится. В нём можно узнать какие сотрудники, команды, проекты входят в продукт.',
    },
    {
      name: 'Домены',
      path: 'domains',
      description:
        'На владке можно найти домен. Поисковая строка ищет по id или по имени с подстановкой. В детальном окне можно узнать какие сотрудники, команды, проекты, продукты входят в домен.',
    },
  ];

  constructor(private location: Location) {}

  public setPath(path: string): string | null {
    return path === this.location.path() ? null : path;
  }

  public isActive(path: string): boolean {
    return path === this.location.path();
  }
}