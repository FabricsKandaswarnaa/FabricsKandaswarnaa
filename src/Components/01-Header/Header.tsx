import { ArrowUp, Menu, PhoneCall, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Navbar from "../03-Navbar/Navbar";
import MobileNavbar from "../03-Navbar/MobileNavbar";
import logo from "../../assets/Logo/Logo.png";
import { MdFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu open state

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      setScrolled(scrollY > viewportHeight * 0.05);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Header */}
      <div className="fixed top-0 w-full z-[1000] bg-[#ffffff]">
        <div className="mx-auto grid w-full max-w-full grid-cols-4 gap-6 px-6 py-2 text-sm text-[#123f49] font-bold md:grid-cols-8 lg:max-w-5xl lg:grid-cols-12 xl:max-w-7xl 2xl:max-w-[96rem]">
          <div className="col-span-2 font-semibold font-Poppins items-center md:col-span-4 lg:col-span-6">
            <a
              href="tel:+919843649195"
              className="flex items-center font-bold gap-2 transition-colors duration-300 hover:text-[#123f49]"
            >
              <PhoneCall size={15} className=" animate-pulse" />
              +91 9843649195
            </a>
          </div>
          <div className="col-span-2 items-center justify-end gap-6 md:col-span-4 lg:col-span-6">
            <div className="flex items-center justify-end gap-4">
              <a
                href="https://www.facebook.com/share/16sNDAZAag/"
                className=" text-[#0168ff] hover:text-[#8db580]"
              >
                <MdFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/swarnasaris?igsh=MWFlMnlueWp1MTB0dw=="
                className="text-[#ec262c] hover:text-[#8db580]"
              >
                <RiInstagramFill size={20} />
              </a>
              {/* <a href="#" className="hover:text-[#8db580]">
                <GrTwitter />
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full h-[10vh] fixed top-[36px] flex justify-center z-[999] items-center ${
          scrolled ? "bg-[#123f49] backdrop-blur-sm" : "bg-transparent"
        } transition-all duration-100 ease-in-out`}
      >
        <div className="lg:w-[80%] w-[95%] flex h-full justify-between rounded-b-2xl px-5 py-1">
          <div className="w-[50%] lg:w-[15%] h-full flex gap-3 items-center cursor-pointer">
            <img src={logo} className="h-[50px]" alt="logo" />
            <span
              className="text-white font-semibold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              KANDASWARNAA
            </span>
          </div>

          <div className="w-[20%] lg:w-[80%] flex justify-end">
            <div className="flex lg:hidden justify-center items-center">
              {/* Mobile Menu */}
              <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
                <SheetTrigger asChild>
                  <button>
                    {menuOpen ? (
                      // <X className="w-[30px] h-[30px]  text-[#8db580]" />
                      <></>
                    ) : (
                      <Menu className="w-[30px] h-[30px] text-[#8db580]" />
                    )}
                  </button>
                </SheetTrigger>
                <SheetContent className="w-[75%] bg-white p-4  cursor-pointer">
                  {/* Close Button (inside modal layout) */}
                  <div className="w-full flex justify-end mb-4 mt-10 cursor-pointer">
                    <button
                      onClick={() => {
                        console.log("Mobile menu closed by cancel button");
                        setMenuOpen(false);
                      }}
                      aria-label="Close Menu"
                    >
                      <X size={28} className="text-[#8db580]  cursor-pointer" />
                    </button>
                  </div>

                  <MobileNavbar closeMenu={() => setMenuOpen(false)} />
                </SheetContent>
              </Sheet>
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <Navbar />
            </div>
          </div>
        </div>
      </div>

      {/* Badge Below Navbar */}
      {scrolled && (
        <div className="fixed top-[calc(8.9vh+40px)] w-full flex justify-center z-[50]">
          <div className="w-[80%]">
            <div className="w-[50px] bg-[#8db580] rounded-bl-[2px] rounded-br-[20px] flex justify-center items-center flex-col">
              <div
                style={{ fontFamily: "Poppins" }}
                className="font-bold text-[18px] text-white mt-2"
              >
                25
              </div>
              <div
                style={{ fontFamily: "Poppins" }}
                className="font-[500] -mt-1 pb-2 text-[12px] text-white"
              >
                Years
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content overlap */}
      {/* <div className="pt-[98px] bg-[#123f49]" /> */}
      {scrolled && (
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="fixed animate-bounce bottom-4 right-4 z-50 bg-[#a8862f] text-[#fff] p-2 rounded-full shadow-lg"
        >
          <ArrowUp />
        </div>
      )}
    </>
  );
};

export default Header;
