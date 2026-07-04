import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import API from "../api/axios";
import toast from "react-hot-toast";

export default function Login(){

const navigate=useNavigate();

const [form,setForm]=useState({

email:"",
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

const res=await API.post("/auth/login",form);

localStorage.setItem(

"token",

res.data.token

);

localStorage.setItem(

"user",

JSON.stringify(res.data.user)

);

toast.success("Login Successful");

const role=res.data.user.role;

if(role==="customer"){

navigate("/customer/dashboard");

}

else if(role==="admin"){

navigate("/admin/dashboard");

}

else{

navigate("/agent/dashboard");

}

}catch(err){

toast.error(

err.response?.data?.message||

"Login Failed"

);

}

};

return(

<div className="container py-5">

<div className="row justify-content-center">

<div className="col-lg-5">

<div className="card shadow-lg border-0 rounded-4">

<div className="card-body p-5">

<h2 className="text-center mb-4">

Welcome Back

</h2>

<form onSubmit={submit}>

<input

className="form-control mb-3"

placeholder="Email"

type="email"

name="email"

onChange={change}

required

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

Login

</button>

</form>

<p className="text-center mt-4">

Don't have an account?

<Link to="/register">

 Register

</Link>

</p>

</div>

</div>

</div>

</div>

</div>

);

}