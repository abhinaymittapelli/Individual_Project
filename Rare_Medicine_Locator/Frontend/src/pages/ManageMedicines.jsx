import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function ManageMedicines() {

  const [medicines, setMedicines] = useState([]);

const fetchMedicines = async () => {

  try {

    const res = await api.get("/medicine");

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (user.role === "admin") {

      setMedicines(res.data);

    } else {

      const myMedicines = res.data.filter(
        (medicine) =>
          medicine.pharmacyId?.ownerEmail ===
          user.email
      );

      setMedicines(myMedicines);
    }

  } catch (error) {

    console.log(error);

  }
};

useEffect(() => {

  fetchMedicines();

}, []);

  const deleteMedicine = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this medicine?"
      );

    if (!confirmDelete) return;

    try {

      await api.delete(
        `/medicine/${id}`
      );

      toast.success(
        "Medicine Deleted"
      );

      fetchMedicines();

    } catch (error) {

      toast.error(
        "Delete Failed"
      );

    }
  };

  return (
  <>
    <Navbar />

    <div className="min-h-screen bg-slate-50 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Manage Medicines
        </h1>

        {medicines.length === 0 ? (

          <div className="bg-white p-10 rounded-3xl text-center shadow-lg">

            <h2 className="text-3xl font-bold text-slate-800">
              No Medicines Found
            </h2>

            <p className="text-slate-500 mt-3">
              Add your first medicine to get started.
            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {medicines.map((medicine) => (

              <div
                key={medicine._id}
                className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition"
              >

                <h2 className="text-2xl font-bold text-emerald-700">
                  {medicine.medicineName}
                </h2>

                <p className="mt-3">
                  <strong>Brand:</strong>{" "}
                  {medicine.brandName}
                </p>

                <p>
                  <strong>Generic:</strong>{" "}
                  {medicine.genericName}
                </p>

                <p>
                  <strong>Quantity:</strong>{" "}
                  {medicine.quantity}
                </p>

                <p>
                  <strong>Price:</strong> ₹{medicine.price}
                </p>

                <div className="flex gap-3 mt-5">

                  <Link
                    to={`/edit-medicine/${medicine._id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      deleteMedicine(
                        medicine._id
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

export default ManageMedicines;