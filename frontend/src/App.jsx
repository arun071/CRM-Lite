import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/auth/SignIn";
import Signup from "./pages/auth/SignUp";
import AdminPanel from "./pages/admin/AdminPanel";
import LandingPage from "./pages/client/LandingPage";
import PrivateRoute from "./pages/auth/PrivateRoute";

const App = () => {
    return (

        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />

                {/* Protected Routes */}
                <Route element={<PrivateRoute />}>
                    <Route path="/*" element={<AdminPanel />} />
                </Route>
            </Routes>
        </Router >
    );
};

export default App;
