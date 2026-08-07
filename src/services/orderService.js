import axiosInstance from "../api/axiosInstance";

export const placeOrder = async (orderData) => {
  const response = await axiosInstance.post(
    "/orders",
    orderData,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return response.data;
};

export const getMyOrders = async () => {
  const response = await axiosInstance.get("/orders", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data;
};