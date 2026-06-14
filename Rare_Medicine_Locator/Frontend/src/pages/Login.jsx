import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

import api from "../services/api";

import {
  AuthContext
} from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login } =
    useContext(AuthContext);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

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

      toast.success(
        "Login Successful"
      );

      if (
        res.data.role === "admin"
      ) {
        navigate("/admin");
      }

      else {
        navigate("/dashboard");
      }

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Login Failed"
      );

    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center px-4">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-slate-500 mb-8">
          Login to your account
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 border rounded-xl"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <div className="relative">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              className="w-full p-4 border rounded-xl"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>

          </div>

          <button
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-semibold transition"
          >
            Login
          </button>

        </form>

        <div className="text-center mt-6">

          <p className="text-slate-500">
            Not registered yet?
          </p>

          <Link
            to="/register"
            className="text-emerald-600 font-semibold hover:text-emerald-700"
          >
            Create Account
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;