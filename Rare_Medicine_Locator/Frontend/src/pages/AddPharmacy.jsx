import { useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import toast from "react-hot-toast";

function AddPharmacy() {

  const [formData, setFormData] = useState({
    pharmacyName: "",
    ownerName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    latitude: "",
    longitude: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

 const getLocation = () => {

  if (!navigator.geolocation) {

    toast.error(
      "Geolocation is not supported"
    );

    return;
  }

  navigator.geolocation.getCurrentPosition(

    (position) => {

      setFormData((prev) => ({
        ...prev,
        latitude:
          position.coords.latitude,
        longitude:
          position.coords.longitude
      }));

      toast.success(
        "Location Captured Successfully"
      );

    },

    (error) => {

      toast.error(
        "Please allow location access"
      );

      console.log(error);

    }

  );

};

const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    await api.post(
      "/pharmacy",
      {
        ...formData,
        ownerName:user.name,
        ownerEmail: user.email
      }
    );

    toast.success(
      "Pharmacy Added Successfully"
    );

    setFormData({
      pharmacyName: "",
      ownerName: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      latitude: "",
      longitude: ""
    });

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Failed to Add Pharmacy"
    );

  }
};

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 py-10">

        <div className="max-w-3xl mx-auto">

          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <h1 className="text-4xl font-bold mb-2">
              Add Pharmacy
            </h1>

            <p className="text-slate-500 mb-8">
              Register your pharmacy
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              <input
                type="text"
                name="pharmacyName"
                placeholder="Pharmacy Name"
                value={formData.pharmacyName}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl"
                required
              />

              <input
                type="text"
                name="ownerName"
                placeholder="Owner Name"
                value={formData.ownerName}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl"
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl"
                required
              />

              <textarea
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 border rounded-xl"
                rows="3"
                required
              />

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl"
                  required
                />

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl"
                  required
                />

              </div>

              <button
                    type="button"
                    onClick={getLocation}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
>
              📍 Use Current Location
               </button>

              <div className="grid md:grid-cols-2 gap-4">

            <input
              type="number"
              step="any"
              name="latitude"
              placeholder="Latitude"
              value={formData.latitude}
               readOnly
               className="w-full p-3 border rounded-xl bg-slate-100"
               required
/>

                <input
  type="number"
  step="any"
  name="longitude"
  placeholder="Longitude"
  value={formData.longitude}
  readOnly
  className="w-full p-3 border rounded-xl bg-slate-100"
  required
/>
              </div>

              <button
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold"
              >
                Add Pharmacy
              </button>

            </form>

          </div>

        </div>

      </div>
    </>
  );
}

export default AddPharmacy;