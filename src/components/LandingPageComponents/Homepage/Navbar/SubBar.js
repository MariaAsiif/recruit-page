import React, { useState, useEffect } from "react";
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { SubBarContainer } from "./StyledNavbar";
// import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import "./SubBar.css";
import TopBar from "../Navbar/TopBar";
import Marquee from "./Marquee";
// import downIcon from '../../../../assets/landingImages/ionic-ios-arrow-down.svg'
import { RiArrowDropDownLine, RiArrowDropRightLine } from 'react-icons/ri'
import AgeGatePopup from "../../../Popups/AgeGatePopup";
import { useSelector } from "react-redux";
const SubBar = ({ setShow }) => {
  // const history = useHistory();

  const {gatePopup } = useSelector((state) =>  state.recruitAuth.userInfo)

  const [navbar, setNavbar] = useState(false);
  const [popup, setPopup] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [navbarbackground, setnavbarbackground] = useState(false);

  useEffect(() => {
    changenavColor();
    // adding the event when scroll change background
    window.addEventListener("scroll", changenavColor);
  });

  const changenavColor = () => {
    if (window.scrollY > 15) {
      setnavbarbackground(true);
      setNavbar(true);
    } else {
      setnavbarbackground(false);
      setNavbar(false);
    }
  };

  // const changeBackground = () => {
  //   window.onwheel = e => {
  //     if(e.deltaY >= 0){
  //       // Scrolling Down with mouse
  //       setNavbar(true)
  //     } else {
  //       // Scrolling Up with mouse
  //       setNavbar(false)
  //     }
  //   }
  // }

  // useEffect(() => {
  //   changeBackground()
  //   // adding the event when scroll change background
  //   window.addEventListener("scroll", changeBackground)
  // })
  return (
    <div className="home-page-main-nav-container">
      <Marquee />
      <TopBar setShow={setShow} />
      {gatePopup === false && popup ? (<AgeGatePopup isOpen={popup} onClose={() => { setPopup(false) }} />) : null}
      <div className={navbar ? "hporx-header" : "hporx-header-skew "} onClick={() => setPopup(true)} >
        <div className={navbar ? "hporx-header-topbar-skew" : navbarbackground ? "changetopBArbackgournd" : "hporx-header-topbar-normal"} ></div>
        <nav className={navbarbackground ? "nav" : "changebackground"} id="navbar"  >
          <div className="nav-content bscontainer-fluid">
            <ul className="ruby-menu">
              <li className="main-li uppercase" >
                <Link className="active" to="HOME" spy={true} smooth={true} duration={500}    > HOME{" "} </Link>
              </li>
              <li className="main-li uppercase">
                <a href="#" className="flex items-center">MARKETPLACE <RiArrowDropDownLine className="text-[30px]" /></a>
                <div className="show !w-auto p-3">
                  <div className="row">
                    <div className="col-lg-4  p-2 pl-5 flex items-baseline flex-col">
                      {/* <h3 className="text-[20px] font-medium">recruit</h3> */}
                      <div className="flex flex-col justify-start items-start cursor-pointer">
                        <span>
                          <Link to="/stock">Store</Link>
                        </span>
                        <span>
                          <Link to="/e-store">Store 2</Link>
                        </span>
                        <span>
                          <Link to="/e-dashboard">Vendor Dashboard</Link>
                        </span>

                      </div>

                    </div>
                  </div>
                </div>


              </li>


              <li className="main-li uppercase ">
                <a href="#" className="flex items-center">RECRUIT <RiArrowDropDownLine className="text-[30px]" /></a>
                <div className="show !w-auto p-3">
                  <div className="row">
                    <div className="col-lg-4  p-2 pl-5 flex items-baseline flex-col">
                      {/* <h3 className="text-[20px] font-medium">recruit</h3> */}
                      <div className="flex flex-col justify-start items-start cursor-pointer">
                        <span>
                          <Link to="/Home">Home</Link>
                        </span>
                        <span>
                          <Link to="/">About Us</Link>
                        </span>
                        <span>
                          <Link to="/">Quick Cv</Link>
                        </span>
                        <span>
                          <Link to="/">Whats Next</Link>
                        </span>
                        <span>
                          <Link to="/signup">Register Yourself</Link>
                        </span>
                      </div>

                    </div>
                    {/* <div className="col-lg-4 border-r border-white p-2 pl-5 flex items-baseline flex-col">
                      <h3 className="text-[20px] font-medium">Items2</h3>
                      <div className="flex flex-col ">
                        <span>hellow</span>
                        <span>hellow</span>
                        <span>hellow</span>
                        <span>hellow</span>
                      </div>

                     
                    </div>
                    <div className="col-lg-4  p-2 pl-5 flex items-baseline flex-col">
                      <h3 className="text-[20px] font-medium">Items3</h3>
                      <div className="flex flex-col ">
                        <span>hellow</span>
                        <span>hellow</span>
                        <span>hellow</span>
                        <span>hellow</span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                     
                    </div> */}

                  </div>
                </div>


                {/* <ul >
                  <li>
                    <a href="#">2nd Level #1</a>
                  </li>
                  <li>
                    <a href="#" >2nd Level #2</a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center"> 2nd Level #3 <RiArrowDropRightLine className="text-[40px]" /></a>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-university" aria-hidden="true" />
                          3rd Level #1
                        </a>
                        <ul>
                          <li>
                            <a href="#">4th Level #1</a>
                          </li>
                          <li>
                            <a href="#">4th Level #2</a>
                          </li>
                        </ul>
                        <span className="ruby-dropdown-toggle" />
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-thumbs-up" aria-hidden="true" />
                          3rd Level #2
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-users" aria-hidden="true" />
                          3rd Level #3
                        </a>
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa fa-paper-plane" aria-hidden="true" />
                              4th Level #1
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-print" aria-hidden="true" />
                              4th Level #2
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-shopping-bag" aria-hidden="true" />
                              4th Level #3
                            </a>
                          </li>
                        </ul>
                        <span className="ruby-dropdown-toggle" />
                      </li>
                    </ul>
                    <span className="ruby-dropdown-toggle" />
                  </li>
                  <li className="ruby-open-to-left">
                    <a href="#">2nd Level #4</a>
                    <ul>
                      <li>
                        <a href="#">3rd Level #1</a>
                      </li>
                      <li>
                        <a href="#">3rd Level #2</a>
                      </li>
                      <li>
                        <a href="#">3rd Level #3</a>
                      </li>
                    </ul>
                    <span className="ruby-dropdown-toggle" />
                  </li>
                  <li>
                    <a href="#">2nd Level #5</a>
                  </li>
                </ul> */}
                <span className="ruby-dropdown-toggle" />
              </li>
              {/* <li className="main-li uppercase">
                <Link activeClass="active" to="INHALATE" spy={true} smooth={true} duration={500} >  INHALATE  </Link>
              </li> */}
              {/* <li className="main-li uppercase">
                <Link to="/Home" > Recruit Page  </Link>
              </li> */}
              {/* <li className="main-li uppercase">
               
                Recruit Page
                </a>
              </li> */}
              <li className="main-li uppercase">
                <Link activeClass="active" to="" spy={true} smooth={true} offset={-70} duration={500}   >
                  PORTABLES
                </Link>
              </li>
              <li className="main-li uppercase">
                <Link activeClass="active" to="CHILLUMS" spy={true} smooth={true} offset={-70} duration={500}  >
                  CHILLUMS
                </Link>
              </li>
              <li className="main-li uppercase">
                <Link activeClass="active" to="CULTIVATE" spy={true} smooth={true} offset={-70} duration={500}  >
                  CULTIVATE
                </Link>
              </li>
              <li className="main-li uppercase">
                <Link activeClass="active" to="DIAGNOSE" spy={true} smooth={true} offset={-70} duration={500} >
                  DIAGNOSE{" "}
                </Link>
              </li>
              <li className="main-li uppercase" >
                <Link activeClass="active" to="PRESCRIBE" spy={true} smooth={true} offset={-70} duration={500} >
                  PRESCRIBE{" "}
                </Link>
              </li>
              <li className="main-li uppercase">
                <a href="#" className="flex items-center">PRODUCTS <RiArrowDropDownLine className="text-[30px]" /></a>
                <div className="shows">
                  <div style={{ color: "red", fontWeight: 700, fontSize: "2rem" }}>Rx</div>
                  <div className="text-white">Merchandise</div>
                </div>
                {/* <Link activeClass="active" spy={true} smooth={true} offset={-70} duration={500}  >
                  <span className="flex items-center "> PRODUCTS <RiArrowDropDownLine className="text-[30px]" /></span>
                </Link> */}

                {/* <ul className="dropdown-product-link" >
                 
                  <li style={{ color: "red", fontWeight: 700, fontSize: "2rem" }}> Rx</li>
                  <li className="text-white">Merchandise</li>
                </ul> */}
              </li>
              {/* <li className="main-li uppercase" >
                <a href="https://landing-page-ivory-eta.vercel.app/agency">DAS</a>
              </li> */}
              <li className="main-li uppercase">
                <a href="#" className="flex items-center">DAS <RiArrowDropDownLine className="text-[30px]" /></a>
                <div className="show !w-auto p-3">
                  <div className="row">
                    <div className="col-lg-4  p-2 pl-5 flex items-baseline flex-col">
                      {/* <h3 className="text-[20px] font-medium">recruit</h3> */}
                      <div className="flex flex-col justify-start items-start cursor-pointer">
                        <span>
                          <a target="_blank" href="https://landing-page-ivory-eta.vercel.app/agency">Home</a>
                        </span>
                        <span>
                          <Link to="/newdashboard">Service provider</Link>
                        </span>
                        <span>
                          <Link to="/orders">Orders</Link>
                        </span>
                        <span>
                          <Link to="/das">Register</Link>
                        </span>

                      </div>

                    </div>
                  </div>
                </div>


              </li>

              <li className="main-li uppercase" >
                <Link to="/locator" spy={true} smooth={true} offset={-70} duration={500} >
                  LOCATE{" "}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SubBar;
