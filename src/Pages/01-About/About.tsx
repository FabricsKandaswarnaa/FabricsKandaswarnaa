import React, { useState } from "react";
import about from "../../assets/Images/about.jpg";
// import { Description } from "@radix-ui/react-dialog";
import missionimg from "../../assets/Images/mission.jpg";
import journeyimg from "../../assets/Images/journyimg.jpg";

const About: React.FC = () => {
  const journeyData = {
    sectionTitle: "Our Journey",
    milestones: [
      {
        year: "1945 – Foundation",
        description:
          "Kandaswarnaa was founded by (late) Mr. Kandasamy as a small trading company focused on local handloom sarees and dhotis in Salem.",
      },
      {
        year: "1970s–90s – Domestic Growth",
        description:
          "Expanded across Tamil Nadu, diversifying into a wide range of traditional textiles and building strong retailer partnerships.",
      },
      // {
      //   year: "2000 – Global Expansion",
      //   description:
      //     "Entered international markets by exporting party wear, sarees, men’s and kids’ fashion, establishing a global presence.",
      // },
      {
        year: "2000 – Kandaswarnaa Shoping Mall Inauguration",
        description:
          "Opened Salem’s premium shopping mall, offering high-quality mall space for rent to retailers and brands.",
      },
      {
        year: "2023 – Digital & Global Reach",
        description:
          "Expanded online shopping and strengthened export operations to reach customers worldwide while maintaining our heritage.",
      },
      {
        year: "2025 – Kandaswarnaa Hi Tech City Inauguration",
        description:
          "Opened Salem’s premium shopping mall, offering high-quality mall space for rent to retailers and brands.",
      },
    ],
  };

  const mission = {
    sectionTitle: "Guiding Principles ",
    milestones: [
      {
        year: "Our Vision",
        description:
          "To be a global textile leader by innovating through tradition and empowering fashion through quality. ",
      },
      {
        year: "Our Mission",
        description:
          "To serve brands, retailers, and communities with premium textiles and retail opportunities that inspire confidence and creativity. ",
      },
    ],
  };

  const [showAll, setShowAll] = useState(false);

  const visibleMilestones = showAll
    ? journeyData.milestones
    : journeyData.milestones.slice(0, 2);

  return (
    <div className="w-full bg-white">
      {/* Top Banner */}
      <div
        className="w-full h-[60vh] md:h-[70vh] lg:h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div
          className="text-white text-[40px] md:text-[50px] lg:text-[60px] font-extralight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          ABOUT US
        </div>
      </div>

      {/* Journey Section */}
      <div className="bg-white w-full min-h-screen flex justify-center items-center flex-col py-10">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 bg-white relative overflow-hidden gap-10">
          {/* Left Column */}
          <div className="lg:w-1/2 w-full z-10">
            <h5 className="text-sm font-semibold text-gray-500 tracking-wider mb-2 uppercase">
              {mission.sectionTitle}
            </h5>
            <div className="w-10 h-[2px] bg-[#8db580] mb-4"></div>

            {mission.milestones.map((item, index) => (
              <div key={index}>
                <h2 className="text-2xl lg:text-4xl font-serif text-gray-800 leading-tight mb-4">
                  {item.year}
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-[500px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 w-full relative flex justify-center items-center">
            {/* Green Overlay */}
            <div className="absolute right-0 top-0 w-full h-full bg-[#8db580] opacity-70 rounded-bl-[100px] z-0"></div>

            {/* Image */}
            <div className="relative z-10 shadow-xl rounded-md overflow-hidden w-full max-w-[500px]">
              <img
                src={missionimg}
                alt="About us"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Optional Shape */}
            <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-30 rounded-full z-0 hidden lg:block"></div>
          </div>
        </div>
      </div>

      {/*Mission Section */}
      <div className="bg-white w-full min-h-screen flex justify-center items-center flex-col py-10">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 bg-white relative overflow-hidden gap-10">
          {/* Right Column */}
          <div className="lg:w-1/2 w-full relative flex justify-center items-center">
            {/* Green Overlay */}
            <div className="absolute right-0 top-0 w-full h-full bg-[#8db580] opacity-70 rounded-bl-[100px] z-0"></div>

            {/* Image */}
            <div className="relative z-10 shadow-xl rounded-md overflow-hidden w-full max-w-[500px]">
              <img
                src={journeyimg}
                alt="About us"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Optional Shape */}
            <div className="absolute right-0 top-0 w-40 h-40 bg-white opacity-30 rounded-full z-0 hidden lg:block"></div>
          </div>

          {/* Left Column */}
          <div className="lg:w-1/2 w-full z-10">
            <h5 className="text-sm font-semibold text-gray-500 tracking-wider mb-2 uppercase">
              {journeyData.sectionTitle}
            </h5>
            <div className="w-10 h-[2px] bg-[#8db580] mb-4"></div>

            {visibleMilestones.map((item, index) => (
              <div key={index}>
                <h2 className="text-3xl lg:text-5xl font-serif text-gray-800 leading-tight mb-6">
                  {item.year}
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-[500px]">
                  {item.description}
                </p>
              </div>
            ))}

            {journeyData.milestones.length > 2 && !showAll && (
              <button
                className="bg-[#8db580] hover:bg-transparent hover:text-[#8db580] text-white font-bold py-3 px-6 rounded-full shadow-lg transition border border-[#8db580]"
                onClick={() => setShowAll(true)}
              >
                Learn More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
