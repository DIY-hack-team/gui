import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Employee } from '../../../api/employees/models/employee.entity';

@Component({
  selector: 'app-employee-edit-item',
  templateUrl: './employees-edit-item.component.html',
  styleUrls: ['./employees-edit-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeesEditItemComponent implements OnInit {

  ngOnInit(): void {
    
  }
}
