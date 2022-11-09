import React, { useState } from "react";
import { AgenciesHeaderContainer } from "./AgenciesHeaderStyle";
import agenciyCart from "../../../assets/landingImages/agenciyCart.svg";
// import agencydrop from "../../../assets/landingImages/agency-drop-dummy.png";
import agencyLogo from "../../../assets/landingImages/agencyLogo.png";
// import agencysearch from "../../../assets/landingImages/agency-search-icon.svg";
// import agencyuser from "../../../assets/landingImages/agency-user.svg";
import dp_img from "../../../assets/images/Botanist.jpg";
import { BsHeartFill } from 'react-icons/bs'
import { GoThreeBars } from "react-icons/go";
import Sidebar from '../Sidebar/SideCanvas'
// import featherMenu from "../../../assets/landingImages/Icon feather-menu.svg";

// import { useHistory } from "react-router-dom";
// import { BiMicrophone } from 'react-icons/bi'
const AgenciesHeader = () => {
  // const history = useHistory()
  const [sideNavShow, setSideNavShow] = useState(false);
  const [sidebaropen, setSideBarOpen] = useState("");
  return (
    <AgenciesHeaderContainer>
      <Sidebar bar={sidebaropen} sidebarOpen={sideNavShow} setSidebarOpen={setSideNavShow} />
      <header className="top-bar">
        <div className="bscontainer">
          <div className="p-5">
            <div className="row">
              <div className="col-lg-2">
                <div className=" flex justify-between items-center ">
                  <div className="lg:hidden  lg:mx-0 mx-5" onClick={() => { return setSideNavShow(true), setSideBarOpen("homebar") }}>
                    <GoThreeBars className="text-[30px] cursor-pointer" />
                  </div>
                  <img style={{ cursor: 'pointer', marginTop: '-8px' }} className="logo" src={agencyLogo} alt="agencyLogo" />
                  <div className="lg:hidden  lg:mx-0 mx-5" onClick={() => { return setSideNavShow(true), setSideBarOpen("topbar") }}>
                    <GoThreeBars className="text-[30px] cursor-pointer" />
                  </div>
                  {/* <div className="lg:hidden flex items-center justify-between  mt-[20px] right_side">
                    <div className=" flex items-center justify-between  mx-2">
                      <BsHeartFill className="text-[30px] text-[#24D29F]  mx-3" />
                      <h3 className="text-[14px] px-1 text-[#24D29F] hidden lg:block ">Whichlist(21)</h3>
                    </div>
                    <div className=" flex items-center justify-between ">
                      <img src={agenciyCart} className="h-[30px]  mx-5 " alt="agencyuser" />
                      <div className="hidden ">
                        <h2 className="text-[14px]">Your cart</h2>
                        <p className="text-[14px] px-2 text-[#24D29F] font-medium ">$132.142</p>
                      </div>
                    </div>
                    <div className="icons">
                      <img src={dp_img} className=" mx-5 rounded-full  w-[40px] h-[40px] object-cover border border-[#24D29F]" alt="agenciyCart" />
                    </div>

                  </div> */}
                </div>
              </div>
              <div className="col-lg-10 mt-5 lg:mt-0 hidden lg:block">
                <div className="flex items-center justify-between" id="main">
                  <form>
                    <div className="flex w-full ">
                      <div className="search_bar lg:w-full  border flex items-center rounded-r-lg rounded-l-lg  ">
                        <input
                          type="search"
                          id="search-dropdown"
                          className=" p-2.5 lg:w-[350px] w-[100%] z-20 text-sm text-gray-900 bg-white rounded-md    pr-2  dark:placeholder-gray-400 dark:text-white focus:outline-none"
                          placeholder="Search for Item"
                          required=""
                        />

                        <button
                          id="dropdown-button"
                          data-dropdown-toggle="dropdown"
                          className="flex-shrink-0 z-10  inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-white border-l   focus:outline-none 00 dark:text-white "
                          type="button"
                        >
                          All categories{" "}
                          <svg
                            aria-hidden="true"
                            className="ml-1 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <div
                          id="dropdown"
                          className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 "
                          data-popper-reference-hidden=""
                          data-popper-escaped=""
                          data-popper-placement="bottom"
                          style={{
                            position: "absolute",
                            inset: "0px auto auto 0px",
                            margin: 0,
                            transform: "translate(0px, 81px)"
                          }}
                        >
                          <ul
                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdown-button"
                          >
                            <li>
                              <button
                                type="button"
                                className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Mockups
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Templates
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Design
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Logos
                              </button>
                            </li>
                          </ul>
                        </div>
                        <button
                          type="submit"
                          className="p-2.5 h-full px-4 rounded-r-lg text-sm font-medium text-white bg-[#24D29F]   focus:outline-none focus:ring-blue-300 "
                        >
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                          <span className="sr-only">Search</span>
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="hidden lg:flex lg:items-center lg:justify-between lg:mt-0 mt-[20px] right_side">
                    <div className=" flex items-center justify-between lg:mx-1">
                      <BsHeartFill className="text-[30px] text-[#24D29F] lg:mx-0 mx-3" />
                      <h3 className="text-[14px] px-1 text-[#24D29F] hidden lg:block ">Whichlist(21)</h3>
                    </div>
                    <div className=" flex items-center justify-between ">
                      <img src={agenciyCart} className="h-[35px] lg:mx-2 mx-5 " alt="agencyuser" />
                      <div className="hidden lg:block">
                        <h2 className="text-[14px]">Your cart</h2>
                        <p className="text-[14px] px-2 text-[#24D29F] font-medium ">$132.142</p>
                      </div>
                    </div>
                    <div className="icons">
                      <img src={dp_img} className="lg:mx-1 mx-5 rounded-full lg:w-[55px] w-[40px] h-[40px] object-cover lg:h-[55px] border border-[#24D29F]" alt="agenciyCart" />
                    </div>
                    <div className="lg:hidden  lg:mx-0 mx-5" onClick={() => setSideNavShow(true)}>
                      <GoThreeBars className="text-[30px] cursor-pointer" />
                    </div>
                  </div>

                </div>


              </div>
            </div>
          </div>
        </div>
      </header>
    </AgenciesHeaderContainer>
  );
};

export default AgenciesHeader;