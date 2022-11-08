import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom'
// import { Offcanvas } from "react-bootstrap";
// import logo from "../../../assets/landingImages/logo.svg";
import { Link } from 'react-router-dom';
import "./SideNavCanvas.css";
import agencyLogo from "../../../assets/landingImages/agencyLogo.png";
import { BiHomeAlt } from "react-icons/bi";
import { IoSettingsOutline, IoStatsChartOutline, IoWalletSharp } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { FaPrescriptionBottle } from "react-icons/fa";

const SideCanvas = ({ bar, sidebarOpen, setSidebarOpen }) => {

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);



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
  ]


  const Leftbar = [
    {
      title: "Clothing",
      link: ""
    },
    {
      title: "Health & Beauty",
      link: ""
    },
    {
      title: " Hygiene & Body",
      link: ""
    },
    {
      title: "House & Decor",
      link: ""
    },
    {
      title: "Organic Nutrition",
      link: ""
    },
    {
      title: "Seeds & Flowers",
      link: ""
    },
    {
      title: "Cultivate & Grow",
      link: ""
    },
    {
      title: "Paraphernalia",
      link: ""
    },
    {
      title: "Taste of Home",
      link: ""
    },

  ]


  const storedSidebarExpanded = localStorage.getItem('landing-sidebar');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === true);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    if (sidebarOpen === true) {
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
      }

    }
    else {
      document.body.style.overflow = 'auto';

    }


  }, [sidebarOpen]);


  console.log("data", sidebarOpen)




  return (
    <div >
      <div className={`fixed inset-0 bg-slate-900  bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true" >

        {/* Sidebar */}
        <div id="sidebar" ref={sidebar} className={`flex flex-col relative z-1 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-auto lg:overflow-y-auto no-scrollbar w-64 lg:w-50 lg:landing-sidebar:!w-64 2xl:!w-64 shrink-0 bg- border-r  bg-white  py-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`} >
          {/* Sidebar header */}

          <div className='absolute z-20 w-full'>
            <div className="pr-3 pl-2 sm:px-2 ">
              {/* Close button */}
              <button ref={trigger} className="lg:hidden text-slate-500 hover:text-slate-400" onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls="sidebar" aria-expanded={sidebarOpen}  >
                <span className="sr-only">Close sidebar</span>
                <svg className="w-6 h-6 fill-current border rounded-full text-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                </svg>
              </button>
              <img src={agencyLogo} className="w-[50%]" alt="log" />
            </div>

            <div className="sidenavcanvas mt-4">
              <ul>
                {
                  bar === "topbar" ?
                    Leftbar.map((item, i) => (
                      <li key={i}>
                        <Link to={item?.link}>
                          {item.title}
                        </Link>
                      </li>
                    ))
                    :
                    Homebar.map((item, i) => (
                      <li key={i}>
                        <Link to={item?.link}>
                          <div className='flex items-center'>
                            <div className='mx-1'>
                              {item.icon}
                            </div>
                            {item.title}
                          </div>
                        </Link>
                      </li>
                    ))
                }
              </ul>
            </div>
          </div>
        </div>

        <section
          className=" w-screen  h-full cursor-pointer"
          onClick={() => {
            setSidebarOpen(false);
          }}
        ></section>

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
    </div >
  );
};

export default SideCanvas;
