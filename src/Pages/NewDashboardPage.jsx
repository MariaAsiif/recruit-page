import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import NewDashboardHeader from '../components/NewDashboardComponents/NewDashboardHeader';
import NewDashboardSidebar from '../components/NewDashboardComponents/NewDashboardSidebar';
const NewDashboardPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [profileBar, setprofileBar] = useState(true)
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
                        <div style={{ boxShadow: "0px 3px 6px #0000000D" }} className='h-[84vh] overflow-y-auto p-5 bg-white rounded-2xl'>
                            <Outlet />
                        </div>
                    </div>
                    {profileBar && (
                        <div className="fixed right-0 flex-none w-full h-full bg-white col-lg-2 lg:static lg:w-1/6 lg:h-auto">
                            <div className=''>
                                zfsdfsd

                            </div>
                        </div>
                    )}

                </main>
            </div>
        </div>
    )
}

export default NewDashboardPage