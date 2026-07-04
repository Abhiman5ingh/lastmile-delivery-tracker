import DashboardLayout from "../../layouts/DashboardLayout";

export default function Dashboard() {

const user=JSON.parse(localStorage.getItem("user"));

return(

<DashboardLayout>

<h2>

Welcome, {user?.name} 👋

</h2>

<div className="row mt-4">

<div className="col-md-3">

<div className="dashboard-card p-4">

<h3>12</h3>

<p>Total Orders</p>

</div>

</div>

<div className="col-md-3">

<div className="dashboard-card p-4">

<h3>8</h3>

<p>Delivered</p>

</div>

</div>

<div className="col-md-3">

<div className="dashboard-card p-4">

<h3>2</h3>

<p>In Transit</p>

</div>

</div>

<div className="col-md-3">

<div className="dashboard-card p-4">

<h3>2</h3>

<p>Failed</p>

</div>

</div>

</div>

<div className="table-card mt-5">

<h4>

Recent Activity

</h4>

<table className="table mt-3">

<thead>

<tr>

<th>Order</th>

<th>Status</th>

<th>Charge</th>

</tr>

</thead>

<tbody>

<tr>

<td>#ORD1001</td>

<td>

<span className="status delivered">

Delivered

</span>

</td>

<td>₹340</td>

</tr>

<tr>

<td>#ORD1002</td>

<td>

<span className="status transit">

In Transit

</span>

</td>

<td>₹250</td>

</tr>

</tbody>

</table>

</div>

</DashboardLayout>

)

}