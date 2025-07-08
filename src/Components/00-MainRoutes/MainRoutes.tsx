import React from "react";
import Header from "../01-Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../Pages/00-Home/Home";
import Footer from "../04-Footer/Footer";
import About from "@/Pages/01-About/About";
import Contact from "../05-Contact/Contact";
import Fabrics from "@/Pages/02-Fabrics/Fabrics";
import Mall from "@/Pages/03-Mall/Mall";
import Hitechcity from "@/Pages/04-Hitechcity/Hitechcity";
import Brands from "@/Pages/05-Brands/Brands";
import Collections from "@/Pages/02-Fabrics/Collections";

interface MainRoutesProps {}

const MainRoutes: React.FC<MainRoutesProps> = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fabrics" element={<Fabrics />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/mall" element={<Mall />} />
          <Route path="/hitechcity" element={<Hitechcity />} />
          <Route path="/brands" element={<Brands />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default MainRoutes;
