import apiInstance from ".";

export const signUpAPI = async (data: any) => {
  try {
    const response = await apiInstance.post("/user/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signInAPI = async (data: any) => {
  try {
    const response = await apiInstance.post("/user/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};