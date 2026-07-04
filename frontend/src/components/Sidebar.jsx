import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="sidebar text-white d-flex flex-column justify-content-between">

      <div>

        <h3 className="text-center py-4">
          🚚 Delivery
        </h3>

        {/* Customer */}

        {user?.role === "customer" && (
          <>
            <Link to="/customer/dashboard">
              Dashboard
            </Link>

            <Link to="/customer/create-order">
              Create Order
            </Link>

            <Link to="/customer/orders">
              My Orders
            </Link>
          </>
        )}

        {/* Admin */}

        {user?.role === "admin" && (
          <>
            <Link to="/admin/dashboard">
              Dashboard
            </Link>

            <Link to="/admin/zones">
              Zones
            </Link>

            <Link to="/admin/ratecards">
              Rate Cards
            </Link>
          </>
        )}

        {/* Agent */}

        {user?.role === "agent" && (
          <>
            <Link to="/agent/dashboard">
              Dashboard
            </Link>

            <Link to="/agent/orders">
              Assigned Orders
            </Link>
          </>
        )}

      </div>

      <div className="p-3">

        <hr className="text-white" />

        <div className="text-center mb-3">

          <h6 className="mb-1">{user?.name}</h6>

          <small className="text-light">
            {user?.role?.toUpperCase()}
          </small>

        </div>

        <button
          className="btn btn-danger w-100"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}