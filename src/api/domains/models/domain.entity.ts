import { DomainStatusEnum } from '../enums/domain-status.enum';

export class Domain {
  id: string;
  tag: string;
  name: string;
  nameRus: string;
  status: DomainStatusEnum;
}
