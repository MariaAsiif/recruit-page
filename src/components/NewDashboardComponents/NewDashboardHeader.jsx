import React from 'react'

const NewDashboardHeader = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <header style={{ boxShadow: "0px 0px 6px #00000029" }} className="sticky top-0 z-30 bg-[#4DA676] border-b border-slate-200">
            <div className="px-4 bg-white rounded-tl-none sm:px-6 lg:px-6 lg:rounded-tl-3xl">
                <div className="flex items-center justify-between h-16 -mb-px">
                    {/* Header: Left side */}
                    <div className="flex   w-[10%] lg:hidden">

                        {/* Hamburger button */}
                        <button className="text-slate-500 hover:text-slate-600 lg:hidden" aria-controls="sidebar" aria-expanded={sidebarOpen} onClick={() => setSidebarOpen(!sidebarOpen)}    >
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">   <rect x="4" y="5" width="16" height="2" />   <rect x="4" y="11" width="16" height="2" /> <rect x="4" y="17" width="16" height="2" />   </svg>
                        </button>
                    </div>

                    {/* Header: Right side */}
                    <div className="lg:w-[100%] ">
                        <div className='flex items-center justify-between top_search_bar '>


                        </div>
                    </div>



                </div>
            </div>
        </header>
    )
}

export default NewDashboardHeader