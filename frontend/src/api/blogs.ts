import apiInstance from ".";

import { IGetAllBlogsAPIResponse } from "../types/types";

export async function getBlogsAPI() {
  try {
    const response = await apiInstance.get("/blogs/all", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data as IGetAllBlogsAPIResponse;
  } catch (error) {
    throw error;
  }
}
