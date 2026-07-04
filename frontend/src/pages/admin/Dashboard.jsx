import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import API from "../../api/axios";

export default function Dashboard() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const res = await API.get("/admin/orders");
      setOrders(res.data.orders);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DashboardLayout>

      <h2 className="mb-4">
        Admin Dashboard
      </h2>

      <div className="row mb-4">

        <div className="col-md-3">
          <div className="dashboard-card p-4">
            <h2>{orders.length}</h2>
            <p>Total Orders</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-card p-4">
            <h2>
              {
                orders.filter(
                  o => o.status === "Delivered"
                ).length
              }
            </h2>
            <p>Delivered</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-card p-4">
            <h2>
              {
                orders.filter(
                  o => o.status === "Failed"
                ).length
              }
            </h2>
            <p>Failed</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-card p-4">
            <h2>
              ₹
              {
                orders.reduce(
                  (a, b) => a + b.deliveryCharge,
                  0
                )
              }
            </h2>
            <p>Revenue</p>
          </div>
        </div>

      </div>

      <div className="table-card">

        <h4 className="mb-3">
          Recent Orders
        </h4>

        <table className="table">

          <thead>

            <tr>

              <th>Customer</th>

              <th>Agent</th>

              <th>Status</th>

              <th>Charge</th>

            </tr>

          </thead>

          <tbody>

            {
              orders.map(order => (

                <tr key={order._id}>

                  <td>
                    {order.customer?.name}
                  </td>

                  <td>
                    {order.agent?.name}
                  </td>

                  <td>
                    {order.status}
                  </td>

                  <td>
                    ₹{order.deliveryCharge}
                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  );
}