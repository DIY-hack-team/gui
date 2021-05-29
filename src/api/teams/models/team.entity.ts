import { TeamTypeEnum } from '../enums/team-type.enum';
import { TeamStatusEnum } from '../enums/team-status.enum';

export class Team {
  id: string;
  name: string;
  nameRus: string | null;
  teamType: TeamTypeEnum;
  costCenter: number;
  status: TeamStatusEnum;
  domainId: string;
}
