import { getUserByEmail, addUserToDB } from "../repository/user/user.repository";

import { IRegisterUserSchema } from "../routes/user.routes";

export async function registerUser(payload: IRegisterUserSchema) {
  try {
    const user = await getUserByEmail(payload.email);
    if (user) {
      throw new Error("User already exists");
    }
    return await addUserToDB(payload);
  } catch (error) {
    throw error;
  }
}
