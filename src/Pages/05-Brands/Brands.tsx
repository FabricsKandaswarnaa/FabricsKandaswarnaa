import React from "react";
import Brand from "../../assets/Images/Brands1.jpg";
import { useNavigate } from "react-router-dom";
import land from "../../assets/Home/land.jpg";
import mall from "../../assets/Home/mall.jpg";
import fabric from "../../assets/Home/fabric.jpg";

const Brands: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[auto] bg-[#fff]">
      <div
        className="w-full h-[40vh] bg-cover bg-center relative flex justify-center items-center"
        style={{ backgroundImage: `url(${Brand})` }}
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
              }}
            >
              Home
            </span>{" "}
            -{" "}
            <span
              onClick={() => {
                navigate("/brands");
              }}
            >
              Our Brands
            </span>
          </div>
        </div>
      </div>

      <div className="w-full my-[50px] h-[auto] bg-[#fff]">
        {/* Carousel */}
        <div className="w-full h-auto lg:h-[100vh] flex flex-col lg:flex-row">
          {/* Section 1 */}
          <div
            className="w-full lg:w-1/3 h-[100vh] bg-cover bg-center relative flex justify-center items-center"
            style={{ backgroundImage: `url(${fabric})` }}
          >
            <div className="absolute inset-0 bg-[#00000094]"></div>
            <div className="relative w-[90%] flex flex-col justify-center items-center text-center px-4">
              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold"
              >
                Kandaswarnaa Fabrics
              </div>
              <div
                style={{ fontFamily: "Poppins" }}
                className="text-white text-[14px] md:text-[16px] font-semibold mt-4"
              >
                Export & Import of premium Fabrics like Party Wear, Sarees,
                Kurtii’s..
              </div>
              <div
                onClick={() => {
                  navigate("/fabrics");
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="bg-[#8db580] w-[160px] md:w-[180px] mt-8 hover:bg-transparent transition-all ease-in-out duration-200 border-2 border-[#8db580] text-[14px] font-[700] h-[45px] text-white cursor-pointer flex justify-center items-center rounded-3xl"
              >
                Explore More
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div
            className="w-full lg:w-1/3 h-[100vh] bg-cover bg-center relative flex justify-center items-center"
            style={{ backgroundImage: `url(${mall})` }}
          >
            <div className="absolute inset-0 bg-[#00000094]"></div>
            <div className="relative w-[90%] flex flex-col justify-center items-center text-center px-4">
              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold"
              >
                Kandaswarnaa Shopping Mall
              </div>
              <div
                style={{ fontFamily: "Poppins" }}
                className="text-white text-[14px] md:text-[16px] font-semibold mt-4"
              >
                Premium shopping mall space for rent in Prime Spot, Salem
              </div>
              <div
                onClick={() => {
                  navigate("/mall");
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="bg-[#8db580] w-[160px] md:w-[180px] mt-8 hover:bg-transparent transition-all ease-in-out duration-200 border-2 border-[#8db580] text-[14px] font-[700] h-[45px] text-white cursor-pointer flex justify-center items-center rounded-3xl"
              >
                Explore More
              </div>
            </div>
          </div>

          {/* Section 3 */}

          <div
            className="w-full lg:w-1/3 h-[100vh] bg-cover bg-center relative flex justify-center items-center"
            style={{ backgroundImage: `url(${land})` }}
          >
            <div className="absolute inset-0 bg-[#00000094]"></div>
            <div className="relative w-[90%] flex flex-col justify-center items-center text-center px-4">
              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold"
              >
                Kandaswarnaa Hi Tech City
              </div>
              <div
                style={{ fontFamily: "Poppins" }}
                className="text-white text-[14px] md:text-[16px] font-semibold mt-4"
              >
                Premium Shopping Mall Space for Rental in Prime Location of
                Salem - Bangalore Highway
              </div>
              <div
                onClick={() => {
                  navigate("/hitechcity");
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="bg-[#8db580] w-[160px] md:w-[180px] mt-8 hover:bg-transparent transition-all ease-in-out duration-200 border-2 border-[#8db580] text-[14px] font-[700] h-[45px] text-white cursor-pointer flex justify-center items-center rounded-3xl"
              >
                Explore More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
