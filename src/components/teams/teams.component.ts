import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ApiTeamsService } from 'src/api/teams/api-teams.service';
import { Team } from 'src/api/teams/entites/team.entity';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TeamsComponent implements OnInit {
  public teams: Array<Team> = [];

  constructor(private apiTeams: ApiTeamsService) {}

  ngOnInit(): void {
    this.apiTeams.get().then((teams: Array<Team>) => {
      this.teams = teams;
    });
  }
}
