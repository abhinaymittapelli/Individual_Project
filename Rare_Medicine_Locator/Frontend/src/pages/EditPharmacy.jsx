import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";
import toast from "react-hot-toast";

function EditPharmacy() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      pharmacyName: "",
      ownerName: "",
      phone: "",
      address: "",
      city: "",
      state: ""
    });

  useEffect(() => {

    const fetchPharmacy = async () => {

      const res = await api.get(
        `/pharmacy/${id}`
      );

      setFormData(res.data);

    };

    fetchPharmacy();

  }, [id]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.put(
        `/pharmacy/${id}`,
        formData
      );

      toast.success(
        "Pharmacy Updated"
      );

      navigate(
        "/manage-pharmacies"
      );

    } catch (error) {

      toast.error(
        "Update Failed"
      );

    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 p-8">

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow">

          <h1 className="text-4xl font-bold mb-6">
            Edit Pharmacy
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            <input
              type="text"
              name="pharmacyName"
              value={formData.pharmacyName}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />

            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />

            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />

            <button
              className="w-full bg-emerald-600 text-white py-3 rounded-xl"
            >
              Update Pharmacy
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default EditPharmacy;