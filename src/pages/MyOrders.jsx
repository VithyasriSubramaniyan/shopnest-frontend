import { useEffect, useState } from "react";
import { getMyOrders } from "../services/orderService";
import "./MyOrders.css";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getMyOrders();
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="orders-container">
      <h2 className="orders-title">📦 My Orders</h2>

      {orders.length === 0 ? (
        <div className="empty-orders">
          <h3>No Orders Found</h3>
          <p>You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className="orders-grid">
          {orders.map((order) => (
            <div className="order-card" key={order._id}>

              <div className="order-header">
                <span>Order ID</span>
                <p>{order._id}</p>
              </div>

              <div className="order-info">
                <p>
                  <strong>Total Amount</strong>
                </p>
                <h3>₹ {order.totalAmount}</h3>
              </div>

              <div className="order-status">
                <span>Status</span>

                <div
                  className={`status ${
                    order.status === "Delivered"
                      ? "delivered"
                      : order.status === "Shipped"
                      ? "shipped"
                      : "pending"
                  }`}
                >
                  {order.status}
                </div>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyOrders;