import React, { useState } from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'
import { IoSaveOutline, IoPrintOutline, IoMailOutline } from "react-icons/io5";
import { BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp, BsFillShareFill, BsHeart } from "react-icons/bs";
import DashboardHeader from '../components/SharedComponents/DashboardHeader';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/HeaderSidebar/Sidebar';
import DashboardSidebar from '../components/SharedComponents/Header/DashboardSidebar';
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className='bg-[#F7F8FA] h-screen'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Dashboard