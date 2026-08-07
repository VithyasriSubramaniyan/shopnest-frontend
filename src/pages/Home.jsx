import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <span className="tag">✨ Modern E-Commerce Platform</span>

          <h1>Shop Smarter.<br />Live Better.</h1>

          <p>
            Discover premium electronics including Mobiles, Laptops,
            Smart TVs and Accessories at the best prices with secure
            shopping and fast delivery.
          </p>

          <div className="hero-buttons">
            <Link to="/products">
              <button className="primary-btn">Shop Now</button>
            </Link>

            <Link to="/orders">
              <button className="secondary-btn">My Orders</button>
            </Link>
          </div>

        </div>
      </section>

      {/* Features */}

      <section className="features">

        <div className="feature-card">
          <div className="icon">🚚</div>
          <h2>Fast Delivery</h2>
          <p>Quick and safe delivery to your doorstep.</p>
        </div>

        <div className="feature-card">
          <div className="icon">💳</div>
          <h2>Secure Payment</h2>
          <p>100% secure payment with trusted gateways.</p>
        </div>

        <div className="feature-card">
          <div className="icon">⭐</div>
          <h2>Premium Quality</h2>
          <p>Only genuine branded electronic products.</p>
        </div>

        <div className="feature-card">
          <div className="icon">📞</div>
          <h2>24/7 Support</h2>
          <p>Friendly customer support whenever you need.</p>
        </div>

      </section>

      {/* Categories */}

      <section className="categories">

        <h2>Featured Categories</h2>

        <div className="category-grid">

          <div className="category-card">📱<h3>Mobiles</h3></div>

          <div className="category-card">💻<h3>Laptops</h3></div>

          <div className="category-card">📺<h3>Smart TVs</h3></div>

          <div className="category-card">🎧<h3>Headphones</h3></div>

        </div>

      </section>

    </div>
  );
}

export default Home;