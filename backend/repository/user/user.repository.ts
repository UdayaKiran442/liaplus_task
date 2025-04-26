import mongoose from "mongoose";

import { IRegisterUserSchema } from "../../routes/user.routes";

import { hashPassword } from "../../utils/password.utils";

import { User } from "../schema";

export async function addUserToDB(payload: IRegisterUserSchema) {
  try {
    const insertPayload = {
      userId: new mongoose.Types.ObjectId(),
      name: payload.name,
      email: payload.email,
      hashedPassword: await hashPassword(payload.password),
    };
    return await User.create(insertPayload);
  } catch (error) {
    throw error;
  }
}
