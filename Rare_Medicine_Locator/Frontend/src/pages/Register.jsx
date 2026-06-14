import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.post(
        "/auth/register",
        formData
      );

      alert("Registration Successful");

      navigate("/login");

    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-lg w-[420px]"
      >

        <h1 className="text-3xl font-bold mb-6">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg mb-4"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg mb-4"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-4"
          onChange={handleChange}
        />

        <select
          name="role"
          className="w-full p-3 border rounded-lg mb-4"
          onChange={handleChange}
        >
          <option value="user">
            User
          </option>

          <option value="pharmacy">
            Pharmacy Owner
          </option>
        </select>

        <button
          className="w-full bg-emerald-600 text-white py-3 rounded-lg"
        >
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;