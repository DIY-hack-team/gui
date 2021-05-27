import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TeamsService } from './teams.service';
import { TeamModel } from './team-model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TeamsComponent implements OnInit {
  public teams: Array<TeamModel> = [];

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teamsService.getTeams().then((teams: Array<TeamModel>) => {
      this.teams = teams;
    });
  }
}
