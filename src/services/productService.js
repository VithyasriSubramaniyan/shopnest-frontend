import axiosInstance from "../api/axiosInstance";

export const getAllProducts = async (search = "", category = "") => {
  const response = await axiosInstance.get("/products", {
    params: {
      search,
      category,
    },
  });

  return response.data;
};

export const getProductById = async (id) => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data;
};