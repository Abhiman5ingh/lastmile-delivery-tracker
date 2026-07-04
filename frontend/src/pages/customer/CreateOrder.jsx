import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import API from "../../api/axios";
import toast from "react-hot-toast";

export default function CreateOrder(){

const [form,setForm]=useState({

pickupAddress:"",
dropAddress:"",
length:"",
breadth:"",
height:"",
actualWeight:"",
orderType:"B2C",
paymentType:"Prepaid"

});

const change=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};

const submit=async(e)=>{

e.preventDefault();

try{

const res=await API.post("/orders",form);

toast.success(

"Order Created"

);

alert(

"Delivery Charge : ₹"+

res.data.deliveryCharge

);

}catch(err){

toast.error(

err.response?.data?.message||

"Order Failed"

);

}

};

return(

<DashboardLayout>

<h2>

Create Shipment

</h2>

<form

onSubmit={submit}

className="row g-3 mt-3"

>

<div className="col-md-6">

<input

className="form-control"

placeholder="Pickup Address"

name="pickupAddress"

onChange={change}

required

/>

</div>

<div className="col-md-6">

<input

className="form-control"

placeholder="Drop Address"

name="dropAddress"

onChange={change}

required

/>

</div>

<div className="col-md-3">

<input

className="form-control"

placeholder="Length"

name="length"

type="number"

onChange={change}

required

/>

</div>

<div className="col-md-3">

<input

className="form-control"

placeholder="Breadth"

name="breadth"

type="number"

onChange={change}

required

/>

</div>

<div className="col-md-3">

<input

className="form-control"

placeholder="Height"

name="height"

type="number"

onChange={change}

required

/>

</div>

<div className="col-md-3">

<input

className="form-control"

placeholder="Weight"

name="actualWeight"

type="number"

onChange={change}

required

/>

</div>

<div className="col-md-6">

<select

name="orderType"

className="form-select"

onChange={change}

>

<option>B2B</option>

<option>B2C</option>

</select>

</div>

<div className="col-md-6">

<select

name="paymentType"

className="form-select"

onChange={change}

>

<option>Prepaid</option>

<option>COD</option>

</select>

</div>

<div className="col-md-12">

<button

className="btn btn-primary"

>

Create Order

</button>

</div>

</form>

</DashboardLayout>

)

}