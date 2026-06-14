import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function ManagePharmacies() {

  const [pharmacies, setPharmacies] =
    useState([]);

  const fetchPharmacies = async () => {

    try {

      const res = await api.get(
        "/pharmacy"
      );

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      if (user.role === "admin") {

        setPharmacies(res.data);

      } else {

        const myPharmacies =
          res.data.filter(
            (pharmacy) =>
              pharmacy.ownerEmail ===
              user.email
          );

        setPharmacies(myPharmacies);

      }

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {

    fetchPharmacies();

  }, []);

  const deletePharmacy = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this pharmacy?"
      );

    if (!confirmDelete) return;

    try {

      await api.delete(
        `/pharmacy/${id}`
      );

      toast.success(
        "Pharmacy Deleted"
      );

      fetchPharmacies();

    } catch (error) {

      toast.error(
        "Delete Failed"
      );

    }
  };

 return (
  <>
    <Navbar />

    <div className="min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold mb-8">
          Manage Pharmacies
        </h1>

        {pharmacies.length === 0 ? (

          <div className="bg-white p-10 rounded-3xl text-center shadow-lg">

            <h2 className="text-3xl font-bold text-slate-800">
              No Pharmacies Found
            </h2>

            <p className="text-slate-500 mt-3">
              Register your first pharmacy.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {pharmacies.map((pharmacy) => (

              <div
                key={pharmacy._id}
                className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition"
              >

                <h2 className="text-2xl font-bold text-emerald-700">
                  {pharmacy.pharmacyName}
                </h2>

                <p className="mt-4">
                  👤 {pharmacy.ownerName}
                </p>

                <p>
                  📞 {pharmacy.phone}
                </p>

                <p>
                  📍 {pharmacy.address}
                </p>

                <p>
                  🏙️ {pharmacy.city}
                </p>

                <p>
                  🌎 {pharmacy.state}
                </p>

                <div className="flex gap-3 mt-5">

                  <Link
                    to={`/view-pharmacy/${pharmacy._id}`}
                    className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg"
                  >
                    View
                  </Link>

                  <Link
                    to={`/edit-pharmacy/${pharmacy._id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      deletePharmacy(
                        pharmacy._id
                      )
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  </>
);
}

export default ManagePharmacies;