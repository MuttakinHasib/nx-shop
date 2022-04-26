import { Document } from 'mongoose';
import { IProduct } from './product';
import { IUser } from './user';

interface ProductOrder {
  product: IProduct;
  quantity: number;
}

export interface IOrder extends Document {
  owner: IUser;
  totalPrice: number;
  products: ProductOrder[];
  createdAt: Date;
  updatedAt: Date;
}
