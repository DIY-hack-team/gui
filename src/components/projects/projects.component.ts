import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ApiProjectsService } from 'src/api/projects/api-projects.service';
import { GetProjectsParamsDto } from 'src/api/projects/models/get-projects-params.dto';
import { Project } from 'src/api/projects/models/project.entity';
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
    this.getProjects();
  }

  getProjects(params?: GetProjectsParamsDto): void {
    this.apiProjects.get(params).then((projects: Array<Project>) => {
      this.projects = projects;
    });
  }

  onSearch(params: FilterParams): void {
    this.getProjects(params as GetProjectsParamsDto);
  }
}
