// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


// function Navbar() {

//   const navigate = useNavigate();

//   const handleLogout = () => {
//   localStorage.removeItem("token");
//   navigate("/login");
// };
//   return (
//     <nav
//       style={{
//         display: "flex",
//         gap: "20px",
//         padding: "15px",
//         background: "#222",
//       }}
//     >
//       <Link style={{ color: "white" }} to="/">
//         Home
//       </Link>

//       <Link style={{ color: "white" }} to="/login">
//         Login
//       </Link>

//       <Link style={{ color: "white" }} to="/register">
//         Register
//       </Link>

//       <Link style={{ color: "white" }} to="/products">
//         Product
//       </Link>

     

//       <Link to="/products">Products</Link>

// <Link to="/profile">Profile</Link>
// <Link to="/orders">My Orders</Link>

// <button onClick={handleLogout}>Logout</button>


//     </nav>
//   );
// }

// export default Navbar;

import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        🛒 ShopEase
      </div>

      <div className="nav-links">
        <Link
          className={location.pathname === "/" ? "active" : ""}
          to="/"
        >
          Home
        </Link>

        <Link
          className={location.pathname === "/products" ? "active" : ""}
          to="/products"
        >
          Products
        </Link>

        {token && (
          <>
            <Link
              className={location.pathname === "/profile" ? "active" : ""}
              to="/profile"
            >
              Profile
            </Link>

            <Link
              className={location.pathname === "/orders" ? "active" : ""}
              to="/orders"
            >
              My Orders
            </Link>
          </>
        )}

        {!token ? (
          <>
            <Link
              className={location.pathname === "/login" ? "active" : ""}
              to="/login"
            >
              Login
            </Link>

            <Link
              className={location.pathname === "/register" ? "active" : ""}
              to="/register"
            >
              Register
            </Link>
          </>
        ) : (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;