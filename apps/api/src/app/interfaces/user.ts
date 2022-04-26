import { Document } from 'mongoose';

export interface IAddress extends Document {
  house: string;
  street: string;
  city: string;
  country: string;
  state: string;
  zip: string;
}

export interface IUser extends Document {
  name: string;
  password: string;
  email: string;
  avatar: string;
  seller: boolean;
  address: IAddress;
  createdAt: Date;
  updatedAt: Date;
}
