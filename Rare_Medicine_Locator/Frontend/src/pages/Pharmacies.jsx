import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function Pharmacies() {

  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {

    const fetchPharmacies = async () => {

      try {

        const res = await api.get("/pharmacy");

        setPharmacies(res.data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchPharmacies();

  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-4xl font-bold mb-8">
            Registered Pharmacies
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {pharmacies.map((pharmacy) => (

              <div
                key={pharmacy._id}
                className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
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

              </div>

            ))}

          </div>

        </div>

      </div>
    </>
  );
}

export default Pharmacies;