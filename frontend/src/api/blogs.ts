import apiInstance from ".";

import {
  IAddBlogAPIPayload,
  IAddBlogAPIResponse,
  IGetAllBlogsAPIResponse,
} from "../types/types";

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

export async function deleteBlogAPI(blogId: string) {
  try {
    const response = await apiInstance.post(
      `/blogs/delete`,
      { blogId },
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
}

export async function addBlogAPI(
  blog: IAddBlogAPIPayload
): Promise<IAddBlogAPIResponse> {
  try {
    const response = await apiInstance.post("/blogs/create", blog, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
