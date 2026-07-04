import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar />

      <div className="container py-5">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <h1 className="display-4 fw-bold">
              Smart Last Mile Delivery
            </h1>

            <p className="lead mt-4">
              Create orders, assign delivery agents automatically,
              calculate shipping charges and track deliveries in real time.
            </p>

            <Link
              to="/register"
              className="btn btn-primary btn-lg me-3"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="btn btn-outline-primary btn-lg"
            >
              Login
            </Link>

          </div>

          <div className="col-lg-6 text-center">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3097/3097183.png"
              className="img-fluid"
              style={{maxHeight:"420px"}}
            />

          </div>

        </div>

      </div>

      <div className="container pb-5">

        <div className="row g-4">

          <div className="col-md-4">

            <div className="dashboard-card p-4 text-center">

              <h1>📦</h1>

              <h4>Smart Pricing</h4>

              <p>
                Automatic volumetric and actual weight calculation.
              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="dashboard-card p-4 text-center">

              <h1>🚚</h1>

              <h4>Auto Agent Assignment</h4>

              <p>
                Automatically assigns available delivery agent.
              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="dashboard-card p-4 text-center">

              <h1>📍</h1>

              <h4>Live Tracking</h4>

              <p>
                Complete tracking timeline for every shipment.
              </p>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}