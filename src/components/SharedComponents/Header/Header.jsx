import React, { useEffect, useRef } from 'react'
import { NavLink } from "react-router-dom";
import logo from '../../../images/logo.png'
import useViewPort from "../../../hooks/useViewPort";

const Header = () => {
    const headerRef = useRef(null)
    const { width } = useViewPort();
    console.log(width);
    const isSticky = (e) => {
        const scrollTop = window.scrollY;
        scrollTop >= 50 ? headerRef.current.classList.add('bg-white', 'shadow-lg') : headerRef.current.classList.remove('bg-white', 'shadow-lg');
    };
    useEffect(() => {
        if (width >= 601) {
            window.addEventListener('scroll', isSticky);
        }

        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, [width]);
    return (
        <nav ref={headerRef} className={`header-section transition-all w-full flex flex-wrap items-center justify-between py-4 text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light fixed-top ${width <= 600 ? "bg-white shadow-lg" : ""}`}>
            <div className="flex flex-wrap items-center justify-between w-full px-6 container-fluid">
                <button className="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </button>
                <div className="items-center flex-grow collapse navbar-collapse" id="navbarSupportedContent">
                    <NavLink to="/" className="flex items-center mt-2 mr-1 text-gray-900  hover:text-gray-900 focus:text-gray-900 lg:mt-0" >
                        <img className='m-auto w-full h-auto max-w-[110px]' src={logo} alt="logo" loading="lazy" />
                    </NavLink>
                    <ul className="flex flex-col pl-0 ml-auto navbar-nav list-style-none">
                        <li className="px-2 py-2 nav-item lg:py-0 ">
                            <NavLink end to="/" className={({ isActive }) => ' nav-link font-sans font-semibold text-[#646464] hover:text-gray-700 focus:text-gray-700 p-0 ' + (isActive ? 'border-b-4 border-red-600 pb-2 rounded-[4px]' : '')}>Home</NavLink>
                        </li>
                        <li className="px-2 py-2 nav-item lg:py-0 ">
                            <NavLink end to="/das-signup" className={({ isActive }) => ' nav-link font-sans font-semibold text-[#646464] hover:text-gray-700 focus:text-gray-700 p-0 ' + (isActive ? 'border-b-4 border-red-600 pb-2 rounded-[4px]' : '')}>DAS</NavLink>
                        </li>
                        <li className="px-2 py-2 nav-item lg:py-0 ">
                            {/* <NavLink to="/comingsoon" className={({ isActive }) => ' nav-link font-sans font-semibold text-[#646464] hover:text-gray-700 focus:text-gray-700 p-0 ' + (isActive ? 'border-b-4 border-red-600 pb-2 rounded-[4px]' : '')} >Coming Soon</NavLink> */}
                            <NavLink to="/about" className={({ isActive }) => ' nav-link font-sans font-semibold text-[#646464] hover:text-gray-700 focus:text-gray-700 p-0 ' + (isActive ? 'border-b-4 border-red-600 pb-2 rounded-[4px]' : '')} >About</NavLink>
                        </li>
                        <li className="px-2 py-2 nav-item lg:py-0 ">
                            <NavLink to="/adminsignin" className={({ isActive }) => ' nav-link font-sans font-semibold text-[#646464] hover:text-gray-700 focus:text-gray-700 p-0 ' + (isActive ? 'border-b-4 border-red-600 pb-2 rounded-[4px]' : '')} >Admin login</NavLink>
                        </li>
                        <li className="px-2 py-2 nav-item lg:py-0 ">
                            <NavLink to="/cv" className={({ isActive }) => ' nav-link font-sans font-semibold text-[#646464] hover:text-gray-700 focus:text-gray-700 p-0 ' + (isActive ? 'border-b-4 border-red-600 pb-2 rounded-[4px]' : '')} >Quick CV</NavLink>
                        </li>
                        <li className="px-2 py-2 nav-item lg:py-0 ">
                            <NavLink to="/next" className={({ isActive }) => ' nav-link font-sans font-semibold text-[#646464] hover:text-gray-700 focus:text-gray-700 p-0 ' + (isActive ? 'border-b-4 border-red-600 pb-2 rounded-[4px]' : '')} >What's Next</NavLink>
                        </li>
                        <li className="py-2 mt-2 nav-item lg:py-0 lg:mt-0 ">
                            <NavLink to="/signup" style={{ background: width <= 600 ? "#E84025" : "linear-gradient(90deg, rgba(255, 255, 255, 0.74) 0%, rgba(255, 255, 255, 0.6) 100%) " }} className=" font-sans font-semibold lg:text-[#6D6E71] text-white hover:text-gray-700 focus:text-gray-700 px-5 py-2 rounded-md " >Sign Up</NavLink>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>

    )
}

export default Header