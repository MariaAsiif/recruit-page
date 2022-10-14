import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import NewDashboardHeader from '../components/NewDashboardComponents/NewDashboardHeader';
import NewDashboardSidebar from '../components/NewDashboardComponents/NewDashboardSidebar';

const NewDashboardPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <NewDashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-[#F2F2F2]">
                {/*  Site header */}
                < NewDashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <main  >
                    <Outlet />
                </main>
            </div>

        </div>
    )
}

export default NewDashboardPage