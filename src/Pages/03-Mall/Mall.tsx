import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Mall2 from "../../assets/Images/Mall2.jpg";
import { FaBookmark } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RiCustomSize } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { SendHorizontal } from "lucide-react";
import Contact1 from "../../assets/Images/Contact1.jpg";

const Mall: React.FC = () => {
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
  };

  return (
    <div className="w-full h-[auto] bg-[#fff]">
      <div
        className="w-full h-[40vh] bg-cover bg-center relative flex justify-center items-center"
        style={{ backgroundImage: `url(${Mall2})` }}
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
                navigate("/mall");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Kandaswarnaa Shopping Mall
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[auto] flex justify-center items-center flex-col pt-10 pb-6">
        <div
          style={{ fontFamily: "Poppins" }}
          className="text-[14px] text-[#9193a4] font-Poppins font-bold flex justify-center items-center flex-col pt-10"
        >
          Your Retail Growth Begins Here
          <div className="w-[30px] h-[2px] bg-[#8db580] mt-[20px]"></div>
        </div>

        <div
          style={{ fontFamily: "Poppins" }}
          className="text-[#7d7a7a] w-[80%] text-[17px] font-[400] flex justify-center items-center text-center font-Poppins py-10"
        >
          Looking for a shop for rent in Salem? Our shopping mall space for rent
          offers premium infrastructure, high footfall , and a thriving retail
          ecosystem.
        </div>

        <div
          className="text-[#3d404e] text-[44px]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Featrures
        </div>

        <div className="w-[80%]">
          <div className="w-[100%] flex flex-wrap justify-around pt-10 pb-8">
            <div className="w-[280px] justify-center items-center flex flex-col h-[200px] hover:bg-[#8db5802d] transition-all ease-in-out duration-400 mt-5 lg:mt-0">
              {/* <img className="w-[100px]" src={Logo} alt="" /> */}
              <FaMapLocationDot className="text-5xl text-[#a8862f]" />
              <div
                style={{ fontFamily: "Poppins" }}
                className="text-[18px] font-Poppins text-[#7d7a7a] font-[400] mt-5 w-[100%] text-center"
              >
                Central Salem Location
              </div>
            </div>
            <div className="w-[280px] justify-center items-center flex flex-col h-[200px] hover:bg-[#8db5802d] transition-all ease-in-out duration-400 mt-5 lg:mt-0">
              {/* <img className="w-[100px]" src={Logo} alt="" /> */}
              <RiCustomSize className="text-5xl text-[#a8862f]" />
              <div
                style={{ fontFamily: "Poppins" }}
                className="text-[18px] font-Poppins text-[#7d7a7a] font-[400] mt-5 w-[100%] text-center"
              >
                Customizable Mall Layout
              </div>
            </div>
            <div className="w-[280px] justify-center items-center flex flex-col h-[200px] hover:bg-[#8db5802d] transition-all ease-in-out duration-400 mt-5 lg:mt-0">
              {/* <img className="w-[100px]" src={Logo} alt="" /> */}
              <VscWorkspaceTrusted className="text-5xl font-bold text-[#a8862f] " />
              <div
                style={{ fontFamily: "Poppins" }}
                className="text-[18px] font-Poppins text-[#7d7a7a] font-[400] mt-5 w-[100%] text-center"
              >
                Branding Support for Retailers
              </div>
            </div>
            <div className="w-[280px] justify-center items-center flex flex-col h-[200px] hover:bg-[#8db5802d] transition-all ease-in-out duration-400 mt-5 lg:mt-0">
              {/* <img className="w-[100px]" src={Logo} alt="" /> */}

              <FaBookmark className="text-5xl text-[#a8862f] " />
              <div
                style={{ fontFamily: "Poppins" }}
                className="text-[18px] font-Poppins text-[#7d7a7a] font-[400] mt-5 w-[100%] text-center"
              >
                Ideal for boutiques, showrooms, and lifestyle brands
              </div>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <div
          className="w-full h-[100vh] flex justify-center items-center flex-row mt-[30px] bg-center bg-cover"
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
    </div>
  );
};

export default Mall;
