import { Injectable } from '@angular/core';
import { TeamModel } from './team-model';

@Injectable()
export class TeamsService {
  getTeams(): Promise<Array<TeamModel>> {
    return Promise.resolve([
      { name: 'VED', description: 'Our team' },
      { name: 'Finance', description: 'Our team' },
    ]);
  }
  addTeam(model: TeamModel): Promise<void> {
    console.log(model);
    return Promise.resolve();
  }
}
