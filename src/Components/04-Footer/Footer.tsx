import {
  Facebook,

  MapPin,
  Phone,

} from "lucide-react";
import React from "react";
// import logoLight from "../../assets/Logo/logo-light.png";
import logo from "../../assets/Logo/Logo.png";
import { useNavigate } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-[100%] relative bg-[#123f49] backdrop-blur-sm flex justify-center items-center border-b-1 border-[#fff] z-0">
        <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row justify-center items-center py-10 lg:py-5">
          <div className="w-[100%] lg:w-[45%] flex gap-3 justify-start">
            <a
              href="https://www.facebook.com/share/16sNDAZAag/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-[40px] group h-[40px] flex justify-around items-center border-2 rounded-4xl hover:border-[#777] transition-all duration-300 cursor-pointer">
                <Facebook className="w-[20px] h-[20px] mr-[1px] text-[#fff] group-hover:text-[#777] transition-all duration-300" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/swarnasaris?igsh=MWFlMnlueWp1MTB0dw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-[40px] group h-[40px] flex justify-around items-center border-2 rounded-4xl hover:border-[#777] transition-all duration-300 cursor-pointer">
                <BsInstagram className="w-[20px] h-[20px] text-[#fff]  group-hover:text-[#777] transition-all duration-300 " />
              </div>
            </a>
            {/* <a
              href="https://www.facebook.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-[40px] group h-[40px] flex justify-around items-center border-2 rounded-4xl hover:border-[#777] transition-all duration-300 cursor-pointer">
                <Youtube className="w-[20px] h-[20px] text-[#fff] group-hover:text-[#777] transition-all duration-300" />
              </div>
            </a>
            <a
              href="https://www.facebook.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-[40px] group h-[40px] flex justify-around items-center border-2 rounded-4xl hover:border-[#777] transition-all duration-300 cursor-pointer">
                <Linkedin className="w-[20px] h-[20px] text-[#fff] group-hover:text-[#777] transition-all duration-300" />
              </div>
            </a> */}
          </div>
          <div className="w-[100%] lg:w-[55%]  flex flex-col lg:flex-row justify-center items-center">
            <div className="w-[100%] lg:w-[50%] flex gap-4 mt-8 lg:mt-0 justify-start lg:justify-end">
              <div className="h-[40px] flex justify-center items-center">
                <Phone className="w-[35px] h-[35px] mt-[5px] text-[#fff]" />
              </div>
              <div className="h-[40px] flex flex-col justify-center ">
                <div
                  style={{ fontFamily: "Poppins" }}
                  className="h-[20px] text-[#fff] font-[Poppins] font-[700] text-[15px]"
                >
                  +91 9843649195
                </div>
                <div
                  style={{ fontFamily: "Poppins" }}
                  className="h-[20px] text-[#fff] font-[Poppins] font-[400] text-[15px]"
                >
                  Any questions? Call us.
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-start lg:justify-end items-start lg:items-center gap-4 mt-8 lg:mt-0 px-4">
              <div className="flex-shrink-0 h-[40px] flex justify-center items-center">
                <MapPin className="w-[30px] h-[30px] text-white" />
              </div>
              <a
                href="https://www.google.com/maps/place/Kandaswarnaa+Fabrics/@11.6725952,78.1515202,17z/data=!3m1!4b1!4m6!3m5!1s0xefc971a92ed5743:0xa8bb9aeeb01f54fb!8m2!3d11.6725952!4d78.1515202!16s%2Fg%2F11xm6tsr8f?hl=en-GB&entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center max-w-[300px] no-underline"
              >
                <div
                  style={{ fontFamily: "Poppins" }}
                  className="text-white font-semibold text-sm leading-snug"
                >
                  No. 19-B, Kandaswarna Corporate House,
                </div>
                <div
                  style={{ fontFamily: "Poppins" }}
                  className="text-white font-normal text-sm leading-snug"
                >
                  Ramakrishna Road, Salem, Tamil Nadu 636007
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-[#123f49] backdrop-blur-sm flex justify-center items-center border-b-1 border-[#fff]">
        <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row justify-between py-15">
          <div className="w-[100%] lg:w-[30%]">
            <div
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-[#fff] flex flex-row  text-[18px] font-[Poppins] font-[700] gap-3"
            >
              <span>
                <img src={logo} className=" h-[40px] w-[40px]" alt="" />{" "}
              </span>
              <span className="mt-2">KANDASWARNAA</span>
            </div>
            <div className="w-[100%] flex mt-5">
              <div className="w-[30%] bg-[#8db580] h-[3px]"></div>
              <div className="w-[70%] bg-[#fff] h-[3px]"></div>
            </div>

            <div
              style={{ fontFamily: "Poppins" }}
              className="mt-5 text-[#fff] text-[15px] font-[Poppins] font-[500] text-justify"
            >
              Legacy in Every Thread, Innovation in Every Step
            </div>
          </div>
          <div className="w-[30%] flex flex-col mt-10 lg:mt-0">
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-[#fff] text-[18px] font-[Poppins] font-[700]"
            >
              MENU
            </div>
            <div className="w-[100%] flex mt-5">
              <div className="w-[30%] bg-[#8db580] h-[3px]"></div>
              <div className="w-[70%] bg-[#fff] h-[3px]"></div>
            </div>
            <div>
              <div
                style={{ fontFamily: "Poppins" }}
                onClick={() => {
                  navigate("/");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="relative group mt-7 inline-block text-[#fff] text-[15px] font-[Poppins] font-[500] text-justify cursor-pointer"
              >
                HOME
                <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-[#fff] transition-all duration-400 group-hover:w-full"></span>
              </div>
            </div>
            <div>
              <div
                style={{ fontFamily: "Poppins" }}
                onClick={() => {
                  navigate("/about");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="relative group mt-2 inline-block text-[#fff] text-[15px] font-[Poppins] font-[500] text-justify cursor-pointer"
              >
                ABOUT
                <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-[#fff] transition-all duration-400 group-hover:w-full"></span>
              </div>
            </div>
            <div>
              <div
                style={{ fontFamily: "Poppins" }}
                onClick={() => {
                  navigate("/fabrics");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="relative group mt-2 inline-block text-[#fff] text-[15px] font-[Poppins] font-[500] text-justify cursor-pointer"
              >
                OUR BRANDS
                <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-[#fff] transition-all duration-400 group-hover:w-full"></span>
              </div>
            </div>
            <div>
              {/* <div
                style={{ fontFamily: "Poppins" }}
                className="relative group mt-2 inline-block text-[#fff] text-[15px] font-[Poppins] font-[500] text-justify cursor-pointer"
              >
                PRODUCTS
                <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-[#fff] transition-all duration-400 group-hover:w-full"></span>
              </div> */}
            </div>
            <div>
              <div
                style={{ fontFamily: "Poppins" }}
                onClick={() => {
                  navigate("/contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="relative group mt-2 inline-block text-[#fff] text-[15px] font-[Poppins] font-[500] text-justify cursor-pointer"
              >
                CONTACT US
                <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-[#fff] transition-all duration-400 group-hover:w-full"></span>
              </div>
            </div>
          </div>
          <div className="w-[30%] flex flex-col mt-10 lg:mt-0">
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-[#fff] text-[18px] font-[Poppins] font-[700]"
            >
              SERVICES
            </div>
            <div className="w-[100%] flex mt-5">
              <div className="w-[30%] bg-[#8db580] h-[3px]"></div>
              <div className="w-[70%] bg-[#fff] h-[3px]"></div>
            </div>
            <div>
              <div
                style={{ fontFamily: "Poppins" }}
                onClick={() => {
                  navigate("/fabrics");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="relative group mt-7 inline-block text-[#fff] text-[15px] font-[Poppins] font-[500] text-justify cursor-pointer"
              >
                Textiles
                <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-[#fff] transition-all duration-400 group-hover:w-full"></span>
              </div>
            </div>
            <div>
              <div
                style={{ fontFamily: "Poppins" }}
                 onClick={() => {
                  navigate("/mall");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="relative group mt-2 inline-block text-[#fff] text-[15px] font-[Poppins] font-[500] text-justify cursor-pointer"
              >
                Retail Mall
                <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-[#fff] transition-all duration-400 group-hover:w-full"></span>
              </div>
            </div>
            <div>
              <div
                style={{ fontFamily: "Poppins" }}
                 onClick={() => {
                  navigate("/hitechcity");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="relative group mt-2 inline-block text-[#fff] text-[15px] font-[Poppins] font-[500] text-justify cursor-pointer"
              >
                Spaces For Rent
                <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-[#fff] transition-all duration-400 group-hover:w-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-[#fff] backdrop-blur-sm flex justify-center items-center border-b-1 border-[#fff]">
        <div
          style={{ fontFamily: "Poppins" }}
          className="w-[90%] lg:w-[80%] flex py-5 text-[#7d7a7a] font-[Poppins] font-[400] text-[12px]"
        >
          Copyright © 2025, Kandaswarnaa Groups
        </div>
      </div>
    </>
  );
};

export default Footer;
