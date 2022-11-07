import React from "react";
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { SubBarContainer } from "../Homepage/Navbar/StyledNavbar";
import { Link } from "react-router-dom";
import "./homePageNav.css";
import banner from '../../../assets/ecome/banner.png'
import { BiHomeAlt } from "react-icons/bi";
import { IoSettingsOutline, IoStatsChartOutline, IoWalletSharp } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { FaPrescriptionBottle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
const HomeNav = ({ title }) => {
  // const history = useHistory();

  const location = useLocation()
  console.log("location", location)

  return (
    <div className="">
      <div className="relative">
        <img src={banner} alt="banner" />
        <div className="bscontainer">
          <h2 className="absolute top-[30%] text-white font-semibold text-[40px]">{title}</h2>

        </div>
      </div>
      <div className="bg-[#0B694D] hidden lg:block ">
        <div className="homeNavs bscontainer">
          <div className="nav-content">
            <ul className="nav-itemss cursor-pointer">
              <li className="nav-itemlist ">

                <Link
                  to="/e-dashboard"
                >
                  <div className={`flex items-center ${location.pathname === "/e-dashboard" ? "active" : ""}`}>
                    <BiHomeAlt className="mx-1" />
                    Dashboard
                  </div>
                </Link>
              </li>
              <li className="nav-itemlist">
                <Link

                  to="/e-setting"
                 
                >
                  <div className={`flex items-center ${location.pathname === "/e-setting" ? "active" : ""}`}>
                  <IoSettingsOutline className="mx-1" />
                    Setting
                  </div>
                </Link>
              </li>
              <li className="nav-itemlist">
                <Link

                  to="VAPORIZE"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                   <div className={`flex items-center ${location.pathname === "/e-purchase" ? "active" : ""}`}>
                  <IoWalletSharp className="mx-1" />
                    Purchase
                  </div>
                </Link>
              </li>
              <li className="nav-itemlist">
                <Link
                  to="/e-credit"
                >
                  <div className={`flex items-center ${location.pathname === "/e-credit" ? "active" : ""}`}>
                  <RiShoppingCartLine className="mx-1" />
                    Add Credits
                  </div>
                </Link>
              </li>
              <li className="nav-itemlist">
                <Link

                  to="CHILLUMS"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <div className={`flex items-center ${location.pathname === "/e-statement" ? "active" : ""}`}>
                  <IoStatsChartOutline className="mx-1" />
                    Statements
                  </div>
                </Link>
              </li>
              <li className="nav-itemlist">
                <Link

                  to="CULTIVATE"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <div className={`flex items-center ${location.pathname === "/e-upload" ? "active" : ""}`}>
                  <AiOutlineCloudUpload className="mx-1" />
                    Upload Items
                  </div>
                </Link>
              </li>
              <li className="nav-itemlist">
                <Link

                  to="DIAGNOSE"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <div className={`flex items-center ${location.pathname === "/e-items" ? "active" : ""}`}>
                    <FiEdit className="mx-1" />
                    Manage Items
                  </div>
                </Link>
              </li>
              <li className="nav-itemlist">
                <Link

                  to="PRESCRIBE"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <div className={`flex items-center ${location.pathname === "/e-withdral" ? "active" : ""}`}>
                    <FaPrescriptionBottle className="mx-1" />
                    Withdrawals
                  </div>
                </Link>
              </li>



            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
