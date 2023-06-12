import React from 'react'
import { Link } from 'react-router-dom'

const SubBar = () => {
    return (
        <div className="bg-white border-b  hidden lg:block p-4 ">
            <div className=" px-5">
                <div className="nav-content">
                    <ul className="nav-items">
                        <li className="nav-item ">
                            <Link
                                className='text-[#ABABAB]'
                                to="/buyerLanding"
                                spy={true}
                                smooth={true}
                                duration={500}
                            // onClick={() => history.push("/home")}
                            >
                              Graphic & Design
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link
                                className='text-[#ABABAB]'
                                to="/buyerLanding"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                              Digital Marketing
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link
                                className='text-[#ABABAB]'
                                to="/buyerLanding"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Writing & Translation
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link
                                className='text-[#ABABAB]'
                                to="/buyerLanding"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                               Video & Animation
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link
                                className='text-[#ABABAB]'
                                to="/buyerLanding"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                               Music & Audio
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link
                                className='text-[#ABABAB]'
                                to="/buyerLanding"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Programming & Tech
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link
                                className='text-[#ABABAB]'
                                to="/buyerLanding"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                               Photography
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link
                                className='text-[#ABABAB]'
                                to="/buyerLanding"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Business
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link
                                className='text-[#ABABAB]'
                                to="/buyerLanding"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                AI Services
                            </Link>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SubBar