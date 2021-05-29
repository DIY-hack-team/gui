import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';
import { Employee } from '../../../api/employees/models/employee.entity';

@Component({
  selector: 'app-employee-show-item',
  templateUrl: './employees-view-item.component.html',
  styleUrls: ['./employees-view-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeesViewItemComponent implements OnInit {

  @Input() 
  
  ngOnInit(): void {
    
  }

  
}
