import { Document } from 'mongoose';
import { IUser } from './user';

export interface IProduct extends Document {
  owner: IUser;
  title: string;
  description: string;
  price: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
