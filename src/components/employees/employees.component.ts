import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ApiEmployeesService } from '../../api/employees/api-employees.service';
import { Employee } from '../../api/employees/models/employee.entity';
import { GetEmployeesParamsDto } from '../../api/employees/models/get-employees-params.dto';
import { FilterParams } from '../filters/model/filter-params';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeesComponent implements OnInit {
  public employees: Array<Employee> = [];

  constructor(private apiEmployees: ApiEmployeesService, private router: Router, private route: ActivatedRoute) {}

  currentLdap: number;

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(params?: GetEmployeesParamsDto): void {
    this.apiEmployees.get(params).then((employees: Array<Employee>) => {
      this.employees = employees;
    });
  }

  onSearch(params: FilterParams) {
    this.getEmployees(params as GetEmployeesParamsDto);
  }
}
