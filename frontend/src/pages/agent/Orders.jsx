import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import API from "../../api/axios";
import toast from "react-hot-toast";

export default function Orders() {

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

  const updateStatus = async (id, status) => {

    try {

      await API.put(

        `/agent/orders/${id}/status`,

        {

          status,

        }

      );

      toast.success("Status Updated");

      loadOrders();

    } catch {

      toast.error("Failed");

    }

  };

  return (

    <DashboardLayout>

      <h2>

        Assigned Orders

      </h2>

      <div className="table-card mt-4">

        <table className="table">

          <thead>

            <tr>

              <th>Customer</th>

              <th>Pickup</th>

              <th>Drop</th>

              <th>Status</th>

              <th>Action</th>

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

                    {order.pickupAddress}

                  </td>

                  <td>

                    {order.dropAddress}

                  </td>

                  <td>

                    {order.status}

                  </td>

                  <td>

                    <select

                      className="form-select"

                      value={order.status}

                      onChange={(e) =>

                        updateStatus(

                          order._id,

                          e.target.value

                        )

                      }

                    >

                      <option>

                        Picked Up

                      </option>

                      <option>

                        In Transit

                      </option>

                      <option>

                        Out For Delivery

                      </option>

                      <option>

                        Delivered

                      </option>

                      <option>

                        Failed

                      </option>

                    </select>

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