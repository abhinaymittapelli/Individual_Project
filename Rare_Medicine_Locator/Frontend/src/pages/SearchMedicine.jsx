import { useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function SearchMedicine() {

  const [search, setSearch] = useState("");
  const [medicines, setMedicines] = useState([]);

  const handleSearch = async () => {

    const res = await api.get(
      `/medicine/locator?name=${search}`
    );

    setMedicines(res.data);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 p-10">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-bold text-slate-800 mb-8">
            Search Rare Medicine
          </h1>

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Enter medicine name..."
              className="flex-1 border p-4 rounded-xl bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              onClick={handleSearch}
              className="bg-emerald-600 text-white px-8 rounded-xl"
            >
              Search
            </button>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            {medicines.map((medicine, index) => (

              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow"
              >
                <h2 className="text-2xl font-bold text-emerald-700">
                  {medicine.medicineName}
                </h2>

                <p className="mt-3">
                  <strong>Pharmacy:</strong>{" "}
                  {medicine.pharmacy}
                </p>

                <p>
                  <strong>City:</strong>{" "}
                  {medicine.city}
                </p>

                <p>
                  <strong>Quantity:</strong>{" "}
                  {medicine.quantity}
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  {medicine.phone}
                </p>
              </div>

            ))}

          </div>

        </div>

      </div>
    </>
  );
}

export default SearchMedicine;