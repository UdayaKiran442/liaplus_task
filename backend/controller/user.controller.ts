import { addUserToDB } from "../repository/user/user.repository";

import { IRegisterUserSchema } from "../routes/user.routes";

export async function registerUser(payload: IRegisterUserSchema) {
  try {
    return await addUserToDB(payload);
  } catch (error) {
    throw error;
  }
}
