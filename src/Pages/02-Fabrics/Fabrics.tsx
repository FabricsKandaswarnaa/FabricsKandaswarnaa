import React from "react";
import FabricsImg from "../../assets/Images/Fabrics2.jpg";
import { useNavigate } from "react-router-dom";
// import Sarees from "../../assets/Images/Saree1.jpg";
// import SilfSaree from "../../assets/Images/SilkSaree1.jpg";
// import DesignerSaree from "../../assets/Images/DesignerSaree1.jpg";
import KerealaSaree from "../../assets/Images/KerealaSaree1.jpg";
import Chudithars from "../../assets/Fabrics/chudi.png";
import UniformSaree from "../../assets/Images/Uniform Saree1.jpg";
import PattuPaavadai from "../../assets/Fabrics/pattu.jpg";
import Lehengas from "../../assets/Fabrics/lehenga.png";
import Shirts from "../../assets/Images/Shirts1.jpg";
import BoysDress from "../../assets/Images/Boys1.jpg";
import GirlsDress from "../../assets/Images/Girls1.jpg";
import PartyDress from "../../assets/Images/KidsPartyWear1.jpg";
import Vesti from "../../assets/Images/Vesti1.png";
import pinksilk from "../../assets/Fabrics/pinksilk.png";
import redsaree from "../../assets//Fabrics/redsaree1.jpg";
import designer from "../../assets/Fabrics/design.png";
import redblue from "../../assets/Fabrics/redblue.jpg";

const Fabrics: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[auto] bg-[#fff]">
      <div
        className="w-full h-[40vh] bg-cover bg-center relative flex justify-center items-center"
        style={{ backgroundImage: `url(${FabricsImg})` }}
      >
        <div className="absolute inset-0 bg-[#00000094]"></div>
        <div className="relative w-[90%] flex flex-col justify-center items-center text-center px-4">
          <div
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold"
          >
            <span
              onClick={() => {
                navigate("/");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Home
            </span>{" "}
            -{" "}
            <span
              onClick={() => {
                navigate("/brands");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Our Brands
            </span>{" "}
            -{" "}
            <span
              onClick={() => {
                navigate("/fabrics");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Kandaswarnaa Fabrics
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[auto] flex justify-center items-center flex-col pt-10 pb-6">
        <div
          style={{ fontFamily: "Poppins" }}
          className="text-[14px] text-[#9193a4] font-Poppins font-bold flex justify-center items-center flex-col pt-10"
        >
          Fashion That Travels the World
          <div className="w-[30px] h-[2px] bg-[#8db580] mt-[20px]"></div>
        </div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="text-[#7d7a7a] w-[80%] text-[17px] font-[400] flex justify-center font-Poppins text-justify py-10"
        >
          We import and export a wide range of men’s, women’s, and kids’
          fashion, blending heritage with modern flair.
        </div>

        <div
          className="text-[#3d404e] text-[44px] mt-[50px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Women’s Wear
        </div>

        <div className="w-[80%] mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: "Sarees", image: redsaree },
            { label: "Silk Sarees", image: pinksilk },
            { label: "Designer Sarees", image: designer },
            { label: "Chudithars", image: Chudithars },
            { label: "Pattu Paavadai", image: PattuPaavadai },
            { label: "Lehengas", image: Lehengas },
            { label: "Kerala Sarees", image: KerealaSaree },
            { label: "Uniform Sarees", image: UniformSaree },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full h-[500px] bg-cover bg-center relative flex justify-center items-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-[#0000004e]"></div>
              <div
                style={{ fontFamily: "Poppins" }}
                className="relative w-[90%] flex flex-col justify-center items-center text-center text-4xl px-4 text-[#fff]"
              >
                {item.label}
              </div>
            </div>
          ))}
          <div
            className="w-full h-[500px] bg-cover bg-center relative flex justify-center items-center"
            style={{ backgroundImage: `url(${redblue})` }}
            onClick={() => {
              navigate("/collections");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <div className="absolute inset-0 bg-[#0000004e]"></div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative w-[90%] flex flex-row justify-center items-center text-center text-2xl px-4 text-[#fff] cursor-pointer group"
            >
              View More Collections
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
            </div>
          </div>
        </div>

        <div
          className="text-[#3d404e] text-[44px] mt-[50px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Men's Wear
        </div>
        <div className=" w-[80%] flex flex-col lg:flex-row justify-between mt-[50px]">
          <div
            className="w-[100%] lg:w-[49%] h-[500px] bg-cover bg-center relative flex justify-center items-center"
            style={{ backgroundImage: `url(${Vesti})` }}
          >
            <div className="absolute inset-0 bg-[#00000094]"></div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative w-[90%] flex flex-col justify-center items-center text-center text-4xl px-4 text-[#fff]"
            >
              Dothis and Shirt
            </div>
          </div>
          <div
            className="w-[100%] mt-[20px] lg:mt-[0px] lg:w-[49%] h-[500px] bg-cover bg-center relative flex justify-center items-center"
            style={{ backgroundImage: `url(${Shirts})` }}
          >
            <div className="absolute inset-0 bg-[#00000094]"></div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative w-[90%] flex flex-col justify-center items-center text-center text-4xl px-4 text-[#fff]"
            >
              Shirts for Men
            </div>
          </div>
        </div>

        <div
          className="text-[#3d404e] text-[44px] mt-[50px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Kids’ Wear
        </div>
        <div className=" w-[80%] flex-col lg:flex-row flex justify-between mt-[50px]">
          <div
            className="w-[100%] lg:w-[32.3%] h-[500px] bg-cover bg-center relative flex justify-center items-center"
            style={{ backgroundImage: `url(${BoysDress})` }}
          >
            <div className="absolute inset-0 bg-[#00000094]"></div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative w-[90%] flex flex-col justify-center items-center text-center text-4xl px-4 text-[#fff]"
            >
              Boys Dress
            </div>
          </div>
          <div
            className="w-[100%] lg:w-[32.3%] mt-[20px] lg:mt-[0px] h-[500px] bg-cover bg-center relative flex justify-center items-center"
            style={{ backgroundImage: `url(${GirlsDress})` }}
          >
            <div className="absolute inset-0 bg-[#00000094]"></div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative w-[90%] flex flex-col justify-center items-center text-center text-4xl px-4 text-[#fff]"
            >
              Girls Dress
            </div>
          </div>
          <div
            className="w-[100%] lg:w-[32.3%] mt-[20px] lg:mt-[0px] h-[500px] bg-cover bg-center relative flex justify-center items-center"
            style={{ backgroundImage: `url(${PartyDress})` }}
          >
            <div className="absolute inset-0 bg-[#00000094]"></div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative w-[90%] flex flex-col justify-center items-center text-center text-4xl px-4 text-[#fff]"
            >
              Kids party wear
            </div>
          </div>
        </div>

        <div
          style={{ fontFamily: "Poppins" }}
          className="text-[#7d7a7a] w-[80%] mt-[20px] text-[17px] font-[400] flex justify-center font-Poppins text-justify py-10"
        >
          We cater to online shoppers and global B2B clients.
        </div>
      </div>
    </div>
  );
};

export default Fabrics;
