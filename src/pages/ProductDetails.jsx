import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../services/productService";
import { placeOrder } from "../services/orderService";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const data = await getProductById(id);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return <h2 className="loading">Loading...</h2>;
  }

  const handleBuyNow = async () => {
    try {
      const order = {
        products: [
          {
            product: product._id,
            quantity: 1,
          },
        ],
        totalAmount: product.price,
      };

      const data = await placeOrder(order);

      alert(data.message);

      navigate("/orders");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Order Failed");
    }
  };

  return (
    <div className="details-page">

      <div className="details-card">

        <div className="product-image">
          📦
        </div>

        <div className="details-content">

          <h2>{product.name}</h2>

          <p>{product.description}</p>

          <h3>₹ {product.price}</h3>

          <div className="info">
            <p>
              <strong>Category :</strong> {product.category}
            </p>

            <p>
              <strong>Stock :</strong> {product.stock}
            </p>
          </div>

          <button onClick={handleBuyNow}>
            Buy Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;