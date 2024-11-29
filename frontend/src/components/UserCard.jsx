import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserCard = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        fetchUser();

    }, []);

    const fetchUser = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/userinfo", {
                withCredentials: true,
            });;
            setUser(response.data);
        } catch (err) {
            console.error("Error fetching user data:", err);
            setError("Failed to fetch user data. Please try again.");
        }
    };

    const handleLogout = async () => {
        try {
            await axios.get("http://localhost:8080/api/v1/logout", {
                withCredentials: true,
            });
            setUser(null);
            navigate("/");
        } catch (err) {
            console.error("Error logging out:", err);
            setError("Failed to log out. Please try again.");
        }
    };

    if (error) {
        return (
            <div
                className="p-4 text-red-500 bg-red-100 border border-red-400 rounded-md"
                role="alert"
            >
                {error}
            </div>
        );
    }

    if (!user) {
        return <div className="text-center text-lg text-gray-500">Loading...</div>;
    }

    return (
        <div className="p-6 w-full max-w-md mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4">

            {user ? (
                <>
                    <div className="my-auto flex flex-col items-center ">

                        <img
                            src={user.picture}
                            alt={user.name + "'s Profile Picture"}
                            className="w-24 h-24 rounded-full border border-gray-300 object-cover"
                        />
                        <h2 className="text-2xl font-semibold text-gray-800">Welcome, {user.name}</h2>
                        <p className="text-gray-600">Email: {user.email}</p>
                        <button
                            onClick={handleLogout}
                            className="mt-4 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md shadow-md focus:outline-none transition ease-in-out duration-150"
                        >
                            Logout
                        </button>
                    </div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>

    );
};

export default UserCard;
