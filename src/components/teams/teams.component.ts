import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ApiTeamsService } from 'src/api/teams/api-teams.service';
import { GetTeamsParamsDto } from 'src/api/teams/models/get-teams-params.dto';
import { Team } from 'src/api/teams/models/team.entity';
import { FilterParams } from '../filters/model/filter-params';

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
    this.getTeams();
  }

  getTeams(params?: GetTeamsParamsDto): void {
    this.apiTeams.get(params).then((teams: Array<Team>) => {
      this.teams = teams;
    });
  }

  onSearch(params: FilterParams): void {
    this.getTeams(params as GetTeamsParamsDto);
  }
}
