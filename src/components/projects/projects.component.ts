import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ApiProjectsService } from 'src/api/projects/api-projects.service';
import { Project } from 'src/api/projects/entities/project.entity';
import { FilterParams } from '../filters/model/filter-params';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsComponent implements OnInit {
  public projects: Array<Project> = [];

  constructor(private apiProjects: ApiProjectsService) {}

  ngOnInit(): void {
    this.apiProjects.get().then((projects: Array<Project>) => {
      this.projects = projects;
    });
  }

  onSearch(params: FilterParams) {
    console.log(params);
  }
}
