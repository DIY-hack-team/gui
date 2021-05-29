import { HttpParams } from '@angular/common/http';

export class GetProjectsParamsDto extends HttpParams {
  search: string;
  domain: string;
}
