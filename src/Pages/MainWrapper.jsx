import React, { useState } from 'react'
import { RiMessage2Line } from 'react-icons/ri';
import { Link, Outlet } from "react-router-dom"
import AdminHeader from '../partials/Header';
import AdminSidebar from '../partials/Sidebar';
import beta from '../assets/images/beta.png'
const MainWrapper = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen overflow-hidden ">
            {/* Sidebar */}
            <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/*  Site header */}
                <AdminHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main >
                    <Outlet />
                    <div className='flex'>
                        <Link to="/user-feedback">
                            <div className='user-feedback fixed bottom-[10px] right-10 w-12 '>
                                <div className="rounded-full border bg-white p-3">
                                    <RiMessage2Line className='text-[22px]' />
                                </div>
                                <span className='text-black text-[14px] text-center ml-[-8px]'>

                                    Feedback
                                </span>
                            </div>
                        </Link>

                        <div className='fixed bottom-[10px] left-50'>
                            <img src={beta} className="w-10 " alt="beta_image"/>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default MainWrapper