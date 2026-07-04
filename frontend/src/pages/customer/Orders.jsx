import DashboardLayout from "../../layouts/DashboardLayout";

export default function Orders(){

return(

<DashboardLayout>

<h2>

My Orders

</h2>

<div className="table-card mt-4">

<table className="table">

<thead>

<tr>

<th>Order</th>

<th>Status</th>

<th>Charge</th>

<th>Tracking</th>

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

<td>

<button className="btn btn-primary btn-sm">

View

</button>

</td>

</tr>

<tr>

<td>#ORD1002</td>

<td>

<span className="status transit">

Transit

</span>

</td>

<td>₹210</td>

<td>

<button className="btn btn-primary btn-sm">

View

</button>

</td>

</tr>

</tbody>

</table>

</div>

</DashboardLayout>

)

}