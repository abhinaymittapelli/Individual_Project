import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import { Link } from "react-router-dom";

function Dashboard() {

const user = JSON.parse(
localStorage.getItem("user")
);

const [stats, setStats] = useState({
totalUsers: 0,
totalPharmacies: 0,
totalMedicines: 0
});

const [ownerStats, setOwnerStats] = useState({
pharmacies: 0,
medicines: 0
});

useEffect(() => {


const fetchStats = async () => {

  try {

    const res = await api.get(
      "/admin/stats"
    );

    setStats(res.data);

  } catch (error) {

    console.log(error);

  }
};

const fetchOwnerStats = async () => {

  try {

    const pharmacyRes =
      await api.get("/pharmacy");

    const medicineRes =
      await api.get("/medicine");

    const myPharmacies =
      pharmacyRes.data.filter(
        (pharmacy) =>
          pharmacy.ownerEmail ===
          user.email
      );

    const myMedicines =
      medicineRes.data.filter(
        (medicine) =>
          medicine.pharmacyId?.ownerEmail ===
          user.email
      );

    setOwnerStats({
      pharmacies:
        myPharmacies.length,
      medicines:
        myMedicines.length
    });

  } catch (error) {

    console.log(error);

  }
};

if (user.role === "admin") {

  fetchStats();

}

if (user.role === "pharmacy") {

  fetchOwnerStats();

}


}, []);

return (
<> <Navbar />


  <div className="min-h-screen bg-slate-100 p-6">

    <div className="max-w-7xl mx-auto">

      <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-xl mb-8">

        <img
          src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg"
          alt="Hospital Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-black/50 flex items-center">

          <div className="px-10 text-white">

            <h1 className="text-5xl font-bold mb-4">
              Welcome, {user.name}
            </h1>

            <p className="text-xl max-w-2xl">

              {user.role === "admin" &&
                "Manage users, pharmacies and medicines efficiently from the admin panel."}

              {user.role === "pharmacy" &&
                "Manage your medicine inventory, stock levels and pharmacy operations."}

              {user.role === "user" &&
                "Search and locate rare medicines across registered pharmacies instantly."}

            </p>

          </div>

        </div>

      </div>

      {user.role === "admin" && (

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-slate-500 text-lg">
              Total Users
            </h3>

            <p className="text-5xl font-bold text-emerald-600 mt-4">
              {stats.totalUsers}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-slate-500 text-lg">
              Total Pharmacies
            </h3>

            <p className="text-5xl font-bold text-blue-600 mt-4">
              {stats.totalPharmacies}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-slate-500 text-lg">
              Total Medicines
            </h3>

            <p className="text-5xl font-bold text-orange-500 mt-4">
              {stats.totalMedicines}
            </p>
          </div>

        </div>

      )}

      {user.role === "pharmacy" && (

        <div className="grid md:grid-cols-2 gap-6 mb-8">

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-slate-500 text-lg">
              My Pharmacies
            </h3>

            <p className="text-5xl font-bold text-emerald-600 mt-4">
              {ownerStats.pharmacies}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-slate-500 text-lg">
              My Medicines
            </h3>

            <p className="text-5xl font-bold text-blue-600 mt-4">
              {ownerStats.medicines}
            </p>
          </div>

        </div>

      )}

      <div className="bg-white rounded-3xl shadow p-8">

        <h2 className="text-3xl font-bold mb-6">
          Quick Actions
        </h2>

        {user.role === "pharmacy" ? (

          <div className="grid md:grid-cols-2 gap-6">

            <Link
              to="/add-pharmacy"
              className="bg-emerald-600 text-white p-6 rounded-2xl text-center font-bold"
            >
              Add Pharmacy
            </Link>

            <Link
              to="/add-medicine"
              className="bg-blue-600 text-white p-6 rounded-2xl text-center font-bold"
            >
              Add Medicine
            </Link>

            <Link
              to="/manage-pharmacies"
              className="bg-orange-500 text-white p-6 rounded-2xl text-center font-bold"
            >
              Manage Pharmacies
            </Link>

            <Link
              to="/manage-medicines"
              className="bg-purple-600 text-white p-6 rounded-2xl text-center font-bold"
            >
              Manage Medicines
            </Link>

          </div>

        ) : (

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-emerald-50 p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-2">
                Search Medicines
              </h3>

              <p className="text-slate-600">
                Find rare medicines available in pharmacies.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-2">
                Manage Inventory
              </h3>

              <p className="text-slate-600">
                Add, update and remove medicines.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl">
              <h3 className="font-bold text-xl mb-2">
                Pharmacy Network
              </h3>

              <p className="text-slate-600">
                View registered pharmacies and availability.
              </p>
            </div>

          </div>

        )}

      </div>

    </div>

  </div>
</>


);
}

export default Dashboard;
