import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

import {
  AuthContext
} from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login } = useContext(
    AuthContext
  );

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await api.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      login(res.data);

      if (
        res.data.role === "admin"
      ) {
        navigate("/admin");
      }

      else if (
        res.data.role === "pharmacy"
      ) {
        navigate("/dashboard");
      }

      else {
        navigate("/search");
      }

    } catch (error) {
      alert(
        error.response.data.message
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-lg w-[420px]"
      >

        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg mb-4"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-4"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="w-full bg-emerald-600 text-white py-3 rounded-lg"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;