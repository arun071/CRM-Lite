import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Google from "./Google";

const Signin = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      const response = await axios.post("http://localhost:8080/signin", loginData);
      localStorage.setItem("token", response.data.token); // Save JWT token
      console.log(loginData);
      
      sessionStorage.setItem("userName",loginData.username);
      const userId = sessionStorage.getItem('userName');
    

     
      console.log(userId);
      alert("Logged in successfully");
      navigate("/home");
    } catch (err) {
      setError("Login failed. Please check your credentials.");
      console.error("Login error:", err.message); // Use server logs for details
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Sign In</h2>
        <p className="text-sm text-center text-gray-600 mt-2">
          Welcome back! Please sign in to your account.
        </p>

        {/* Sign-In Form */}
        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={loginData.username}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Sign up
          </Link>
        </p>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-600">Or</span>
          </div>
        </div>

        {/* Google Sign-In Button */}
        <Google />
      </div>
    </div>
  );
};

export default Signin;
