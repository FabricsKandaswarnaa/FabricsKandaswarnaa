import React from "react";
import { useNavigate } from "react-router-dom";
import row12 from "../../assets/Fabrics/row12.jpg";
import row13 from "../../assets/Fabrics/row13.mp4";
import row21 from "../../assets/Fabrics/row21.jpg";
import row22 from "../../assets/Fabrics/row22.jpg";
import row23 from "../../assets/Fabrics/row23.jpg";
import row31 from "../../assets/Fabrics/row31.jpg";
import row32 from "../../assets/Fabrics/row32.jpg";
import row33 from "../../assets/Fabrics/row33.jpg";
import row41 from "../../assets/Fabrics/row41.jpg";
import row42 from "../../assets/Fabrics/row42.jpg";
import row43 from "../../assets/Fabrics/row43.jpg";
import row51 from "../../assets/Fabrics/row51.jpg";
import row52 from "../../assets/Fabrics/row52.jpg";
import row53 from "../../assets/Fabrics/row53.jpg";
import row61 from "../../assets/Fabrics/row61.jpg";
import row62 from "../../assets/Fabrics/row62.jpg";
import row63 from "../../assets/Fabrics/row63.jpg";
import row71 from "../../assets/Fabrics/row71.jpg";
import row72 from "../../assets/Fabrics/row72.jpg";
import row73 from "../../assets/Fabrics/row73.jpg";
import row81 from "../../assets/Fabrics/row81.jpg";
import row82 from "../../assets/Fabrics/row82.jpg";
import row83 from "../../assets/Fabrics/row83.mp4";
import row91 from "../../assets/Fabrics/row91.jpg";
import row92 from "../../assets/Fabrics/row92.jpg";
import row93 from "../../assets/Fabrics/row93.mp4";
import row101 from "../../assets/Fabrics/row101.jpg";
import row102 from "../../assets/Fabrics/row102.jpg";
import row103 from "../../assets/Fabrics/row103.mp4";
import row111 from "../../assets/Fabrics/row111.jpg";
import row112 from "../../assets/Fabrics/row112.jpg";
import row113 from "../../assets/Fabrics/row113.jpg";
import row121 from "../../assets/Fabrics/row121.jpg";
import row122 from "../../assets/Fabrics/row122.jpg";
import row123 from "../../assets/Fabrics/row123.jpg";
import row131 from "../../assets/Fabrics/row131.jpg";
import row132 from "../../assets/Fabrics/row132.jpg";
import row133 from "../../assets/Fabrics/row133.mp4";
import row141 from "../../assets/Fabrics/row141.jpg";
import row142 from "../../assets/Fabrics/row142.jpg";
import row143 from "../../assets/Fabrics/row143.jpg";
import collections from "../../assets/Fabrics/Collections.jpg";
import redsaree from "../../assets/Fabrics/redsaree1.jpg";

const Collections: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[auto] bg-[#fff]">
      <div
        className="w-full h-[40vh] bg-fit bg-center relative flex justify-center items-center"
        style={{ backgroundImage: `url(${collections})` }}
      >
        <div className="absolute inset-0 bg-[#00000094]"></div>
        <div className="relative w-[90%] flex flex-col justify-center items-center text-center px-4">
          <div
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold"
          >
            {/* <span
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
            -{" "} */}
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
            -{" "}
            <span
              onClick={() => {
                navigate("/collections");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Our Saree Collections
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[auto] flex justify-center items-center flex-col pt-10 pb-6">
        {/* <div
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
        </div> */}

        <div
          className="text-[#3d404e] w-[80%] text-center text-[44px] mt-[50px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Saree Collections
        </div>

        <div className="w-[80%] mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: "image", image: redsaree },
            { label: "image", image: row12 },
            { label: "video", image: row13 },
            { label: "image", image: row22 },
            { label: "image", image: row21 },
            { label: "image", image: row23 },
            { label: "image", image: row31 },
            { label: "image", image: row32 },
            { label: "image", image: row33 },
            { label: "image", image: row41 },
            { label: "image", image: row42 },
            { label: "image", image: row43 },
            { label: "image", image: row51 },
            { label: "image", image: row52 },
            { label: "image", image: row53 },
            { label: "image", image: row61 },
            { label: "image", image: row62 },
            { label: "image", image: row63 },
            { label: "image", image: row71 },
            { label: "image", image: row72 },
            { label: "image", image: row73 },
            { label: "image", image: row81 },
            { label: "image", image: row82 },
            { label: "video", image: row83 },
            { label: "image", image: row91 },
            { label: "image", image: row92 },
            { label: "video", image: row93 },
            { label: "image", image: row101 },
            { label: "image", image: row102 },
            { label: "video", image: row103 },
            { label: "image", image: row113 },
            { label: "image", image: row112 },
            { label: "image", image: row111 },
            { label: "image", image: row121 },
            { label: "image", image: row122 },
            { label: "image", image: row123 },
            { label: "image", image: row131 },
            { label: "image", image: row132 },
            { label: "video", image: row133 },
            { label: "image", image: row141 },
            { label: "image", image: row142 },
            { label: "image", image: row143 },
          ].map((item, index) => (
            <>
              {item.label === "image" ? (
                <div
                  key={index}
                  className="w-full h-[500px] bg-cover bg-center relative flex justify-center items-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  {/* <div className="absolute inset-0 bg-[#0000004e]"></div> */}
                  {/* <div
                style={{ fontFamily: "Poppins" }}
                className="relative w-[90%] flex flex-col justify-center items-center text-center text-4xl px-4 text-[#fff]"
              >
                {item.label}
              </div> */}
                </div>
              ) : (
                item.label === "video" && (
                  <div className="w-full h-[500px] relative overflow-hidden">
                    <video
                      src={item.image}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                )
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
