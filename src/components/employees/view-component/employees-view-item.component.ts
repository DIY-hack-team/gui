import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { Employee } from '../../../api/employees/models/employee.entity';
import { ApiEmployeesService } from '../../../api/employees/api-employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-show-item',
  templateUrl: './employees-view-item.component.html',
  styleUrls: ['./employees-view-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeesViewItemComponent implements OnInit {
  public employee: Employee;
  constructor(private apiEmployees: ApiEmployeesService, private router: Router) {}

  @Input() 
  
  ngOnInit(): void {
    let ldap = this.router.url.split("/employees/")[1].split("/")[0];
    this.getEmployeeData(Number(ldap));
  }

  getEmployeeData(ldap: number) {
    this.apiEmployees.getEmployeeByLdap(ldap).then((employee: Employee) => {
      this.employee = employee;
    });
  }
}
