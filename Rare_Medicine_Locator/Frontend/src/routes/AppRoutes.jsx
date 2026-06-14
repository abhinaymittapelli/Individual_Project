import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchMedicine from "../pages/SearchMedicine";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/AdminDashboard";
import Pharmacies from "../pages/Pharmacies";
import ProtectedRoute from "./ProtectedRoute";
import AddMedicine from "../pages/AddMedicine";
import ManageMedicines from "../pages/ManageMedicines";
import EditMedicine from "../pages/EditMedicine";
import Profile from "../pages/Profile";
import AddPharmacy from "../pages/AddPharmacy";
import ManagePharmacies from "../pages/ManagePharmacies";
import ViewPharmacy from "../pages/ViewPharmacy";
import EditPharmacy from "../pages/EditPharmacy";

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
  path="/edit-medicine/:id"
  element={
    <ProtectedRoute>
      <EditMedicine />
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
  path="/add-medicine"
  element={
    <ProtectedRoute>
      <AddMedicine />
    </ProtectedRoute>
  }
/>

<Route
  path="/manage-medicines"
  element={
    <ProtectedRoute>
      <ManageMedicines />
    </ProtectedRoute>
  }
/>

<Route
  path="/view-pharmacy/:id"
  element={
    <ProtectedRoute>
      <ViewPharmacy />
    </ProtectedRoute>
  }
/>

<Route
  path="/edit-pharmacy/:id"
  element={
    <ProtectedRoute>
      <EditPharmacy />
    </ProtectedRoute>
  }
/>

<Route
  path="/add-pharmacy"
  element={
    <ProtectedRoute>
      <AddPharmacy />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/manage-pharmacies"
  element={
    <ProtectedRoute>
      <ManagePharmacies />
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