import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import agenciyCart from "../../../assets/landingImages/agenciyCart.svg";
// import agencydrop from "../../../assets/landingImages/agency-drop-dummy.png";
import agencyLogo from "../../../assets/landingImages/agencyLogo.png";
// import agencysearch from "../../../assets/landingImages/agency-search-icon.svg";
// import agencyuser from "../../../assets/landingImages/agency-user.svg";
import dp_img from "../../../assets/images/Botanist.jpg";
import { BsHeartFill } from 'react-icons/bs'
import { GoThreeBars } from "react-icons/go";
import Sidebar from '../Sidebar/SideCanvas'
const StoreHeader = () => {
    const [sideNavShow, setSideNavShow] = useState(false);
    return (
        <>
            <Sidebar sidebarOpen={sideNavShow} setSidebarOpen={setSideNavShow} />
            <div className="bscontainer">
                <div className="p-5">
                    <div className="row">
                        <div className="col-lg-2 col-12">
                            <div className="logo flex justify-center w-full">
                                <img style={{ cursor: 'pointer', marginTop: '-8px' }} src={agencyLogo} alt="agencyLogo" />
                            </div>
                        </div>
                        <div className="col-lg-10 mt-5 lg:mt-0 ">
                            <div className="2xl:flex lg:flex items-center flex-col xl:flex-row justify-between" id="main">
                                <form>
                                    <div className="flex w-full ">
                                        <div className="search_bar w-full   border flex items-center rounded-r-lg rounded-l-lg  ">
                                            <input
                                                type="search"
                                                id="search-dropdown"
                                                className=" p-2.5 w-[500px] z-20 text-sm text-gray-900 bg-white rounded-md    pr-2  dark:placeholder-gray-400 dark:text-white focus:outline-none"
                                                placeholder="Search for Item"
                                                required=""
                                            />

                                           
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
                                <div className="flex items-center justify-between lg:mt-1 2xl:mt-0 mt-[20px] right_side">
                                    <div className=" flex items-center justify-between lg:mx-1 cursor-pointer">
                                        <BsHeartFill className="text-[30px] text-[#24D29F] lg:mx-0 mx-3" />
                                        <h3 className="text-[14px] px-1 text-[#24D29F] hidden lg:block ">Whichlist(21)</h3>
                                    </div>
                                    <Link to="/e-cart">
                                        <div className=" flex items-center justify-between cursor-pointer ">
                                            <img src={agenciyCart} className="h-[35px] lg:mx-2 mx-5 " alt="agencyuser" />
                                            <div className="hidden lg:block">
                                                <h2 className="text-[14px]">Your cart</h2>
                                                <p className="text-[14px] px-2 text-[#24D29F] font-medium ">$132.142</p>
                                            </div>
                                        </div>
                                    </Link>
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

        </>
    )
}

export default StoreHeader