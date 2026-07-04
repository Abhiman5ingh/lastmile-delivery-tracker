import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/customer/Dashboard";
import CreateOrder from "./pages/customer/CreateOrder";
import Orders from "./pages/customer/Orders";
import Tracking from "./pages/customer/Tracking";

import AdminDashboard from "./pages/admin/Dashboard";
import Zones from "./pages/admin/Zones";
import RateCards from "./pages/admin/RateCards";

import AgentDashboard from "./pages/agent/Dashboard";
import AgentOrders from "./pages/agent/Orders";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {

return (

<Routes>

<Route path="/" element={<Landing/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/register" element={<Register/>}/>

<Route path="/customer/dashboard"

element={

<ProtectedRoute>

<Dashboard/>

</ProtectedRoute>

}

/>

<Route path="/customer/create-order"

element={

<ProtectedRoute>

<CreateOrder/>

</ProtectedRoute>

}

/>

<Route path="/customer/orders"

element={

<ProtectedRoute>

<Orders/>

</ProtectedRoute>

}

/>

<Route path="/tracking/:id"

element={

<ProtectedRoute>

<Tracking/>

</ProtectedRoute>

}

/>

<Route path="/admin/dashboard"

element={

<ProtectedRoute>

<AdminDashboard/>

</ProtectedRoute>

}

/>

<Route path="/admin/zones"

element={

<ProtectedRoute>

<Zones/>

</ProtectedRoute>

}

/>

<Route path="/admin/ratecards"

element={

<ProtectedRoute>

<RateCards/>

</ProtectedRoute>

}

/>

<Route path="/agent/dashboard"

element={

<ProtectedRoute>

<AgentDashboard/>

</ProtectedRoute>

}

/>

<Route path="/agent/orders"

element={

<ProtectedRoute>

<AgentOrders/>

</ProtectedRoute>

}

/>

</Routes>

);

}