import { useEffect,useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import API from "../../api/axios";
import toast from "react-hot-toast";

export default function RateCards(){

const [rates,setRates]=useState([]);

const [form,setForm]=useState({

orderType:"B2C",

zoneType:"Intra",

pricePerKg:0,

codCharge:0

});

useEffect(()=>{

load();

},[]);

const load=async()=>{

const res=await API.get("/ratecards");

setRates(res.data.rates);

};

const submit=async()=>{

await API.post("/ratecards",form);

toast.success("Rate Card Added");

load();

};

return(

<DashboardLayout>

<h2>

Rate Cards

</h2>

<div className="row mt-4">

<div className="col-md-4">

<select
className="form-select mb-2"
onChange={(e)=>setForm({...form,orderType:e.target.value})}
>

<option>B2B</option>

<option>B2C</option>

</select>

<select
className="form-select mb-2"
onChange={(e)=>setForm({...form,zoneType:e.target.value})}
>

<option>Intra</option>

<option>Inter</option>

</select>

<input
className="form-control mb-2"
placeholder="Price Per Kg"
onChange={(e)=>setForm({...form,pricePerKg:e.target.value})}
/>

<input
className="form-control mb-3"
placeholder="COD Charge"
onChange={(e)=>setForm({...form,codCharge:e.target.value})}
/>

<button
className="btn btn-primary"
onClick={submit}
>

Save

</button>

</div>

<div className="col-md-8">

<div className="table-card">

<table className="table">

<thead>

<tr>

<th>Order</th>

<th>Zone</th>

<th>₹/Kg</th>

<th>COD</th>

</tr>

</thead>

<tbody>

{

rates.map(rate=>(

<tr key={rate._id}>

<td>{rate.orderType}</td>

<td>{rate.zoneType}</td>

<td>{rate.pricePerKg}</td>

<td>{rate.codCharge}</td>

</tr>

))

}

</tbody>

</table>

</div>

</div>

</div>

</DashboardLayout>

);

}