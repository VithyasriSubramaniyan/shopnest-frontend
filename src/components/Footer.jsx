import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>🛍️ ShopNest</h2>

          <p>
            Your trusted online electronics store.
            Discover premium gadgets with secure shopping
            and fast delivery.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>My Orders</li>
            <li>Profile</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📧 support@shopnest.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Tamil Nadu, India</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 ShopNest. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;