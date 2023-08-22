import React, { useState, useEffect } from "react";
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { SubBarContainer } from "./StyledNavbar";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import "./SubBar.css";
import TopBar from "../Navbar/TopBar";
//import Marquee from "./Marquee";
import Marquee from "react-fast-marquee";
// import downIcon from '../../../../assets/landingImages/ionic-ios-arrow-down.svg'
import { RiArrowDropDownLine, RiArrowDropRightLine } from 'react-icons/ri'
import AgeGatePopup from "../../../Popups/AgeGatePopup";
import { useSelector } from "react-redux";
const SubBar = ({ setShow }) => {
  // const history = useHistory();

  const user = useSelector((state) => state.recruitAuth.userInfo)

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
    
     <div
      style={{
        background: "#0000003b", height: "30px",
        fontSize: "12px",
        color: "white",
        width: "100%"
      }}
    >
      <Marquee
        style={{ paddingTop: "5px" }}
        gradient={false}
        pauseOnHover
        direction="left"
        speed="70"
      >
        This website is currently under development. Please return soon!    Esta página web se encuentra en desarrollo. ¡Por favor regrese pronto!    Deze website is momenteel in ontwikkeling. Kom snel terug!    Este site está em desenvolvimento. ¡Por favor, volte logo!    Diese Website befindet sich derzeit im AuYau. Bitte kehren Sie bald zurück!    Questo sito web è attualmente in fase di sviluppo. Si prega di tornare presto!     Tämä sivusto on parhaillaan kehitteillä. Palaa pian!    该网站目前正在开发中。请尽快回来!     y اذه عقوملا دiق رmnطتلا اiلاح . ءاجرلا ةدوعلا اwnxق
      </Marquee>
    </div>
      <TopBar setShow={setShow} />
      {user?.gatePopup === false && popup ? (<AgeGatePopup isOpen={popup} onClose={() => { setPopup(false) }} />) : null}
      <div className={navbar ? " xl:hporx-header hidden" : "hporx-header-skew "} onClick={() => setPopup(true)} >
        <div className={navbar ? "hporx-header-topbar-skew" : navbarbackground ? "changetopBArbackgournd" : "hporx-header-topbar-normal"} ></div>
        <nav className={navbarbackground ? "nav" : "changebackground"} id="navbar"  >
          <div className="nav-content bscontainer-fluid">
            <ul className="ruby-menu cursor-pointer">
              <li className="main-li uppercase" >
                <Link className="active" to="HOME" spy={true} smooth={true} duration={500}    > HOME{" "} </Link>
              </li>
              <li className="main-li uppercase">
                <Link to="/e-landing" className="flex items-center">MARKETPLACE<RiArrowDropDownLine className="text-[30px]" /></Link>
                <div className={`show !w-auto ${navbar === true && '-mt-[10px]'}`}>
                  {navbar === true && <div className="bg-white h-[10px]"></div>}
                  <div className="p-3">
                    <div className="row">
                      <div className="col-lg-4 w-full p-2  flex items-baseline flex-col ">
                        {/* <h3 className="text-[20px] font-medium">recruit</h3> */}
                        <div className="flex flex-col justify-start items-start cursor-pointer">
                          <span className="hover:bg-[#81AE37] w-full text-left ">
                            <Link className="pl-5" to="/e-landing">Home</Link>
                          </span>
                          <span className="hover:bg-[#81AE37] w-full text-left ">
                            <Link className="pl-5" to="/fairman-online">Fairman Online</Link>
                          </span>
                          <span className="hover:bg-[#81AE37] w-full text-left ">
                            <Link className="px-5" to="/e-dashboard">Vendor Dashboard</Link>
                          </span>
                          <span className="hover:bg-[#81AE37] w-full text-left ">
                            <Link className="pl-5" to="/stock">Stock</Link>
                          </span>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>


              </li>


              <li className="main-li uppercase ">
                <a href="#" className="flex items-center">RECRUIT <RiArrowDropDownLine className="text-[30px]" /></a>
                <div className={`show !w-auto ${navbar === true && '-mt-[10px]'}`}>
                  {navbar === true && <div className="bg-white h-[10px]"></div>}
                  <div className="p-3">
                    <div className="row">
                      <div className="col-lg-4 w-full p-2 flex items-baseline flex-col">
                        {/* <h3 className="text-[20px] font-medium">recruit</h3> */}
                        <div className="flex flex-col justify-start w-full  items-start cursor-pointer">
                          <span className="hover:bg-[#81AE37] w-full text-left ">
                            <Link className="pl-2" to="/recruitLanding">Home</Link>
                          </span>
                          <span className="hover:bg-[#81AE37] w-full text-left ">
                            <Link className="pl-2" to="/recruit">Recruit</Link>
                          </span>
                          <span className="hover:bg-[#81AE37] w-full text-left ">
                            <Link className="px-2" to="/signin">Hire Talent</Link>
                          </span>
                        </div>
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
                <ScrollLink
                  activeClass="active"
                  to="VAPORIZE"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}   >
                  PORTABLES
                </ScrollLink>
              </li>



              <li className="main-li uppercase">
                <ScrollLink
                  activeClass="active"
                  to="CHILLUMS"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}   >
                  CHILLUMS
                </ScrollLink>
              </li>
              <li className="main-li uppercase">
                <ScrollLink
                  activeClass="active"
                  to="CULTIVATE"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}   >
                  CULTIVATE
                </ScrollLink>

              </li>
              <li className="main-li uppercase">
                <ScrollLink
                  activeClass="active"
                  to="DIAGNOSE"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}   >
                  DIAGNOSE
                </ScrollLink>

              </li>
              <li className="main-li uppercase" >
                <ScrollLink
                  activeClass="active"
                  to="PRESCRIBE"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}   >
                  PRESCRIBE
                </ScrollLink>

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
                <div className={`show -ml-[30px] !w-auto ${navbar === true && '-mt-[10px]'}`}>
                  {navbar === true && <div className="bg-white h-[10px]"></div>}
                  <div className="p-3">
                    <div className="row">
                      <div className="col-lg-4  p-2  flex items-baseline flex-col">
                        {/* <h3 className="text-[20px] font-medium">recruit</h3> */}
                        <div className="flex flex-col justify-start items-start cursor-pointer">
                          <span className="hover:bg-[#81AE37] w-full text-left ">
                            <a className="pl-2" target="_blank" href="https://landing-page-ivory-eta.vercel.app/agency">Home</a>
                          </span>
                          <span className="hover:bg-[#81AE37] w-full text-left ">
                            <Link className="pl-2" to="/das">Register</Link>
                          </span>
                          <span className="hover:bg-[#81AE37] w-full text-left ">
                            <Link className="pl-2" to="/buyerLanding">Landing Page</Link>
                          </span>
                          <span className="hover:bg-[#81AE37] w-full text-left ">
                            <Link className="px-2" to="/buyerDashboard">Customer Dashboard</Link>
                          </span>
                          <span className="hover:bg-[#81AE37] w-full text-left ">
                            <Link className="px-2" to="/providerDashboard">Service Provider</Link>
                          </span>
                        </div>

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
