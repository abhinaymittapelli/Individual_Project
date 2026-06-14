import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import api from "../services/api";
import toast from "react-hot-toast";

function EditMedicine() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    medicineName: "",
    brandName: "",
    genericName: "",
    category: "",
    quantity: "",
    price: "",
    expiryDate: ""
  });

  useEffect(() => {

    const fetchMedicine = async () => {

      try {

        const res = await api.get(
          `/medicine/${id}`
        );

        setFormData({
          medicineName: res.data.medicineName || "",
          brandName: res.data.brandName || "",
          genericName: res.data.genericName || "",
          category: res.data.category || "",
          quantity: res.data.quantity || "",
          price: res.data.price || "",
          expiryDate: res.data.expiryDate
            ? res.data.expiryDate.substring(0,10)
            : ""
        });

      } catch (error) {

        toast.error(
          "Failed to load medicine"
        );

      }
    };

    fetchMedicine();

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
        `/medicine/${id}`,
        formData
      );

      toast.success(
        "Medicine Updated Successfully"
      );

      navigate(
        "/manage-medicines"
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

      <div className="min-h-screen bg-slate-50 py-10">

        <div className="max-w-3xl mx-auto">

          <div className="bg-white p-8 rounded-3xl shadow">

            <h1 className="text-4xl font-bold mb-6">
              Edit Medicine
            </h1>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              <input
                type="text"
                name="medicineName"
                placeholder="Medicine Name"
                value={formData.medicineName}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              />

              <input
                type="text"
                name="brandName"
                placeholder="Brand Name"
                value={formData.brandName}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              />

              <input
                type="text"
                name="genericName"
                placeholder="Generic Name"
                value={formData.genericName}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              />

              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              />

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                />

                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                />

              </div>

              <input
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              />

              <button
                className="w-full bg-emerald-600 text-white py-3 rounded-xl"
              >
                Update Medicine
              </button>

            </form>

          </div>

        </div>

      </div>
    </>
  );
}

export default EditMedicine;