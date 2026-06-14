import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchMedicine from "../pages/SearchMedicine";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/AdminDashboard";
import Pharmacies from "../pages/Pharmacies";
import ProtectedRoute from "./ProtectedRoute";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
  path="/search"
  element={
    <ProtectedRoute>
      <SearchMedicine />
    </ProtectedRoute>
  }
/>

     <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
      <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>
      <Route path="/pharmacies" element={<Pharmacies />} />
    </Routes>
  );
}

export default AppRoutes;