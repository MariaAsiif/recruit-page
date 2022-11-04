import React from "react";
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { SubBarContainer } from "../Homepage/Navbar/StyledNavbar";
import { Link } from "react-scroll";
// import { useHistory } from "react-router-dom";
import "./homePageNav.css";
import banner from '../../../assets/ecome/banner.png'
import { BiHomeAlt } from "react-icons/bi";
import { IoSettingsOutline, IoStatsChartOutline, IoWalletSharp } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { FaPrescriptionBottle } from "react-icons/fa";
const HomeNav = () => {
  // const history = useHistory();

  return (
    <div className="">
      <div>
        <img src={banner} alt="banner" />
      </div>
      <div className="bg-[#0B694D] hidden lg:block ">
        <div className="homeNavs bscontainer">
          <div className="nav-content">
            <ul className="nav-itemss">
              <li className="nav-itemlist ">

                <Link
                  to="HOME"
                  
                  spy={true}
                  smooth={true}
                  duration={500}
                // onClick={() => history.push("/home")}
                >
                  <div className="flex items-center active ">
                    <BiHomeAlt className="mx-1" />
                    Dashboard
                  </div>
                </Link>
              </li>
              <li className="nav-itemlist">
                <Link
                 
                  to="INHALATE"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <div className="flex items-center ">
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
                  <div className="flex items-center ">
                    <RiShoppingCartLine className="mx-1" />
                    Purchase
                  </div>
                </Link>
              </li>
              <li className="nav-itemlist">
                <Link
                 
                  to="PORTABLES"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <div className="flex items-center ">
                    <IoWalletSharp className="mx-1" />
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
                  <div className="flex items-center ">
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
                  <div className="flex items-center ">
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
                  <div className="flex items-center ">
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
                  <div className="flex items-center ">
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
