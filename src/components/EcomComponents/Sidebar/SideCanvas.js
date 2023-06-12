import React, { useState, useEffect, useRef } from "react";
// import { Offcanvas } from "react-bootstrap";
// import logo from "../../../assets/landingImages/logo.svg";
import { Link } from "react-router-dom";
import "./SideNavCanvas.css";
// import agencyLogo from "../../../assets/landingImages/agencyLogo.png";
import dp_img from "../../../assets/images/Botanist.jpg";
// import agenciyCart from "../../../assets/landingImages/agenciyCart.svg";
import { BiHomeAlt } from "react-icons/bi";
import {
  IoSettingsOutline,
  IoStatsChartOutline,
  IoWalletSharp,
} from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineCloudUpload, AiTwotoneShopping } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { FaPrescriptionBottle } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";
// import DropdownDynamic from '../../DropdownDynamic';
import Transition from "../../../utils/Transition";
import uk from "../../../assets/images/u_k.png";
import { GiLoincloth } from "react-icons/gi";

const SideCanvas = ({ bar, sidebarOpen, setSidebarOpen }) => {
  // const location = useLocation();
  // const { pathname } = location;

  // const trigger = useRef(null);
  const sidebar = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(2);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const options = [
    {
      id: 0,
      period: "English",
    },
    {
      id: 1,
      period: "Spanish",
    },
    {
      id: 0,
      period: "English",
    },
    {
      id: 1,
      period: "Spanish",
    },
  ];

  const Homebar = [
    {
      icon: <BiHomeAlt />,
      title: "Dashboard",
      link: "/e-dashboard",
    },
    {
      icon: <IoSettingsOutline />,
      title: "Setting",
      link: "/e-setting",
    },
    {
      icon: <IoWalletSharp />,
      title: "Purchase",
      link: "/e-purchase",
    },
    {
      icon: <RiShoppingCartLine />,
      title: "Add Credit",
      link: "/e-credit",
    },
    {
      icon: <IoStatsChartOutline />,
      title: "Statements",
      link: "/e-dashboard",
    },
    {
      icon: <AiOutlineCloudUpload />,
      title: "Upload Items",
      link: "/e-dashboard",
    },
    {
      icon: <FiEdit />,
      title: "Manage Items",
      link: "/e-dashboard",
    },
    {
      icon: <FaPrescriptionBottle />,
      title: "Withdrawals",
      link: "/e-dashboard",
    },
  ];

  const Leftbar = [
    {
      icon: <GiLoincloth />,
      title: "Clothing",
      link: "",
    },
    {
      icon: <GiLoincloth />,
      title: "Health & Beauty",
      link: "",
    },
    {
      icon: <GiLoincloth />,
      title: " Hygiene & Body",
      link: "",
    },
    {
      icon: <GiLoincloth />,
      title: "House & Decor",
      link: "",
    },
    {
      icon: <GiLoincloth />,
      title: "Organic Nutrition",
      link: "",
    },
    {
      icon: <GiLoincloth />,
      title: "Seeds & Flowers",
      link: "",
    },
    {
      icon: <GiLoincloth />,
      title: "Cultivate & Grow",
      link: "",
    },
    {
      icon: <GiLoincloth />,
      title: "Paraphernalia",
      link: "",
    },
    {
      icon: <GiLoincloth />,
      title: "Taste of Home",
      link: "",
    },
  ];

//   const storedSidebarExpanded = localStorage.getItem("landing-sidebar");
//   const [sidebarExpanded, setSidebarExpanded] = useState(
//     storedSidebarExpanded === null ? false : storedSidebarExpanded === true
//   );

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    if (sidebarOpen === true) {
      if (typeof window != "undefined" && window.document) {
        document.body.style.overflow = "hidden";
      }
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebarOpen]);

  console.log("data", sidebarOpen);

  return (
    <div>
      <div
        className={`fixed inset-0 bg-slate-900  bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      >
        {/* Sidebar */}
        <div
          id="sidebar"
          ref={sidebar}
          className={`flex flex-col relative z-1 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-auto lg:overflow-y-auto no-scrollbar w-[53%] lg:w-50 lg:landing-sidebar:!w-64 2xl:!w-64 shrink-0 bg- border-r  bg-[#1B1B1B]   py-4 transition-all duration-200 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-64"
          }`}
        >
          {/* Sidebar header */}

          <div className="absolute z-20 w-full ">
            <div>
              {/* Close button */}
              {/* <button ref={trigger} className="lg:hidden text-slate-500 hover:text-slate-400" onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls="sidebar" aria-expanded={sidebarOpen}  >
                <span className="sr-only">Close sidebar</span>
                <svg className="w-6 h-6 text-black border rounded-full fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                </svg>
              </button> */}
              <div className="bg-[#141414] border-b pl-3 border-[#24D29F] text-white pt-5 pb-7 flex items-center ">
                <div className="icons">
                  <img
                    src={dp_img}
                    className="lg:mx-1 mx-5 rounded-full w-[95px] object-cover h-[95px] border border-[#24D29F]"
                    alt="agenciyCart"
                  />
                </div>
                <div>
                  <p className="text-[#E0E0E0] text-[20px]">
                    Alex
                    <h2 className="text-[#E0E0E0] text-[20px] font-semibold">
                      Williams
                    </h2>
                  </p>
                  <h2 className="text-[#24D29F] text-[20px]">Designer</h2>
                </div>
              </div>
              <div className="border-b border-[#24D29F] p-3 ">
                <div className="flex items-center justify-between profile-icons">
                  <div className="flex items-center justify-between">
                    <BsHeartFill className="text-[30px] text-[#24D29F] " />
                    <h3 className="text-[14px] px-1 text-[#24D29F] ">
                      Whichlist(21)
                    </h3>
                  </div>
                  <div className="flex items-center justify-between shopping">
                    <AiTwotoneShopping className="text-[40px] text-[#24D29F]" />
                    <div>
                      <h2 className="text-[13px] text-[#E0DFDF]">Your cart</h2>
                      <p className="text-[13px] px-2 text-[#24D29F] font-medium ">
                        $132.142
                      </p>
                    </div>
                  </div>
                  <div className="icons">
                    <div className="relative">
                      <button
                        ref={trigger}
                        className="flex items-center justify-between p-2 text-white"
                        aria-label="Select date range"
                        aria-haspopup="true"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        aria-expanded={dropdownOpen}
                      >
                        <span className="flex items-center">
                          <img src={uk} alt="uk" className="w-8" />
                          <span className="px-2 text-[14px]">
                            {options[selected].period}
                          </span>
                        </span>
                        <svg
                          className="ml-1 text-white fill-current shrink-0"
                          width="11"
                          height="7"
                          viewBox="0 0 11 7"
                        >
                          <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
                        </svg>
                      </button>
                      <Transition
                        show={dropdownOpen}
                        tag="div"
                        className="z-10 absolute top-full right-0 w-full bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
                        enter="transition ease-out duration-100 transform"
                        enterStart="opacity-0 -translate-y-2"
                        enterEnd="opacity-100 translate-y-0"
                        leave="transition ease-out duration-100"
                        leaveStart="opacity-100"
                        leaveEnd="opacity-0"
                      >
                        <div
                          ref={dropdown}
                          className="text-sm font-medium text-slate-600 "
                          onFocus={() => setDropdownOpen(true)}
                          onBlur={() => setDropdownOpen(false)}
                        >
                          {options.map((option) => {
                            return (
                              <button
                                key={option.id}
                                tabIndex="0"
                                className={`flex items-center w-full hover:bg-slate-50 py-1 px-3 cursor-pointer ${
                                  option.id === selected && "text-red-500"
                                }`}
                                onClick={() => {
                                  setSelected(option.id);
                                  setDropdownOpen(false);
                                }}
                              >
                                <svg
                                  className={`shrink-0 mr-2 fill-current text-red-500 ${
                                    option.id !== selected && "invisible"
                                  }`}
                                  width="12"
                                  height="9"
                                  viewBox="0 0 12 9"
                                >
                                  <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
                                </svg>
                                <span>{option.period}</span>
                              </button>
                            );
                          })}
                        </div>
                      </Transition>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 sidenavcanvas">
              <ul>
                {bar === "topbar"
                  ? Leftbar.map((item, i) => (
                      <li key={i}>
                        <Link to={item?.link}>
                          <div className="flex items-center text-[25px]">
                            <div className="mx-1">
                              <div>{item.icon}</div>
                            </div>
                            <span className="mx-3 title">{item.title}</span>
                          </div>
                        </Link>
                      </li>
                    ))
                  : Homebar.map((item, i) => (
                      <li key={i}>
                        <Link to={item?.link}>
                          <div className="flex items-center">
                            <div className="mx-1">
                              <div className="text-[20px]">{item.icon}</div>
                            </div>
                            <span className="mx-3 title">{item.title}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        </div>

        <section
          className="relative w-screen h-full border border-red-500 cursor-pointer "
          onClick={() => {
            setSidebarOpen(false);
          }}
        >
          asdasdas
        </section>
      </div>

      {/* <Offcanvas
        className="sidenavcanvas-container"
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header >
          <Offcanvas.Title>
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
              HPO<span>Rx</span>
            </h5>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="sidenavcanvas" >
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">INHALATE</a>
              </li>
              <li>
                <a href="#">VAPORIZE</a>
              </li>
              <li>
                <a href="#">PORTABLES</a>
              </li>
              <li>
                <a href="#">CHILLUMS</a>
              </li>
              <li>
                CULTIVATE <i class="fas fa-angle-down"></i>
              </li>
              <li>
                <a href="#">DIAGNOSE </a>
              </li>
              <li>
                PRESCRIBE <i class="fas fa-angle-down"></i>
              </li>
              <li>
                MARKETPLACE <i class="fas fa-angle-down"></i>
              </li>
              <li>
                PRODUCTS <i class="fas fa-angle-down"></i>
                <ul>
                  <li><Link to='/locator' >Locate Us</Link></li>
                  <li><Link to='/agency' >Agency</Link></li>
                </ul>
              </li>
              <li>
                <a href="#">LOCATE</a>
              </li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas> */}
    </div>
  );
};

export default SideCanvas;
