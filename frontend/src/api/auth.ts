import apiInstance from ".";

import {
  ISignUpAPIPayload,
  ISignInAPIPayload,
  ISignUpAPIResponse,
  ISignInAPIResponse,
} from "../types/types";

export const signUpAPI = async (data: ISignUpAPIPayload) => {
  try {
    const response = await apiInstance.post("/user/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data as ISignUpAPIResponse;
  } catch (error) {
    throw error;
  }
};

export const signInAPI = async (data: ISignInAPIPayload) => {
  try {
    const response = await apiInstance.post("/user/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data as ISignInAPIResponse;
  } catch (error) {
    throw error;
  }
};

export const getUserProfileAPI = async () => {
  try {
    const response = await apiInstance.post(
      "/user/profile",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
