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

      const res = await API.get("/agent/orders");

      setOrders(res.data.orders);

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <DashboardLayout>

      <h2 className="mb-4">

        Agent Dashboard

      </h2>

      <div className="row">

        <div className="col-md-4">

          <div className="dashboard-card p-4">

            <h2>{orders.length}</h2>

            <p>Assigned Orders</p>

          </div>

        </div>

        <div className="col-md-4">

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

        <div className="col-md-4">

          <div className="dashboard-card p-4">

            <h2>

              {

                orders.filter(

                  o => o.status === "In Transit"

                ).length

              }

            </h2>

            <p>In Transit</p>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );

}