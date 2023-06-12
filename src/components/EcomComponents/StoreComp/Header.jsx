import React from 'react'
import { BsHeartFill } from 'react-icons/bs'
import { GoThreeBars } from "react-icons/go";
import agencyLogo from "../../../assets/landingImages/agencyLogo.png";
const Header = () => {
    return (
        <div>
            <header className="top-bar">
                <div className="bscontainer">
                    <div className="p-5">
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="logo flex justify-center">
                                    <img style={{ cursor: 'pointer', marginTop: '-8px' }} src={agencyLogo} alt="agencyLogo" />
                                </div>
                            </div>
                            <div className="col-lg-10 mt-5 lg:mt-0 ">
                                <div className="flex items-center justify-between" id="main">
                                   
                                    <div className="flex items-center justify-between lg:mt-0 mt-[20px] right_side">
                                       
                                      
                                        {/* <div className="lg:hidden  lg:mx-0 mx-5" onClick={() => setSideNavShow(true)}>
                                            <GoThreeBars className="text-[30px] cursor-pointer" />
                                        </div> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header