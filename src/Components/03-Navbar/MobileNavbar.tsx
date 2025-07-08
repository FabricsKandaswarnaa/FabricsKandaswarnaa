import { ChevronDown, MoveRight, Phone } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  closeMenu: () => void;
}

const MobileNavbar: React.FC<NavbarProps> = ({ closeMenu }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const navVal = [
    {
      name: "HOME",
      link: "/",
      type: "link",
      isMultiple: false,
      MultipleVal: [],
    },
    {
      name: "ABOUT",
      link: "/about",
      type: "link",
      isMultiple: false,
      MultipleVal: [],
    },
    {
      name: "OUR BRANDS",
      link: "/brands",
      type: "link",
      isMultiple: true,
      direction: "vertical",
      MultipleVal: [
        {
          heading: "Kandaswarnaa Fabrics",
          link: "/fabrics",
          subNav: [],
        },
        {
          heading: "Kandaswarnaa Shopping Mall",
          link: "/mall",
          subNav: [],
        },
        {
          heading: "Kandaswarnaa Hi Tech City",
          link: "/hitechcity",
          subNav: [],
        },
      ],
    },
    // {
    //   name: "PRODUCTS",
    //   link: "/about",
    //   type: "link",
    //   isMultiple: true,
    //   direction: "vertical",
    //   MultipleVal: [
    //     {
    //       heading: "Fabric",
    //       link: "/service",
    //       subNav: [
    //         {
    //           heading: "Premium Cotton",
    //           link: "/new1",
    //         },
    //         {
    //           heading: "Silk Blend",
    //           link: "/new2",
    //         },
    //         {
    //           heading: "Traditional Weaves",
    //           link: "/new2",
    //         },
    //         {
    //           heading: "View All",
    //           link: "/new2",
    //         },
    //       ],
    //     },
    //     {
    //       heading: "Sarees",
    //       link: "/service",
    //       isSubnav: true,
    //       subNav: [
    //         {
    //           heading: "Wedding Collection",
    //           link: "/new1",
    //         },
    //         {
    //           heading: "Everyday Elegance",
    //           link: "/new2",
    //         },
    //         {
    //           heading: "Heritage Series",
    //           link: "/new2",
    //         },
    //         {
    //           heading: "View All",
    //           link: "/new2",
    //         },
    //       ],
    //     },
    //     {
    //       heading: "Kids Wear",
    //       link: "/service",
    //       isSubnav: true,
    //       subNav: [
    //         {
    //           heading: "Pattupavadai Collection",
    //           link: "/new1",
    //         },
    //         {
    //           heading: "Celebration Wear",
    //           link: "/new2",
    //         },
    //         {
    //           heading: "Everyday Comfort",
    //           link: "/new2",
    //         },
    //         {
    //           heading: "View All",
    //           link: "/new2",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "OUR BLOG",
    //   link: "/about",
    //   type: "link",
    //   isMultiple: false,
    //   MultipleVal: [],
    // },
    {
      name: "+91 9843649195",
      link: "/",
      type: "content",
      icon: <Phone className="w-[13px] h-[13px]" />,
      isMultiple: false,
      MultipleVal: [],
    },
    {
      name: "CONTACT US",
      link: "/contact",
      type: "button",
      isMultiple: false,
      MultipleVal: [],
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-[100%] h-[100%] gap-[20px] text-[13px] mt-10 px-8 overflow-auto pb-8">
      {navVal.map((item, index) => (
        <React.Fragment key={index}>
          {item.type === "link" ? (
            <>
              {item.isMultiple ? (
                <div className="relative">
                  <div
                    style={{ fontFamily: "Poppins" }}
                    className="flex font-[Poppins] font-[700] text-[#404040] cursor-pointer items-center gap-[4px]"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-[13px] h-[13px] transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openIndex === index && (
                    <div className="pt-2 flex-col">
                      <div className="hover:rounded-md rounded-md shadow-lg bg-white pl-1 pr-10 pt-2 pb-3">
                        <div
                          className="block mt-[5px]"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          {item.MultipleVal.map((subItem, subIndex) => (
                            <div key={subIndex}>
                              <div
                                onClick={() => {
                                  navigate(subItem.link);
                                  window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                  });
                                  closeMenu();
                                }}
                                style={{ fontFamily: "Poppins" }}
                                className="block w-[180px] px-4 py-[5px] text-[12px] font-[Poppins] font-[700] text-gray-700 hover:text-gray-900"
                                role="menuitem"
                              >
                                {subItem.heading}
                              </div>
                              {subItem.subNav &&
                                subItem.subNav.map((item: any, i) => (
                                  <div
                                    key={i}
                                    style={{ fontFamily: "Poppins" }}
                                    className="block w-[180px] cursor-pointer items-center px-4 mb-0 h-[30px] text-sm text-[12px] font-[Poppins] font-[400] text-gray-700 hover:text-gray-900"
                                  >
                                    {item.heading}
                                    {item.heading === "View All" && (
                                      <MoveRight className="w-[12px] h-[12px] ml-1 inline" />
                                    )}
                                  </div>
                                ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div
                  style={{ fontFamily: "Poppins" }}
                  className="relative group font-[Poppins] font-[700] text-[#404040] cursor-pointer"
                  onClick={() => {
                    navigate(item.link);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                    closeMenu();
                  }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-[#1dcd9f] transition-all duration-400 group-hover:w-full"></span>
                </div>
              )}
            </>
          ) : item.type === "content" ? (
            <div
              style={{ fontFamily: "Poppins" }}
              className="relative group font-[Poppins] font-[700]  text-[#777] cursor-pointer flex gap-1 items-center"
            >
              {item.icon}
              {item.name}
            </div>
          ) : item.type === "button" ? (
            <div
              style={{ fontFamily: "Poppins" }}
              onClick={() => {
                navigate(item.link);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                closeMenu();
              }}
              className="bg-[#8db580] hover:bg-transparent transition-all ease-in-out duration-200 border-2 border-[#8db580] relative text-[15px] group font-[Poppins] py-[15px] px-[20px] font-[700] h-[50px] text-[#fff] cursor-pointer flex gap-1 justify-center items-center rounded-4xl"
            >
              {item.name}
            </div>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
};

export default MobileNavbar;
