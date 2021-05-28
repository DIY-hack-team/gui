import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Team } from 'src/api/teams/entites/team.entity';

@Component({
  selector: 'app-teams-item',
  templateUrl: './teams-item.component.html',
  styleUrls: ['./teams-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TeamsItemComponent {
  @Input()
  public item: Team;
}
