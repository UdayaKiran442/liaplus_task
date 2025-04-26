import {
  getUserByEmailInDB,
  addUserToDB,
} from "../repository/user/user.repository";

import { IRegisterUserSchema, ILoginUserSchema } from "../routes/user.routes";

import { comparePassword } from "../utils/password.utils";

export async function registerUser(payload: IRegisterUserSchema) {
  try {
    const user = await getUserByEmailInDB(payload.email);
    if (user) {
      throw new Error("User already exists");
    }
    return await addUserToDB(payload);
  } catch (error) {
    throw error;
  }
}

export async function loginUser(payload: ILoginUserSchema) {
  try {
    const user = await getUserByEmailInDB(payload.email);
    if (!user) {
      throw new Error("User not found");
    }
    const isPasswordValid = await comparePassword({
      password: payload.password,
      hashedPassword: user.hashedPassword,
    });
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }
    return user;
  } catch (error) {
    throw error;
  }
}
