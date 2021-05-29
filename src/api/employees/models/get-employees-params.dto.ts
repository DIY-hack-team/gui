import { HttpParams } from '@angular/common/http';

export class GetEmployeesParamsDto extends HttpParams {
  search: string;
  domain: string;
}
