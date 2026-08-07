import axiosInstance from "../api/axiosInstance";

export const getProfile = async () => {
  const response = await axiosInstance.get("/user/profile", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const updateProfile = async (userData) => {
  const response = await axiosInstance.put("/user/profile", userData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data;
};