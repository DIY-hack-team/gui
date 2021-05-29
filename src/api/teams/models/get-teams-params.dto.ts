import { HttpParams } from '@angular/common/http';

export class GetTeamsParamsDto extends HttpParams {
  search: string;
  domain: string;
}
