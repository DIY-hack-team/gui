import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from './teams.service';
import { TeamModel } from './team-model';

@Component({
  selector: 'app-team-form',
  templateUrl: './teams-form.component.html',
  styleUrls: ['./teams-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TeamsFormComponent implements OnInit {
  public model: TeamModel = {
    name: '',
    description: '',
  };

  constructor(private router: Router, public teamsService: TeamsService) {}

  ngOnInit(): void {}

  addTeam(): void {
    this.teamsService.addTeam(this.model).then(() => {
      this.router.navigateByUrl('/teams');
    });
  }
}
