import { HttpParams } from '@angular/common/http';

export class GetDomainsParamsDto extends HttpParams {
  search: string;
}
