# 🚚 Last Mile Delivery Tracker

![Status](https://img.shields.io/badge/status-completed-brightgreen)
![Backend](https://img.shields.io/badge/backend-Node.js-green)
![Frontend](https://img.shields.io/badge/frontend-React-blue)
![Database](https://img.shields.io/badge/database-MongoDB-darkgreen)

A full-stack logistics and delivery management system that automates **order creation, dynamic pricing, agent assignment, and real-time tracking** with role-based dashboards for **Customer, Admin, and Delivery Agent**.

---

## 🌐 Live Demo

- 🖥 Frontend: https://lastmile-delivery-tracker-six.vercel.app/
- ⚙️ Backend API: https://lastmile-delivery-tracker-3vcn.onrender.com

---

## 👤 Demo Credentials

### Customer
Email: 2k23.csaiml2311553@gmail.com  
Password: 123456  

### Admin
Email: admin@gmail.com  
Password: 123456  

### Agent
Email: agent@gmail.com  
Password: 123456  

---

## 🎯 Features

### 🔐 Authentication System
- JWT-based login & registration
- Role-based access (Customer / Admin / Agent)
- Protected routes

---

### 📦 Order Management
- Create delivery orders
- Pickup & drop address input
- Package dimensions (L × B × H)
- Live price calculation before order confirmation
- Full order lifecycle tracking

---

### 💰 Smart Pricing Engine
- Zone-based pricing (Intra / Inter)
- Dynamic Rate Cards (admin controlled)
- Volumetric weight:
  Volumetric Weight = (L × B × H) / 5000
- Chargeable Weight = max(actual, volumetric)
- COD surcharge support

---

### 📍 Zone Management (Admin)
- Create zones
- Assign areas to zones
- Used for pricing & routing

---

### 🚚 Agent Assignment
- Auto assign available agents
- Prevent double assignment
- Manual override support

---

### 📊 Order Tracking
Created → Assigned → Picked Up → In Transit → Out For Delivery → Delivered / Failed

- Full tracking history
- Timestamp + actor logs

---

### 🔁 Reschedule System
- Handle failed deliveries
- Reschedule orders
- Reassign agents

---

### 📧 Notifications
- Email notifications (optional / disabled in demo)
- Triggered on order creation & status updates

---

## 🧠 Core Logic

### Weight Calculation
Volumetric Weight = (L × B × H) / 5000  
Chargeable Weight = max(actual, volumetric)

---

### Pricing Formula
Total Charge = (Chargeable Weight × Rate Per KG) + COD Charge

---

## 🏗 Architecture

Frontend (React + Bootstrap)
        ↓
Backend (Node.js + Express)
        ↓
MongoDB Database

---

## 📸 Screenshots

Add images in `/assets` folder:

- Landing Page → ./assets/landing.png  
- Login Page → ./assets/login.png  
- Create Order → ./assets/create-order.png  
- Admin Dashboard → ./assets/admin.png  
- Agent Dashboard → ./assets/agent.png  
- Tracking Page → ./assets/tracking.png  

---

## 🔌 API Endpoints

### Auth
- POST /api/auth/register  
- POST /api/auth/login  

### Orders
- POST /api/orders  

### Zones
- POST /api/zones  
- GET /api/zones  

### Rate Cards
- POST /api/ratecards  
- GET /api/ratecards  

### Agent
- GET /api/agent/orders  
- PUT /api/agent/orders/:orderId/status  
- PUT /api/agent/orders/:orderId/reschedule  

### Tracking
- GET /api/tracking/:orderId  

---

## 🧱 Tech Stack

Frontend:
- React (Vite)
- Bootstrap 5
- React Router
- Axios
- React Hook Form
- React Hot Toast

Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt.js

---

## 🚀 Deployment

- Frontend: Vercel  
- Backend: Render  
- Database: MongoDB Atlas  

---

## 🚀 Future Improvements

- Real-time GPS tracking
- AI route optimization
- Admin analytics dashboard
- Mobile app (React Native)
- Push notifications
- Redis caching

---

## ⚠️ Notes

- `.env` excluded for security
- Email service optional
- Render backend may take a few seconds to wake up

---

## 👨‍💻 Author

Full-stack logistics system built for assignment submission.

---

## 🏁 Status

✔ Completed  
✔ Fully Functional  
✔ Deployed  
✔ Ready for Evaluation
