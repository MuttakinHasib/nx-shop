import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { NextFunction } from 'express';
import { IUser } from '../interfaces/user';

export const AddressSchema = new mongoose.Schema({
  house: String,
  street: String,
  city: String,
  country: String,
  state: String,
  zip: String,
});

export const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    avatar: String,
    seller: {
      type: Boolean,
      default: false,
    },
    address: AddressSchema,
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next: NextFunction) {
  try {
    const user = this as IUser;

    if (!user.isModified('password')) {
      return next();
    }

    user.password = await bcrypt.hash(user.password, 10);
    return next();
  } catch (error) {
    return next(error);
  }
});

UserSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  const user = this as IUser;

  return await bcrypt.compare(password, user.password);
};
