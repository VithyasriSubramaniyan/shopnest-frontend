import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../services/productService";
import "./Products.css";

function Products() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [search, category]);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts(search, category);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="products-container">
      <h2>Products</h2>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
       <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="">All Categories</option>
  <option value="Mobiles">Mobiles</option>
  <option value="Laptops">Laptops</option>
  <option value="Accessories">Accessories</option>
  <option value="Electronics">Electronics</option>
  <option value="Cameras">Cameras</option>
</select>



      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <img
  src={product.image}
  alt={product.name}
  className="product-image"
  onError={(e) => {
    e.target.src = "https://placehold.co/400x300?text=No+Image";
  }}
/>
            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <p className="price">₹ {product.price}</p>

            <p className="stock">Stock : {product.stock}</p>

            <p>Category : {product.category}</p>

            <button
              onClick={() => navigate(`/products/${product._id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;