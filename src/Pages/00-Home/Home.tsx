import React, { useState } from "react";
import { useEffect } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import fabrics1 from "../../assets/Images/Fabrics1.jpg";
// import Mall1 from "../../assets/Images/Mall1.jpg";
// import Construction1 from "../../assets/Images/Construction1.jpg";
import { GrAchievement } from "react-icons/gr";
import { FaPeopleCarry } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RiGlobalLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { SiSitepoint } from "react-icons/si";
import land from "../../assets/Home/land.jpg";
import mall from "../../assets/Home/mall.jpg";
import fabric from "../../assets/Home/fabric.jpg";
// import { motion } from "framer-motion";

import "./Home.css";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  SendHorizontal,
} from "lucide-react";
import People1 from "../../assets/Images/People1.jpg";
// import Logo from "../../assets/Logo/Logo.png";
import Team1 from "../../assets/Images/Team1.jpg";
// import Example1 from "../../assets/Images/Example1.jpg";
import Contact1 from "../../assets/Images/Contact1.jpg";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { useNavigate } from "react-router-dom";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    e.preventDefault();
    const to = "fabricskandaswarnaa@gmail.com";
    const subject = encodeURIComponent("Feedback");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n\nMessage:\n${description}\n\nBest regards,\n${name}`
    );

    const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    setName("");
    setEmail("");
    setPhone("");
    setDescription("");
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const handleNext = () => {
    setCurrentSlide((prev: any) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev: any) => (prev - 1 + totalSlides) % totalSlides);
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[auto] bg-[#fff]">
      {/* Top session */}

      <div className="w-full h-auto lg:h-[100vh] flex flex-col lg:flex-row">
        {/* Section 2 - Mall */}
        <div
          className={`w-full lg:w-1/3 h-[100vh] bg-cover bg-center relative flex justify-center items-center transform transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            backgroundImage: `url(${mall})`,
            transitionDelay: "300ms",
          }}
        >
          <div className="absolute inset-0 bg-[#00000094] transition-opacity duration-700"></div>
          <div
            className={`relative w-[90%] flex flex-col justify-center items-center text-center px-4 transform transition-all duration-800 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                transitionDelay: "700ms",
              }}
              className={`text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold transform transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Kandaswarnaa Shopping Mall
            </div>
            <div
              style={{ fontFamily: "Poppins", transitionDelay: "900ms" }}
              className={`text-white text-[14px] md:text-[16px] font-semibold mt-4 transform transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Premium shopping mall space for rent in Prime Spot, Salem
            </div>
            <div
              className={`bg-[#8db580] w-[160px] md:w-[180px] mt-8 hover:bg-transparent hover:scale-105 transition-all ease-in-out duration-200 border-2 border-[#8db580] text-[14px] font-[700] h-[45px] text-white cursor-pointer flex justify-center items-center rounded-3xl transform ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-95"
              }`}
              style={{ transitionDelay: "1100ms" }}
              onClick={() => {
                navigate("/mall");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Explore More
            </div>
          </div>
        </div>
        {/* Section 1 - Fabric */}
        <div
          className={`w-full lg:w-1/3 h-[100vh] bg-cover bg-center relative flex justify-center items-center transform transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            backgroundImage: `url(${fabric})`,
            transitionDelay: "0ms",
          }}
        >
          <div className="absolute inset-0 bg-[#00000094] transition-opacity duration-700"></div>
          <div
            className={`relative w-[90%] flex flex-col justify-center items-center text-center px-4 transform transition-all duration-800 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                transitionDelay: "400ms",
              }}
              className={`text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold transform transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Kandaswarnaa Fabrics
            </div>
            <div
              style={{ fontFamily: "Poppins", transitionDelay: "600ms" }}
              className={`text-white text-[14px] md:text-[16px] font-semibold mt-4 transform transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Export & Import of premium fabrics like Sampin, Sarees, Kurtis,
              and Party Wear.
            </div>
            <div
              className={`bg-[#8db580] w-[160px] md:w-[180px] mt-8 hover:bg-transparent hover:scale-105 transition-all ease-in-out duration-200 border-2 border-[#8db580] text-[14px] font-[700] h-[45px] text-white cursor-pointer flex justify-center items-center rounded-3xl transform ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-95"
              }`}
              onClick={() => {
                console.log("clicked");
                navigate("/fabrics");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{ transitionDelay: "800ms" }}
            >
              Explore More
            </div>
          </div>
        </div>

        {/* Section 3 - Land */}
        <div
          className={`w-full lg:w-1/3 h-[100vh] bg-cover bg-center relative flex justify-center items-center transform transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            backgroundImage: `url(${land})`,
            transitionDelay: "600ms",
          }}
        >
          <div className="absolute inset-0 bg-[#00000094] transition-opacity duration-700"></div>
          <div
            className={`relative w-[90%] flex flex-col justify-center items-center text-center px-4 transform transition-all duration-800 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                transitionDelay: "1000ms",
              }}
              className={`text-white text-[28px] md:text-[32px] lg:text-[36px] font-bold transform transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Kandaswarnaa Hi Tech City
            </div>
            <div
              style={{ fontFamily: "Poppins", transitionDelay: "1200ms" }}
              className={`text-white text-[14px] md:text-[16px] font-semibold mt-4 transform transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Premium Shopping Mall Space for Rental in Prime Location of Salem
              - Bangalore Highway
            </div>
            <div
              className={`bg-[#8db580] w-[160px] md:w-[180px] mt-8 hover:bg-transparent hover:scale-105 transition-all ease-in-out duration-200 border-2 border-[#8db580] text-[14px] font-[700] h-[45px] text-white cursor-pointer flex justify-center items-center rounded-3xl transform ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-6 scale-95"
              }`}
              style={{ transitionDelay: "1400ms" }}
              onClick={() => {
                navigate("/hitechcity");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Explore More
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="w-full h-[auto] flex justify-center items-center flex-col pt-10 pb-6">
        <div
          style={{ fontFamily: "Poppins" }}
          className="text-[14px] text-[#9193a4] font-Poppins font-bold flex justify-center items-center flex-col pt-10"
        >
          ABOUT US
          <div className="w-[30px] h-[2px] bg-[#8db580] mt-[20px]"></div>
        </div>
        <div className="w-[100%] flex justify-center items-center py-10">
          <div className="w-[80%] flex justify-between items-center flex-col lg:flex-row">
            <div className="w-[100%] lg:w-[40%]">
              <div>
                <div
                  className="text-[#3d404e] text-[44px]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Our Legacy
                </div>
                <div
                  style={{ fontFamily: "Poppins" }}
                  className="text-[#7d7a7a] text-[17px] font-[400] font-Poppins text-justify pt-8 pb-10"
                >
                  <div className="flex flex-row gap-4">
                    {" "}
                    <span>
                      {" "}
                      <SiSitepoint className="text-[#8db580]" />
                    </span>{" "}
                    <span>
                      Founded in 1945 by the visionary (late) Mr. Kandasamy,
                      Kandaswarnaa began as a modest textile trading company,
                      dealing with handloom sarees and dhotis crafted by local
                      artisans.
                    </span>
                  </div>
                  <div className="flex flex-row gap-4">
                    {" "}
                    <span>
                      {" "}
                      <SiSitepoint className="text-[#8db580]" />
                    </span>{" "}
                    <span>
                      Over the years, the company flourished under the
                      leadership of our current chairperson, Mr.K.B.Srinivasan
                      and Mrs.Kandaswarnaa who introduced value-based, niche
                      textile products to domestic and international markets.
                    </span>
                  </div>
                  <div className="flex flex-row gap-4">
                    {" "}
                    <span>
                      {" "}
                      <SiSitepoint className="text-[#8db580]" />
                    </span>{" "}
                    <span>
                      Today, Kandaswarnaa is a trusted B2B textile name, known
                      for its innovative design, fabric excellence, and
                      wholesale leadership in Tamil Nadu. Based in Salem, we
                      continue to blend legacy and design to serve the future of
                      fabric.
                    </span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div
                    onClick={() => {
                      navigate("/about");
                      console.log("clicked");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    style={{ fontFamily: "Poppins" }}
                    className="bg-[#8db580] w-[200px] hover:bg-transparent transition-all ease-in-out duration-200 border-2 border-[#8db580] relative text-[15px] group font-[Poppins] py-[15px] px-[20px] font-[700] h-[50px] text-[#fff] hover:text-[#8db580] cursor-pointer flex gap-1 justify-center items-center rounded-4xl"
                  >
                    WHO WE ARE <ArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] mt-10 lg:mt-0 lg:w-[50%]">
              <div className="w-[100%] flex  justify-center">
                <img className="w-[100%]" src={People1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col pb-10">
        <div className="w-[80%] flex justify-center items-center flex-col">
          <div
            className="text-[#3d404e] text-[44px]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why We're Trusted
          </div>
          <div className="w-[100%] flex flex-wrap justify-around pt-10 pb-8">
            <div className="w-[280px] justify-center items-center flex flex-col h-[200px] hover:bg-[#8db5802d] transition-all ease-in-out duration-400 mt-5 lg:mt-0">
              {/* <img className="w-[100px]" src={Logo} alt="" /> */}
              <GrAchievement className="text-5xl text-[#a8862f] " />
              <div
                style={{ fontFamily: "Poppins" }}
                className="text-[18px] font-Poppins text-[#7d7a7a] font-[400] mt-5 w-[100%] text-center"
              >
                75+ Years of Textile Excellence
              </div>
            </div>
            <div className="w-[280px] justify-center items-center flex flex-col h-[200px] hover:bg-[#8db5802d] transition-all ease-in-out duration-400 mt-5 lg:mt-0">
              {/* <img className="w-[100px]" src={Logo} alt="" /> */}
              <FaPeopleCarry className="text-5xl text-[#a8862f]" />
              <div
                style={{ fontFamily: "Poppins" }}
                className="text-[18px] font-Poppins text-[#7d7a7a] font-[400] mt-5 w-[100%] text-center"
              >
                Leading Textile Wholesaler in Tamil Nadu
              </div>
            </div>
            <div className="w-[280px] justify-center items-center flex flex-col h-[200px] hover:bg-[#8db5802d] transition-all ease-in-out duration-400 mt-5 lg:mt-0">
              {/* <img className="w-[100px]" src={Logo} alt="" /> */}
              <VscWorkspaceTrusted className="text-5xl font-bold text-[#a8862f] " />
              <div
                style={{ fontFamily: "Poppins" }}
                className="text-[18px] font-Poppins text-[#7d7a7a] font-[400] mt-5 w-[100%] text-center"
              >
                International Quality & Design
              </div>
            </div>
            <div className="w-[280px] justify-center items-center flex flex-col h-[200px] hover:bg-[#8db5802d] transition-all ease-in-out duration-400 mt-5 lg:mt-0">
              {/* <img className="w-[100px]" src={Logo} alt="" /> */}

              <RiGlobalLine className="text-5xl text-[#a8862f] " />
              <div
                style={{ fontFamily: "Poppins" }}
                className="text-[18px] font-Poppins text-[#7d7a7a] font-[400] mt-5 w-[100%] text-center"
              >
                Salem-Based, Globally Connected
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div
        className="w-full h-[100vh] bg-cover bg-center flex justify-center items-center bg-fixed relative before:absolute before:inset-0 before:bg-[#000000d9] before:content-['']"
        style={{ backgroundImage: `url(${Team1})` }}
      >
        <div className="absolute w-[100%] h-[100vh] flex justify-center items-center">
          <div className="w-[80%] flex flex-col lg:flex-row justify-between">
            <div className="w-[100%] lg:w-[30%]">
              <div
                style={{ fontFamily: "Poppins" }}
                className="text-[14px] text-[#fff] font-Poppins font-bold flex  flex-col pt-10"
              >
                Our Brands
                <div className="w-[30px] h-[2px] bg-[#8db580] mt-[20px]"></div>
              </div>
              <div
                className="text-[#fff] w-100%[] text-[25px] lg:text-[44px] pt-6 lg:pt-10"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What We Are Providing
              </div>
            </div>
            <div className="w-[100%] lg:w-[60%]">
              <Carousel
                selectedItem={currentSlide}
                onChange={setCurrentSlide}
                showThumbs={false}
                showArrows={false}
                infiniteLoop={false} // We'll handle loop manually
                showStatus={false}
                swipeable={true}
                emulateTouch={true}
                showIndicators={false}
              >
                <div className="w-[100%] h-[60vh] lg:h-[50vh]">
                  <div
                    className="text-[#fff] text-[20px] lg:text-[44px] pt-5 lg:pt-10"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Kandaswarnaa Fabrics
                  </div>
                  <div
                    style={{ fontFamily: "Poppins" }}
                    className="text-[16px] lg:text-[18px] font-Poppins text-[#7d7a7a] font-[400] text-center pt-5"
                  >
                    We import and export trendy, high-quality apparel for men,
                    women, and kids.
                  </div>
                  <div
                    style={{ fontFamily: "Poppins" }}
                    className="flex flex-col gap-4 mt-5"
                  >
                    <div
                      style={{ fontFamily: "Poppins" }}
                      className="text-[14px] font-Poppins text-[#fff] font-[400] text-center flex gap-2"
                    >
                      <ArrowRight />
                      Sourcing & Exporting Quality Garments
                    </div>
                    <div
                      style={{ fontFamily: "Poppins" }}
                      className="text-[14px] font-Poppins text-[#fff] font-[400] text-center flex gap-2"
                    >
                      <ArrowRight />
                      Custom Bulk Orders for Businesses
                    </div>
                    <div
                      style={{ fontFamily: "Poppins" }}
                      className="text-[14px] font-Poppins text-[#fff] font-[400] text-center flex gap-2"
                    >
                      <ArrowRight />
                      Trend-Focused Collections Updated Seasonally
                    </div>
                  </div>
                </div>
                <div className="w-[100%] h-[60vh] lg:h-[50vh]">
                  <div
                    className="text-[#fff] text-[20px] lg:text-[44px] pt-5 lg:pt-10"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Kandaswarnaa Shopping Mall
                  </div>
                  <div
                    style={{ fontFamily: "Poppins" }}
                    className="text-[16px] lg:text-[18px] font-Poppins text-[#7d7a7a] font-[400] text-center pt-5"
                  >
                    Premium shop spaces in central Salem with high footfall,
                    great visibility, and customizable layouts — ideal for
                    boutiques, showrooms, and lifestyle brands.
                  </div>
                  <div className="flex flex-col gap-4 mt-5">
                    <div
                      style={{ fontFamily: "Poppins" }}
                      className="text-[14px] font-Poppins text-[#fff] font-[400] text-center flex gap-2"
                    >
                      <ArrowRight />
                      Customizable Layouts for Shops & Showrooms
                    </div>
                    <div
                      style={{ fontFamily: "Poppins" }}
                      className="text-[14px] font-Poppins text-[#fff] font-[400] text-center flex gap-2"
                    >
                      <ArrowRight />
                      Prime Central Location in Salem
                    </div>
                    {/* <div
                      style={{ fontFamily: "Poppins" }}
                      className="text-[14px] font-Poppins text-[#fff] font-[400] text-center flex gap-2"
                    >
                      <ArrowRight />
                      Well-Maintained Facilities and Security
                    </div>
                    <div
                      style={{ fontFamily: "Poppins" }}
                      className="text-[14px] font-Poppins text-[#fff] font-[400] text-center flex gap-2"
                    >
                      <ArrowRight />
                      On-time Logistics & Delivery
                    </div> */}
                  </div>
                </div>

                <div className="w-[100%] h-[60vh] lg:h-[50vh]">
                  <div
                    className="text-[#fff] text-[20px] lg:text-[44px] pt-5 lg:pt-10"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Kandaswarnaa Hi Tech City
                  </div>
                  <div className="text-[16px] lg:text-[18px] font-Poppins text-[#7d7a7a] font-[400] text-center pt-5">
                    We offer turnkey construction solutions - from high-rise
                    buildings to industrial structures - with a focus on
                    quality, safety, and sustainability.
                  </div>
                  <div className="flex flex-col gap-4 mt-5">
                    <div
                      style={{ fontFamily: "Poppins" }}
                      className="text-[14px] font-Poppins text-[#fff] font-[400] text-start flex gap-2"
                    >
                      <ArrowRight />
                      Residential, Commercial & Industrial Projects
                    </div>
                    <div
                      style={{ fontFamily: "Poppins" }}
                      className="text-[14px] font-Poppins text-[#fff] font-[400] text-center flex gap-2"
                    >
                      <ArrowRight />
                      In-House Architects & Engineers
                    </div>
                    <div
                      style={{ fontFamily: "Poppins" }}
                      className="text-[14px] font-Poppins text-[#fff] font-[400] text-center flex gap-2"
                    >
                      <ArrowRight />
                      Modern Construction Technology
                    </div>
                    <div
                      style={{ fontFamily: "Poppins" }}
                      className="text-[14px] font-Poppins text-[#fff] font-[400] text-center flex gap-2"
                    >
                      <ArrowRight />
                      On-Time, Budget-Conscious Delivery
                    </div>
                  </div>
                </div>
              </Carousel>

              {/* Custom Next and Back buttons */}
              <div className="w-[100%] flex justify-end">
                <div className="flex gap-2">
                  <div className="">
                    <button
                      onClick={handlePrev}
                      className="bg-[#8db580] text-white p-2 rounded"
                    >
                      <ChevronLeft />
                    </button>
                  </div>
                  <div className="">
                    <button
                      onClick={handleNext}
                      className="bg-[#8db580] text-white p-2 rounded"
                    >
                      <ChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project */}
      {/* <div className="w-full flex justify-center items-center flex-col py-10">
        <div
          style={{ fontFamily: "Poppins" }}
          className="text-[14px] text-[#9193a4] font-Poppins font-bold flex justify-center items-center flex-col pt-10"
        >
          OUR PROJECTS
          <div className="w-[30px] h-[2px] bg-[#8db580] mt-[20px]"></div>
        </div>
        <div className="w-[80%] flex justify-center flex-col">
          <div
            className="text-[#3d404e] text-[20px] lg:text-[44px] py-5 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Explore our flagship developments across textile trade, mall
            construction, and infrastructure.
          </div>
          <div className="w-[100%] flex flex-wrap justify-between py-5">
            <div className="w-[300px]">
              <img className="w-[100%]" src={Example1} alt="" />
              <div
                className="text-[#7d7a7a] text-[20px] font-[700] py-5 text-start"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Example 1
              </div>
              <div
                style={{ fontFamily: "'Poppins', serif" }}
                className="text-[#7d7a7a] text-[14px] font-[400]"
              >
                We’ve been using Financer to prototype designs quickly and
                efficiently. Needless to say we’re hugely impressed by the style
                and value.
              </div>
            </div>
            <div className="w-[300px] mt-4 lg:mt-0">
              <img className="w-[100%]" src={Example1} alt="" />
              <div
                className="text-[#7d7a7a] text-[20px] font-[700] py-5 text-start"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Example 1
              </div>
              <div
                style={{ fontFamily: "'Poppins', serif" }}
                className="text-[#7d7a7a] text-[14px] font-[400]"
              >
                We’ve been using Financer to prototype designs quickly and
                efficiently. Needless to say we’re hugely impressed by the style
                and value.
              </div>
            </div>
            <div className="w-[300px] mt-4 lg:mt-0">
              <img className="w-[100%]" src={Example1} alt="" />
              <div
                className="text-[#7d7a7a] text-[20px] font-[700] py-5 text-start"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Example 1
              </div>
              <div
                style={{ fontFamily: "'Poppins', serif" }}
                className="text-[#7d7a7a] text-[14px] font-[400]"
              >
                We’ve been using Financer to prototype designs quickly and
                efficiently. Needless to say we’re hugely impressed by the style
                and value.
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-5 pb-5">
            <div
              style={{ fontFamily: "Poppins" }}
              className="bg-[#8db580] w-[200px] hover:bg-transparent transition-all ease-in-out duration-200 border-2 border-[#8db580] relative text-[15px] group font-[Poppins] py-[15px] px-[20px] font-[700] h-[50px] text-[#fff] hover:text-[#8db580] cursor-pointer flex gap-1 justify-center items-center rounded-4xl"
            >
              Load More <ArrowUpRight />
            </div>
          </div>
        </div>
      </div> */}

      {/* Testimonials */}
      <div className="w-full flex justify-center items-center flex-col py-10">
        <div
          style={{ fontFamily: "Poppins" }}
          className="text-[14px] text-[#9193a4] font-Poppins font-bold flex justify-center items-center flex-col pt-10"
        >
          HAPPY CLIENTS
          <div className="w-[30px] h-[2px] bg-[#8db580] mt-[20px]"></div>
        </div>
        <div className="w-[80%] flex justify-center flex-col">
          <div
            className="text-[#3d404e] text-[20px] lg:text-[44px] py-5 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Testimonials from our proudly clients
          </div>
          <div className="w-full h-[70vh]">
            <Carousel
              autoPlay
              infiniteLoop
              interval={3000}
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              stopOnHover={false}
            >
              <div className="w-full h-[70vh] flex justify-center items-center bg-[#fff]">
                <div className="w-[100%] h-[60vh] lg:h-[50vh] lg:w-[60%] flex flex-col justify-center items-center border-1 rounded shadow">
                  {/* <img
                    style={{ width: "80px", height: "80px" }}
                    src={Logo}
                    alt=""
                  /> */}
                  <FaUserAlt className="text-[#a6852f] text-5xl" />
                  <div
                    style={{ fontFamily: "Poppins" }}
                    className="mt-5 text-[#3d404e] font-[800] text-[18px] lg:text-[22px]"
                  >
                    User
                  </div>
                  <div className="mt-5">
                    <span
                      className="flex gap-1 text-amber-400"
                      role="img"
                      aria-label="Rating: 3 out of 5 stars"
                    >
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div
                    style={{ fontFamily: "Poppins" }}
                    className="mt-5 text-[#3d404e] font-[400] text-[14px] lg:text-[16px] px-10"
                  >
                    Kandaswarnaa Clothing is my go-to for the latest fashion
                    trends in Salem. Their collection is always fresh, and the
                    quality is top-notch. I always receive compliments when I
                    wear their outfits. Shopping here feels like shopping in a
                    metro city, but right in Salem! - Meera S., Salem
                  </div>
                </div>
              </div>
              <div className="w-full h-[70vh] flex justify-center items-center bg-[#fff]">
                <div className="w-[100%] h-[60vh] lg:h-[50vh] lg:w-[60%] flex flex-col justify-center items-center border-1 rounded shadow">
                  {/* <img
                    style={{ width: "80px", height: "80px" }}
                    src={Logo}
                    alt=""
                  /> */}
                  <FaUserAlt className="text-[#a6852f] text-5xl" />
                  <div
                    style={{ fontFamily: "Poppins" }}
                    className="mt-5 text-[#3d404e] font-[800] text-[18px] lg:text-[22px]"
                  >
                    User
                  </div>
                  <div className="mt-5">
                    <span
                      className="flex gap-1 text-amber-400"
                      role="img"
                      aria-label="Rating: 3 out of 5 stars"
                    >
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <span aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div
                    style={{ fontFamily: "Poppins" }}
                    className="mt-5 text-[#3d404e] font-[400] text-[14px] lg:text-[16px] px-10"
                  >
                    The location is perfect, the parking is ample, and the mall
                    attracts the right crowd for my cafe. Thanks to Kandaswarnaa
                    Mall, my business has grown steadily since the opening. -
                    Vignesh K., Cafe Owner, Salem
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div
        className="w-full h-[100vh] flex justify-center items-center flex-row py-10 bg-center bg-cover"
        style={{ backgroundImage: `url(${Contact1})` }}
      >
        <div className="w-[80%] flex justify-center items-center">
          <div className="w-[100%] lg:w-[50%] ">
            <div
              style={{ fontFamily: "Poppins" }}
              className="w-[100%] text-[14px] text-[#9193a4] font-Poppins font-bold flex-col pt-10"
            >
              Contact Us
              <div className="w-[30px] h-[2px] bg-[#8db580] mt-[20px]"></div>
            </div>
            <div
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="w-[100%] text-[#3d404e] text-[25px] lg:text-[54px] font-[400]"
            >
              Get Some Information
            </div>
            <div className="w-[100%] mt-5 flex gap-5">
              <Input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-[50px] text-[14px]"
                style={{ fontFamily: "Poppins" }}
                placeholder="Enter Name"
              />
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[50px] text-[14px]"
                style={{ fontFamily: "Poppins" }}
                placeholder="Enter Email"
              />
            </div>
            <div className="mt-5 flex gap-5">
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-[50px] text-[14px]"
                style={{ fontFamily: "Poppins" }}
                placeholder="Enter Mobile Number"
              />
            </div>
            <div className="mt-5 flex gap-5">
              <Textarea
                id="message"
                name="message"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="h-[80px] text-[14px]"
                style={{ fontFamily: "Poppins" }}
                placeholder="Enter Message"
              />
            </div>
            <div className="mt-10 flex gap-5">
              <div
                style={{ fontFamily: "Poppins" }}
                className="bg-[#8db580] w-[200px] hover:bg-transparent transition-all ease-in-out duration-200 border-2 border-[#8db580] relative text-[15px] group font-[Poppins] py-[15px] px-[20px] font-[700] h-[50px] text-[#fff] hover:text-[#8db580] cursor-pointer flex gap-1 justify-center items-center rounded-4xl"
                onClick={handleClick}
              >
                Submit <SendHorizontal />
              </div>
            </div>
          </div>
          <div className="w-[0%] lg:w-[50%]   flex justify-center flex-col"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
