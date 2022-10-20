import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import NewDashboardHeader from '../components/NewDashboardComponents/NewDashboardLayouts/NewDashboardHeader';
import NewDashboardSidebar from '../components/NewDashboardComponents/NewDashboardLayouts/NewDashboardSidebar';
import ProfileBar from '../components/NewDashboardComponents/NewDashboardLayouts/ProfileBar';
const NewDashboardPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [profileBar, setprofileBar] = useState(false)
    const onChangeProfileBar = () => {
        setprofileBar(!profileBar)
    }
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <NewDashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-[#F2F2F2]">
                {/*  Site header */}
                < NewDashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} setprofileBar={onChangeProfileBar} />
                <main className='h-full row g-0'>
                    <div className='col-lg-10 grow transition-all bg-[#F2F2F2] p-[2%]'>
                        <Outlet />
                    </div>
                    {profileBar && <ProfileBar />}
                </main>
            </div>
        </div>
    )
}

export default NewDashboardPage