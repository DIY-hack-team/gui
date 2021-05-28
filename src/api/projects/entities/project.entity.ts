import { ProjectStatusEnum } from '../enums/project-status.enum';

export class Project {
  id: string;
  name: string;
  itSystem: string | null;
  status: ProjectStatusEnum;
}
