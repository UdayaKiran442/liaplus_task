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

export async function getUserByEmailInDB(email: string) {
  try {
    return await User.findOne({ email });
  } catch (error) {
    throw error;
  }
}

  /**
   * Fetches a user by their ID from the database.
   * @param {string} userId The ID of the user to fetch.
   * @returns {Promise<import("mongoose").Document & User>} The fetched user document.
   * @throws An error if the user is not found.
   */
export async function getUserByIdInDB(userId: string) {
  try {
    return await User.findOne({ userId });
  } catch (error) {
    throw error;
  }
}