import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home"; // Create these components



function App() {
  return (
    <ChakraProvider>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
