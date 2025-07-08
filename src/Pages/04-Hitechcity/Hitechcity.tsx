import React from "react";
import { useNavigate } from "react-router-dom";
import City from "../../assets/Images/City1.jpg";
import Mall3 from "../../assets/Images/Mall3.jpg";
import Land1 from "../../assets/Images/Land1.jpg";
import Techpark1 from "../../assets/Images/TechPark1.jpg";
import HighWay1 from "../../assets/Images/HighWay1.jpg";
import Hotel1 from "../../assets/Images/Hotel1.jpg";
import Hospital1 from "../../assets/Images/Hospital1.jpg";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { TbPlugConnected } from "react-icons/tb";
import { IoIosFastforward, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineMyLocation } from "react-icons/md";

const Hitechcity: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[auto] bg-[#fff]">
      <div
        className="w-full h-[40vh] bg-cover bg-center relative flex justify-center items-center"
        style={{ backgroundImage: `url(${City})` }}
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
              Our Brands
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
            > Land for Sale
             
            </span>{" "}
            -{" "}
            <span
              onClick={() => {
                navigate("/hitechcity");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >Invest in Growth
             
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[auto] flex justify-center items-center flex-col pt-10 pb-6">
        <div
          style={{ fontFamily: "Poppins" }}
          className="text-[14px] w-[80%] text-[#9193a4] font-Poppins font-bold flex justify-center items-center flex-col pt-10"
        >
          The Future of Business & Lifestyle Begins Here On Salem
          <div className="w-[30px] h-[2px] bg-[#8db580] mt-[20px]"></div>
        </div>

        <div
          style={{ fontFamily: "Poppins" }}
          className="text-[#7d7a7a] w-[80%] text-[17px] font-[400] flex justify-center items-center text-center font-Poppins py-10"
        >
          Welcome to Kandaswarnaa Hi-Tech City – a world-class, multi-use land
          development in Salem, strategically located along the Salem–Bangalore
          Highway. Designed to transform the region’s commercial, residential,
          and retail landscape, this expansive development offers premium
          opportunities for businesses, investors, and entrepreneurs. From
          retail malls to tech parks, hospitals to hotels, and workspace zones
          to residential plots – everything you need to build, grow, and thrive
          is right here.
        </div>

        <div className=" w-[80%] mt-[50px] flex flex-col lg:flex-row justify-between">
          <div
            className="w-[100%] lg:w-[49%] h-[500px] bg-cover bg-center relative flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(${Mall3})` }}
          >
            <div className="absolute inset-0 bg-[#000000af]"></div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative w-[90%] flex flex-col justify-center items-center text-center text-4xl px-4 text-[#fff]"
            >
              Premium Shopping Mall Space
            </div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative w-[90%] mt-[10px] flex flex-col justify-center items-center text-center text-[1rem] px-4 text-[#fff]"
            >
              An iconic mall zone curated for global and national retail brands,
              fine dining, entertainment hubs, and lifestyle experiences. A
              modern destination for the city’s next-level shopping and social
              culture.
            </div>
          </div>
          <div
            className="w-[100%] lg:w-[49%] h-[500px] mt-[20px] lg:mt-[0px] bg-cover bg-center relative flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(${Land1})` }}
          >
            <div className="absolute inset-0 bg-[#000000af]"></div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative w-[90%] flex flex-col justify-center items-center text-center text-4xl px-4 text-[#fff]"
            >
              Land for Sale – Invest in Growth
            </div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative w-[90%] mt-[10px] flex flex-col justify-center items-center text-center text-[1rem] px-4 text-[#fff]"
            >
              Choose from a wide range of commercial and multi-use land parcels
              for sale. Whether you're planning to build showrooms, warehouses,
              hospitality projects, or residential towers - the location,
              visibility, and infrastructure make this a high-return investment
              opportunity.
            </div>
          </div>
        </div>

        <div className=" w-[80%] mt-[20px] flex flex-col lg:flex-row justify-between">
          <div
            className="w-[100%] lg:w-[49%] h-[500px] bg-cover bg-center relative flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(${Techpark1})` }}
          >
            <div className="absolute inset-0 bg-[#000000af]"></div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative w-[90%] flex flex-col justify-center items-center text-center text-4xl px-4 text-[#fff]"
            >
              Workspace Zones & Tech Parks
            </div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative w-[90%] mt-[10px] flex flex-col justify-center items-center text-center text-[1rem] px-4 text-[#fff]"
            >
              Empowering business excellence with plug-and-play offices,
              customizable workspaces, and smart tech park environments. Ideal
              for IT firms, BPOs, R&D centres, and corporate headquarters –
              built for future scalability.
            </div>
          </div>
          <div
            className="w-[100%] lg:w-[49%] h-[500px] mt-[20px] lg:mt-[0px] bg-cover bg-center relative flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(${HighWay1})` }}
          >
            <div className="absolute inset-0 bg-[#000000af]"></div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative w-[90%] flex flex-col justify-center items-center text-center text-4xl px-4 text-[#fff]"
            >
              Highway-Facing Showrooms
            </div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative w-[90%] mt-[10px] flex flex-col justify-center items-center text-center text-[1rem] px-4 text-[#fff]"
            >
              Establish your brand on one of South India’s most dynamic routes.
              With high-visibility highway frontage, these spaces are perfect
              for auto showrooms, furniture outlets, electronics, and lifestyle
              brands.
            </div>
          </div>
        </div>

        <div className=" w-[80%] mt-[20px] flex flex-col lg:flex-row justify-between">
          <div
            className="w-[100%] lg:w-[49%] h-[500px] bg-cover bg-center relative flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(${Hotel1})` }}
          >
            <div className="absolute inset-0 bg-[#000000af]"></div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative w-[90%] flex flex-col justify-center items-center text-center text-4xl px-4 text-[#fff]"
            >
              Hotels & Convention Spaces
            </div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative w-[90%] mt-[10px] flex flex-col justify-center items-center text-center text-[1rem] px-4 text-[#fff]"
            >
              With Salem rising as a business and travel destination, we offer
              prime land allocations for luxury and business hotels, serviced
              apartments, and convention centers. Partner with us to build
              hospitality ventures that matter.
            </div>
          </div>
          <div
            className="w-[100%] lg:w-[49%] h-[500px] mt-[20px] lg:mt-[0px] bg-cover bg-center relative flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(${Hospital1})` }}
          >
            <div className="absolute inset-0 bg-[#000000af]"></div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative w-[90%] flex flex-col justify-center items-center text-center text-4xl px-4 text-[#fff]"
            >
              Hospitals & Health Infrastructure
            </div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative w-[90%] mt-[10px] flex flex-col justify-center items-center text-center text-[1rem] px-4 text-[#fff]"
            >
              Designated healthcare zones with facilities for multi-specialty
              hospitals, wellness clinics, diagnostics centers, and pharmacies.
              A crucial step toward a smarter, healthier Salem. Master-Planned
              for Smart Living & Business
            </div>
          </div>
        </div>

        <div
          className="text-[#3d404e] w-[80%] text-[44px] mt-[50px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Why Choose Kandaswarnaa Hi-Tech City?
        </div>

        <div className="w-[80%]">
          <div className="w-[100%] flex flex-wrap justify-around pt-10 pb-8">
            <div className="w-[280px] justify-center items-center flex flex-col h-[200px] hover:bg-[#8db5802d] transition-all ease-in-out duration-400 mt-5 lg:mt-0">
              {/* <img className="w-[100px]" src={Logo} alt="" /> */}
              <FaLocationArrow className="text-5xl text-[#a8862f]" />
              <div
                style={{ fontFamily: "Poppins" }}
                className="text-[18px] font-Poppins text-[#7d7a7a] font-[400] mt-5 w-[100%] text-center"
              >
                Unmatched Location - On the thriving Salem–Bangalore Highway
              </div>
            </div>
            <div className="w-[280px] justify-center items-center flex flex-col h-[200px] hover:bg-[#8db5802d] transition-all ease-in-out duration-400 mt-5 lg:mt-0">
              {/* <img className="w-[100px]" src={Logo} alt="" /> */}
              <TbPlugConnected className="text-5xl text-[#a8862f]" />
              <div
                style={{ fontFamily: "Poppins" }}
                className="text-[18px] font-Poppins text-[#7d7a7a] font-[400] mt-5 w-[100%] text-center"
              >
                High Accessibility – Connected to major highways, railways, and
                upcoming industrial corridors
              </div>
            </div>
            <div className="w-[280px] justify-center items-center flex flex-col h-[200px] hover:bg-[#8db5802d] transition-all ease-in-out duration-400 mt-5 lg:mt-0">
              {/* <img className="w-[100px]" src={Logo} alt="" /> */}
              <IoIosFastforward className="text-5xl font-bold text-[#a8862f] " />
              <div
                style={{ fontFamily: "Poppins" }}
                className="text-[18px] font-Poppins text-[#7d7a7a] font-[400] mt-5 w-[100%] text-center"
              >
                Dynamic Potential – Fast-growing zone ideal for commercial,
                tech, and lifestyle investments
              </div>
            </div>
            <div className="w-[280px] justify-center items-center flex flex-col h-[200px] hover:bg-[#8db5802d] transition-all ease-in-out duration-400 mt-5 lg:mt-0">
              {/* <img className="w-[100px]" src={Logo} alt="" /> */}

              <IoMdCheckmarkCircleOutline className="text-5xl text-[#a8862f] " />
              <div
                style={{ fontFamily: "Poppins" }}
                className="text-[18px] font-Poppins text-[#7d7a7a] font-[400] mt-5 w-[100%] text-center"
              >
                Ready Infrastructure – Development-ready land, approvals, and
                utilities
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-[#3d404e] w-[80%] text-[44px] mt-[50px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Build Your Vision. Expand Your Possibilities.
        </div>

        <div
          style={{ fontFamily: "Poppins" }}
          className="text-[#7d7a7a] w-[80%] text-[17px] font-[400] flex justify-center items-center text-center font-Poppins py-10"
        >
          Whether you’re a real estate developer, business owner, franchisee,
          healthcare provider, or industrial player — Kandaswarna Hi-Tech City
          offers the land, platform, and ecosystem you need to succeed.
        </div>

        <div
          className="w-[80%] flex flex-col lg:flex-row justify-center mb-[50px] items-center gap-[40px]"
          onClick={() => {
            navigate("/contact");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <div className="flex flex-col lg:flex-row justify-center items-center gap-[10px]">
            <div>
              <div className="w-[50px] h-[50px] bg-[#123f49] flex justify-center items-center text-[#fff] text-[1rem] rounded-full">
                <FaPhoneAlt />
              </div>
            </div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-[#7d7a7a] text-[17px] font-[400] underline"
            >
              Talk to Us Today
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-[10px]">
            <div>
              <div className="w-[50px] h-[50px] bg-[#123f49] flex justify-center items-center text-[#fff] text-[1.5rem] rounded-full">
                <MdOutlineMyLocation />
              </div>
            </div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-[#7d7a7a] text-[17px] font-[400] underline"
            >
              Site Visits Available on Request
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hitechcity;
