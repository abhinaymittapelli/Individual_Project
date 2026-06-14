import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";

function ViewPharmacy() {

  const { id } = useParams();

  const [pharmacy, setPharmacy] =
    useState(null);

  useEffect(() => {

    const fetchPharmacy = async () => {

      const res = await api.get(
        `/pharmacy/${id}`
      );

      setPharmacy(res.data);

    };

    fetchPharmacy();

  }, [id]);

  if (!pharmacy) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 p-8">

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow">

          <h1 className="text-4xl font-bold mb-6">
            {pharmacy.pharmacyName}
          </h1>

          <div className="space-y-4">

            <p>
              <strong>Owner:</strong>{" "}
              {pharmacy.ownerName}
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              {pharmacy.phone}
            </p>

            <p>
              <strong>Address:</strong>{" "}
              {pharmacy.address}
            </p>

            <p>
              <strong>City:</strong>{" "}
              {pharmacy.city}
            </p>

            <p>
              <strong>State:</strong>{" "}
              {pharmacy.state}
            </p>

            <p>
              <strong>Latitude:</strong>{" "}
              {pharmacy.latitude}
            </p>

            <p>
              <strong>Longitude:</strong>{" "}
              {pharmacy.longitude}
            </p>

          </div>

        </div>

      </div>
    </>
  );
}

export default ViewPharmacy;