import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { SubBarContainer } from "./StyledNavbar";
import { Link, animateScroll as scroll } from "react-scroll";
import {  Link as routerLink } from "react-router-dom";
import "./SubBar.css";
import TopBar from "../Navbar/TopBar";
import Marquee from "./Marquee";
import downIcon from '../../../../assets/landingImages/ionic-ios-arrow-down.svg'

const SubBar = ({ setShow }) => {
  // const history = useHistory();

  const [navbar, setNavbar] = useState(false);
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

      <div className={navbar ? "hporx-header" : "hporx-header-skew "}>
        <div className={navbar ? "hporx-header-topbar-skew" : navbarbackground ? "changetopBArbackgournd" : "hporx-header-topbar-normal"} ></div>
        <nav className={navbarbackground ? "nav" : "changebackground"} id="navbar"  >
          <div className="nav-content bscontainer-fluid">


          {/* <ul className="ruby-menu">
              <li className="ruby-active-menu-item">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Classic</a>
                <ul className="">
                  <li>
                    <a href="#">2nd Level #1</a>
                  </li>
                  <li>
                    <a href="#">2nd Level #2</a>
                  </li>
                  <li>
                    <a href="#">2nd Level #3</a>
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
                </ul>
                <span className="ruby-dropdown-toggle" />
              </li>

            </ul> */}


            <ul className="ruby-menu">
              <li className="main-li" >
                <Link className="active" to="HOME" spy={true} smooth={true} duration={500}    > HOME{" "} </Link>
              </li>
              <li className="main-li" >
                <a href="https://landing-page-ivory-eta.vercel.app/agency">DAS</a>
              </li>
              <li className="main-li">
                <a href="#">Classic</a>
                <ul className="">
                  <li>
                    <a href="#">2nd Level #1</a>
                  </li>
                  <li>
                    <a href="#">2nd Level #2</a>
                  </li>
                  <li>
                    <a href="#">2nd Level #3</a>
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
                </ul>
                <span className="ruby-dropdown-toggle" />
              </li>
              {/* <li className="main-li">
                <Link activeClass="active" to="INHALATE" spy={true} smooth={true} duration={500} >  INHALATE  </Link>
              </li> */}
              <li className="main-li">
                <a  activeClass="active" target="_blank" href="https://recruit-page-wyxnn7r5x-devopsmarkaz-gmailcom.vercel.app/" spy={true} smooth={true} offset={-70} duration={500} >
                Landing page
                </a>
              </li>
              <li className="main-li">
                <Link activeClass="active" to="PORTABLES" spy={true} smooth={true} offset={-70} duration={500}   >
                  PORTABLES
                </Link>
              </li>
              <li className="main-li">
                <Link activeClass="active" to="CHILLUMS" spy={true} smooth={true} offset={-70} duration={500}  >
                  CHILLUMS
                </Link>
              </li>
              <li className="main-li">
                <Link activeClass="active" to="CULTIVATE" spy={true} smooth={true} offset={-70} duration={500}  >
                  CULTIVATE
                </Link>
              </li>
              <li className="main-li">
                <Link activeClass="active" to="DIAGNOSE" spy={true} smooth={true} offset={-70} duration={500} >
                  DIAGNOSE{" "}
                </Link>
              </li>
              <li className="main-li" >
                <Link activeClass="active" to="PRESCRIBE" spy={true} smooth={true} offset={-70} duration={500} >
                  PRESCRIBE{" "}
                </Link>
              </li>
              <li className="main-li">
                <Link activeClass="active"  spy={true} smooth={true} offset={-70} duration={500}  >
                  PRODUCTS 
                </Link>

                <ul className="dropdown-product-link" >
                 {/* <li>
                    <span style={{ color: "red", fontSize: "1.5rem" }}>Rx</span>PRODUCTS
                  </li>
                  <li className="sub-li"  >Locate Us</li>
                  <li className="sub-li"  >DAS</li>  */}
                  <li style={{ color: "red", fontWeight: 700, fontSize: "2rem" }}> Rx</li>
                  <li>Merchandise</li>
                </ul>
              </li>
              <li className="main-li">
                <Link activeClass="active" to="MARKETPLACE" spy={true} smooth={true} offset={-70} duration={500}  >
                  MARKETPLACE{" "}
                </Link>
              </li>
              <li className="main-li" >
                <Link activeClass="active" to="LOCATE" spy={true} smooth={true} offset={-70} duration={500} >
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
