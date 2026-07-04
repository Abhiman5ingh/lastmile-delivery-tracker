import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../api/axios";

export default function Register(){

const navigate=useNavigate();

const [form,setForm]=useState({

name:"",
email:"",
phone:"",
password:""

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

await API.post("/auth/register",{

...form,

role:"customer"

});

toast.success("Registered Successfully");

navigate("/login");

}catch(err){

toast.error(

err.response?.data?.message||

"Registration Failed"

);

}

};

return(

<div className="container py-5">

<div className="row justify-content-center">

<div className="col-lg-5">

<div className="card shadow-lg border-0 rounded-4">

<div className="card-body p-5">

<h2 className="mb-4 text-center">

Create Account

</h2>

<form onSubmit={submit}>

<input

className="form-control mb-3"

placeholder="Full Name"

name="name"

onChange={change}

required

/>

<input

className="form-control mb-3"

placeholder="Email"

type="email"

name="email"

onChange={change}

required

/>

<input

className="form-control mb-3"

placeholder="Phone"

name="phone"

onChange={change}

/>

<input

className="form-control mb-4"

placeholder="Password"

type="password"

name="password"

onChange={change}

required

/>

<button className="btn btn-primary w-100">

Register

</button>

</form>

<p className="text-center mt-4">

Already have an account?

<Link to="/login">

 Login

</Link>

</p>

</div>

</div>

</div>

</div>

</div>

);

}