import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import API from "../../api/axios";

export default function Tracking(){

const {id}=useParams();

const [tracking,setTracking]=useState([]);

useEffect(()=>{

API.get("/tracking/"+id)

.then((res)=>{

setTracking(res.data);

})

.catch(()=>{});

},[]);

return(

<DashboardLayout>

<h2>

Tracking Timeline

</h2>

<div className="table-card mt-4">

{

tracking.map((item,index)=>(

<div
key={index}
className="border-start border-3 ps-3 mb-4"
>

<h5>

{item.status}

</h5>

<p>

{item.remarks}

</p>

<small>

{new Date(item.timestamp)

.toLocaleString()}

</small>

</div>

))

}

</div>

</DashboardLayout>

)

}