import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
