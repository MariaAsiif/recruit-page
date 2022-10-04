import React, { useState } from 'react'
import DashboardHeader from '../components/SharedComponents/DashboardHeader';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/SharedComponents/Header/DashboardSidebar';
// import DashboardRightbar from '../components/SharedComponents/Header/DashboardRightbar';
import { BiSearch } from 'react-icons/bi'
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightbarOpen, setRightbarOpen] = useState(false);
  const [checkExpand, setCheckExpand] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} setCheckExpand={setCheckExpand} />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-[#F7F8FA]">
        {/*  Site header */}
        <DashboardHeader rightbarOpen={rightbarOpen} setRightbarOpen={setRightbarOpen} Toggle={setToggle} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} checkExpand={checkExpand} />
        {toggle &&
          <div className='mx-5'>
            <div className="border bg-white rounded-b-xl ">
              <div className='row'>
                <div className='col-lg-6 p-5'>
                  <div>
                    <h2 className='text-[20px] font-medium'>What are the <span className='text-green-700'>main skills</span> required for your work?</h2>
                  </div>
                </div>
                <div className='col-lg-6 border-l p-8'>
                  <div>
                    <h2 className='text-[18px] font-medium mb-2'>Search or add up to  10 skills</h2>
                    <div className='border border-black rounded-full flex items-center h-full p-2'>
                      <input type="text" className=' rounded-full w-full' />
                      <BiSearch />
                    </div>
                    <span className='text-[10px] ml-5'>For the best results, add 3-5 skills</span>
                    <h2 className='pt-2 text-[18px] font-semibold'>Populer skills</h2>
                    <div className='flex items-center flex-wrap mt-1'>
                      <div className='border rounded-full p-1 '>
                        <span className='text-[14px] px-2'>English Transitions</span>
                      </div>
                      <div className='border rounded-full p-1 m-2 '>
                        <span className='text-[14px] px-2'>English Transitions</span>
                      </div>
                      <div className='border rounded-full p-1 m-2 '>
                        <span className='text-[14px] px-2'>English Transitions</span>
                      </div>
                    </div>
                    <div className='flex items-center justify-end mt-3'>
                      <button className='w-[20%] border rounded-md h-[43px] border-green-700' onClick={() => setToggle(false)}>Cancel</button>
                      <button className='w-[20%] border rounded-md h-[43px] mx-3 bg-green-700 text-white'>Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
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