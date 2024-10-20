import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home"; // Create these components
// import About from './About';     // Create these components
// import Services from './Services'; // Create these components
import Contact from "./pages/ContactUs"; // Create these components
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Camera from "./pages/camera";

function App() {
  return (
    <ChakraProvider>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/camera" element={<Camera />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
