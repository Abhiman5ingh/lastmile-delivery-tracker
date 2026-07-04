import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-white shadow-sm">

      <div className="container">

        <Link to="/" className="navbar-brand logo">
          🚚 Last Mile
        </Link>

        <div>

          <Link
            to="/login"
            className="btn btn-outline-primary me-2"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="btn btn-primary"
          >
            Register
          </Link>

        </div>

      </div>

    </nav>
  );
}