import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Google from "./Google";
import axios from "axios";

const Signup = () => {
    const url = import.meta.env.VITE_API_URL_2;
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const onChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${url}/signup`, userData);
            if (response.status === 200) {
                localStorage.setItem("token", response.data.token); // Save JWT token
                sessionStorage.setItem("userName", userData.username);
                const userId = sessionStorage.getItem('userName');
                console.log(userId);
                navigate('/home');
                alert("User registered successfully");
            }
        } catch (err) {
            setError("Failed to sign up. Please try again.");
            console.error("Signup error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-center text-gray-800">Sign Up</h2>
                <p className="text-sm text-center text-gray-600 mt-2">
                    Create your account today!
                </p>
                <form className="mt-6 space-y-4" onSubmit={handleSignup}>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="username"
                            value={userData.username}
                            onChange={onChange}
                            className="mt-1 block w-full px-3 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userData.email}
                            onChange={onChange}
                            className="mt-1 block w-full px-3 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={userData.password}
                            onChange={onChange}
                            className="mt-1 block w-full px-3 py-2 border rounded-lg text-gray-700 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-2 px-4 text-white rounded-lg transition ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                            }`}
                        disabled={loading}
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <Link
                        to="/signin"
                        className="text-blue-500 hover:underline focus:outline-none"
                    >
                        Log in
                    </Link>
                </p>
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-600">Or</span>
                    </div>
                </div>
                <Google />
            </div>
        </div>
    );
};

export default Signup;
