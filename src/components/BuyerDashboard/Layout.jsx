import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';
import TopWeights from './TopWeights';

const BuyerWrapper = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [rightbarOpen, setRightbarOpen] = useState(false);
    const [checkExpand, setCheckExpand] = useState(false);
    return (
        <div className="flex h-screen overflow-hidden ">

            {/* Sidebar */}
            <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} setCheckExpand={setCheckExpand} />
            {/* Content area */}
            <div className="relative flex flex-col w-full  flex-1 overflow-y-auto overflow-x-hidden ">
                {/*  Site header */}
                <DashboardHeader rightbarOpen={rightbarOpen} setRightbarOpen={setRightbarOpen}  sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} checkExpand={checkExpand} />
                <main className='mx-5 mt-5 '>
                    <TopWeights/>
                    <Outlet />
                </main>
            </div>

        </div>
    )
}

export default BuyerWrapper