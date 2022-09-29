import React, { useState } from 'react'
import DashboardHeader from '../components/SharedComponents/DashboardHeader';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/SharedComponents/Header/DashboardSidebar';
import DashboardRightbar from '../components/SharedComponents/Header/DashboardRightbar';
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightbarOpen, setRightbarOpen] = useState(false);
  const [checkExpand, setCheckExpand] = useState(false);
  console.log("rightbarOpen", rightbarOpen)
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} setCheckExpand={setCheckExpand} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-[#F7F8FA]">
        {/*  Site header */}
        <DashboardHeader rightbarOpen={rightbarOpen} setRightbarOpen={setRightbarOpen} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} checkExpand={checkExpand} />
        <main>
          <Outlet />
        </main>
      </div>
      {/* <div className="lg:hidden ">
        <DashboardRightbar rightbarOpen={rightbarOpen} setRightbarOpen={setRightbarOpen} />
      </div> */}
    </div>
  )
}

export default Dashboard