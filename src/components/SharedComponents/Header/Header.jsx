import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
const Header = () => {
    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 50 ? header.classList.add('bg-white', 'shadow-lg') : header.classList.remove('bg-white', 'shadow-lg');
    };
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    return (
        <nav className="  header-section transition-all   w-full flex flex-wrap items-center justify-between py-4   text-gray-500 hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light   fixed-top">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button className="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </button>
                <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                    <Link to="/about" className=" flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1" >
                        <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" style={{ height: 15 }} alt="logo" loading="lazy" />
                    </Link>
                    <ul className="navbar-nav flex flex-col pl-0 list-style-none ml-auto">
                        <li className="nav-item p-2">
                            <Link to="/about" className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" >Home</Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link to="/about" className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" >About</Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link to="/about" className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" >How to Apply</Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link to="/about" className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" >Quick CV</Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link to="/about" className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" >What's Next</Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link to="/about" className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" >Sign Up</Link>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>

    )
}

export default Header