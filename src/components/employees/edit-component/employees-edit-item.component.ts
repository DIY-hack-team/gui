import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { Employee } from '../../../api/employees/models/employee.entity';
import { Product } from '../../../api/products/models/product.entity';
import { Project } from '../../../api/projects/models/project.entity';
import { Domain } from '../../../api/domains/models/domain.entity';
import { Team } from '../../../api/teams/models/team.entity';
import { ApiEmployeesService } from '../../../api/employees/api-employees.service';
import { ApiProductsService } from '../../../api/products/api-products.service';
import { ApiProjectsService } from '../../../api/projects/api-projects.service';
import { ApiDomainsService } from '../../../api/domains/api-domains.service';
import { ApiTeamsService } from '../../../api/teams/api-teams.service';
import { Router } from '@angular/router';
import { GetTeamsParamsDto } from 'src/api/teams/models/get-teams-params.dto';
import { GetProjectsParamsDto } from 'src/api/projects/models/get-projects-params.dto';
import { GetProductsParamsDto } from 'src/api/products/models/get-products-params.dto';
import { GetDomainsParamsDto } from 'src/api/domains/models/get-domains-params.dto';
import { FilterParams } from 'src/components/filters/model/filter-params';
@Component({
  selector: 'app-employee-edit-item',
  templateUrl: './employees-edit-item.component.html',
  styleUrls: ['./employees-edit-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeesEditItemComponent implements OnInit {
  public employee: any = {};
  public teams: Array<Team> = [];
  public products: Array<Product> = [];
  public projects: Array<Project> = [];
  public domains: Array<Domain> = [];

  constructor(
    private apiEmployees: ApiEmployeesService,
    private router: Router,
    private apiTeams: ApiTeamsService,
    private apiProducts: ApiProductsService,
    private apiProjects: ApiProjectsService,
    private apiDomains: ApiDomainsService
  ) {}

  @Input()
  ngOnInit(): void {
    let ldap = this.router.url.split('/employees/')[1].split('/')[0];
    this.getEmployeeData(Number(ldap));
    this.getTeams();
    this.getDomains();
    this.getProducts();
    this.getProjects();
  }

  bindTeam(team: Team) {}
  bindProduct(team: Product) {}
  bindProject(team: Project) {}
  bindDomain(team: Domain) {}

  getEmployeeData(ldap: number) {
    this.apiEmployees.getEmployeeByLdap(ldap).then((employee: Employee) => {
      this.employee = employee;
    });
  }

  getTeams(params?: GetTeamsParamsDto): void {
    this.apiTeams.get(params).then((teams: Array<Team>) => {
      this.teams = teams;
    });
  }

  getProjects(params?: GetProjectsParamsDto): void {
    this.apiProjects.get(params).then((projects: Array<Project>) => {
      this.projects = projects;
    });
  }

  getProducts(params?: GetProductsParamsDto): void {
    this.apiProducts.get(params).then((products: Array<Product>) => {
      this.products = products;
    });
  }

  getDomains(params?: GetDomainsParamsDto): void {
    this.apiDomains.get(params).then((domains: Array<Domain>) => {
      this.domains = domains;
    });
  }

  onSearch(params?: FilterParams) {
    this.getTeams(params as GetTeamsParamsDto);
    this.getDomains(params as GetDomainsParamsDto);
    this.getProducts(params as GetProductsParamsDto);
    this.getProjects(params as GetProjectsParamsDto);
  }
}
