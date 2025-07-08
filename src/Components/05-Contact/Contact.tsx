import man from "../../assets/Images/man.jpg";
import { SendHorizontal } from "lucide-react";
import React, { useState } from "react";
import Contact1 from "../../assets/Images/Contact1.jpg";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
// import { ArrowUpRight } from "lucide-react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

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
    <div className="w-full h-auto bg-white">
      <div className="w-full">
        {/* Top Banner Section */}
        <div
          className="w-full h-[60vh] md:h-[80vh] lg:h-[100vh] bg-cover bg-center flex justify-end items-center flex-col "
          style={{ backgroundImage: `url(${man})` }}
        >
          <div className="bg-white w-full h-[50vh] flex justify-center items-center  flex-col ">
            <h6
              className="text-[#6d6d6e] text-sm uppercase font-bold  "
              style={{ fontFamily: "Poppins" }}
            >
              We’d love to hear from you!
            </h6>
            <div className="w-[30px] h-[2px] bg-[#8db580] mt-[20px]"></div>
            <div
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-[#1c1c1c] text-[50px] font-extralight"
            >
              {" "}
              Contact Us
            </div>
            <div>
              No. 19-b, Kandaswarna Corporate house, Ramakrishna Road, Salem,
              Tamil Nadu 636007
            </div>
            <div
              className="text-[#6d6d6e] text-sm uppercase font-bold mt-5  "
              style={{ fontFamily: "Poppins" }}
            >
              +91-98436 49195, +91-94433 64578
            </div>
            <div className="mt-5">
              <a
                href="mailto:fabricskandaswarnaa@gmail.com"
                className="text-[#3d404e] hover:text-[#8db580] underline"
                style={{ fontFamily: "Poppins" }}
              >
                fabricskandaswarnaa@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-[20vh] flex justify-center items-center  flex-col">
          <div className="flex justify-center">
            <div
              style={{ fontFamily: "'Playfair Display', serif" }}
              className=" text-[30px] text-[#8db580] font-extralight"
            >
              Fill the Form
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div
          className="w-full bg-center bg-cover py-10"
          style={{ backgroundImage: `url(${Contact1})` }}
        >
          <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 justify-center items-center">
            {/* Left Column - Form */}
            <div className="w-full lg:w-1/2">
              <div
                style={{ fontFamily: "Poppins" }}
                className="text-[14px] text-[#9193a4] font-bold pt-5"
              >
                Contact Us
                <div className="w-[30px] h-[2px] bg-[#8db580] mt-5"></div>
              </div>

              <div
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[#3d404e] text-[22px] md:text-[35px] lg:text-[54px] font-[400] mt-4"
              >
                Get Some Information
              </div>

              {/* Inputs */}
              <div className="mt-5 flex flex-col md:flex-row gap-5">
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-[50px] text-[14px] w-full"
                  style={{ fontFamily: "Poppins" }}
                  placeholder="Enter Name"
                  required
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-[50px] text-[14px] w-full"
                  style={{ fontFamily: "Poppins" }}
                  placeholder="Enter Email"
                />
              </div>

              <div className="mt-5">
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-[50px] text-[14px] w-full"
                  style={{ fontFamily: "Poppins" }}
                  placeholder="Enter Mobile Number"
                />
              </div>

              <div className="mt-5">
                <Textarea
                  id="message"
                  name="message"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="h-[120px] text-[14px] w-full"
                  style={{ fontFamily: "Poppins" }}
                  placeholder="Enter Message"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <div
                  style={{ fontFamily: "Poppins" }}
                  className="bg-[#8db580] w-full max-w-[200px] hover:bg-transparent transition-all ease-in-out duration-200 border-2 border-[#8db580] text-[15px] font-[700] h-[50px] text-white hover:text-[#8db580] cursor-pointer flex gap-2 justify-center items-center rounded-4xl"
                  onClick={handleClick}
                >
                  Submit <SendHorizontal size={18} />
                </div>
              </div>
            </div>

            {/* Right Column - Optional content */}
            <div className="w-full lg:w-1/2 flex justify-center flex-col">
              {/* Placeholder for map/image/content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
