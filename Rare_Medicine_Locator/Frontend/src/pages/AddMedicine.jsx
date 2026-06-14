import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import toast from "react-hot-toast";

function AddMedicine() {

  const [pharmacies, setPharmacies] =
    useState([]);

  const [formData, setFormData] = useState({
    medicineName: "",
    brandName: "",
    genericName: "",
    category: "",
    quantity: "",
    price: "",
    expiryDate: "",
    pharmacyId: ""
  });

  useEffect(() => {
const fetchPharmacies = async () => {

  try {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    const res = await api.get(
      "/pharmacy"
    );

    const myPharmacies =
      res.data.filter(
        (pharmacy) =>
          pharmacy.ownerEmail ===
          user.email
      );

    setPharmacies(
      myPharmacies
    );

  } catch (error) {

    console.log(error);

  }
};

    fetchPharmacies();

  }, []);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

 const handleSubmit = async (e) => {

  e.preventDefault();

  const allowedCategories = [
    "Fever",
    "Cold & Cough",
    "Pain Relief",
    "Diabetes",
    "Blood Pressure",
    "Antibiotics",
    "Rare Medicines"
  ];

  const medicineData = {
    ...formData,
    category: allowedCategories.includes(
      formData.category
    )
      ? formData.category
      : "Others"
  };

  try {

    await api.post(
      "/medicine",
      medicineData
    );

    toast.success(
      "Medicine Added Successfully"
    );

    setFormData({
      medicineName: "",
      brandName: "",
      genericName: "",
      category: "",
      quantity: "",
      price: "",
      expiryDate: "",
      pharmacyId: ""
    });

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Failed to Add Medicine"
    );

  }
};

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50 py-10">

        <div className="max-w-3xl mx-auto">

          <div className="bg-white p-8 rounded-3xl shadow">

            <h1 className="text-4xl font-bold mb-2">
              Add Medicine
            </h1>

            <p className="text-slate-500 mb-8">
              Add new medicine stock
            </p>

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
                required
              />

              <input
                type="text"
                name="brandName"
                placeholder="Brand Name"
                value={formData.brandName}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
                required
              />

              <input
                type="text"
                name="genericName"
                placeholder="Generic Name"
                value={formData.genericName}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
                required
              />

              <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                  required
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

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                  required
                />

                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-xl"
                  required
                />

              </div>

              <input
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
                required
              />

              <select
                name="pharmacyId"
                value={formData.pharmacyId}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
                required
              >

                <option value="">
                  Select Pharmacy
                </option>

                {pharmacies.map((pharmacy) => (

                  <option
                    key={pharmacy._id}
                    value={pharmacy._id}
                  >
                    {pharmacy.pharmacyName}
                  </option>

                ))}

              </select>

              <button
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition"
              >
                Add Medicine
              </button>

            </form>

          </div>

        </div>

      </div>
    </>
  );
}

export default AddMedicine;