import { useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function SearchMedicine() {
  const [search, setSearch] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] =useState("");

  const handleSearch = async () => {
    try {
      setLoading(true);

      const res = await api.get(
        `/medicine/locator?name=${search}`
      );
      console.log("API RESPONSE:", res.data);
      setMedicines(res.data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySearch = async () => {

  try {

    const res = await api.get(
      `/medicine/category?category=${category}`
    );

    setMedicines(res.data);

  } catch (error) {

    console.log(error);

  }
};

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50">

        <div className="max-w-6xl mx-auto px-6 py-12">

          <div className="mb-10">
            <h1 className="text-5xl font-bold text-slate-800">
              Find Rare Medicines
            </h1>

            <p className="text-slate-500 mt-3">
              Search medicines available across registered pharmacies.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-4 flex gap-4">

            <input
              type="text"
              placeholder="Search medicine by name..."
              className="flex-1 border rounded-xl px-4 py-3 outline-none"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

            <button
              onClick={handleSearch}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 rounded-xl"
            >
              Search
            </button>

          </div>
          <div className="mt-6">

  <h3 className="text-lg font-semibold mb-3">
    Or Search by Category
  </h3>

  <select
    value={category}
    onChange={(e) =>
      setCategory(e.target.value)
    }
    className="w-full border p-4 rounded-xl bg-white"
  >

    <option value="">
      Select Category
    </option>

    <option value="Fever">
      Fever
    </option>

    <option value="Cold & Cough">
      Cold & Cough
    </option>

    <option value="Pain Relief">
      Pain Relief
    </option>

    <option value="Diabetes">
      Diabetes
    </option>

    <option value="Blood Pressure">
      Blood Pressure
    </option>

    <option value="Antibiotics">
      Antibiotics
    </option>

    <option value="Rare Medicines">
      Rare Medicines
    </option>

    <option value="Others">
      Others
    </option>

  </select>

  <button
    onClick={handleCategorySearch}
    className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl"
  >
    Search By Category
  </button>

</div>

          {loading && (
            <div className="mt-8 text-center">
              Searching medicines...
            </div>
          )}

          {!loading &&
            medicines.length === 0 &&
            search && (
              <div className="mt-10 bg-white p-10 rounded-2xl text-center shadow">
                <h2 className="text-2xl font-semibold text-slate-700">
                  No Medicines Found
                </h2>

                <p className="text-slate-500 mt-2">
                  Try another medicine name.
                </p>
              </div>
            )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

            {medicines.map((medicine, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 p-6"
              >

                <div className="flex justify-between items-center">

                  <h2 className="text-xl font-bold text-emerald-600 mb-3">
                    {medicine.medicineName}
                  </h2>

                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                    Available
                  </span>

                </div>

                <div className="mt-5 space-y-2 text-slate-700">

                  <p>
                    🏥 <strong>Pharmacy:</strong>{" "}
                    {medicine.pharmacy}
                  </p>

                  <p>
                    📍 <strong>City:</strong>{" "}
                    {medicine.city}
                  </p>

                  <p>
                    📞 <strong>Phone:</strong>{" "}
                    {medicine.phone}
                  </p>

                  <a
                     href={`https://www.google.com/maps?q=${medicine.latitude},${medicine.longitude}`}
                     target="_blank"
                     rel="noreferrer"
                     className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
>
                      📍 Open in Google Maps
</a>

                  <p>
                    📦 <strong>Quantity:</strong>{" "}
                    {medicine.quantity}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </>
  );
}

export default SearchMedicine;