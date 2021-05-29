import { HttpParams } from '@angular/common/http';

export class GetProductsParamsDto extends HttpParams {
  search: string;
  domain: string;
}
