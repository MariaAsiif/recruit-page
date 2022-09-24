import React, { useState } from 'react'
import DashboardHeader from '../components/SharedComponents/DashboardHeader';
import { Outlet } from 'react-router-dom';
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
        <main className='bg-[#F7F8FA]'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Dashboard