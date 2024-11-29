import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/auth/SignIn";
import Signup from "./pages/auth/SignUp";
import AdminPanel from "./pages/admin/AdminPanel";
import LandingPage from "./pages/client/LandingPage";
import PageNotFound from "./pages/admin/PageNotFound";

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Default route displays the Admin Panel */}
                <Route path="/*" element={<AdminPanel />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
};

export default App;
