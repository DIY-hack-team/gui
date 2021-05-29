import { ProjectStatusEnum } from '../enums/project-status.enum';

export class Project {
  id: string;
  name: string;
  employee: string;
  itSystem: string | null;
  status: ProjectStatusEnum;
}
