import { ProductStatusEnum } from '../enums/product-status.enum';

export class Product {
  id: string;
  name: string;
  teamId: string;
  status: ProductStatusEnum;
}
