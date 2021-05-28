import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ApiEmployeesService } from 'src/api/empoyees/api-employees.service';
import { Employee } from 'src/api/empoyees/models/employee.entity';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeesComponent implements OnInit {
  public employees: Array<Employee> = [];

  constructor(private apiEmployees: ApiEmployeesService) {}

  ngOnInit(): void {
    this.apiEmployees.get().then((employees: Array<Employee>) => {
      this.employees = employees;
    });
  }
}
