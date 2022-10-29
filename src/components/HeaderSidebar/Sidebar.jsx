import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import hproxlogo from '../../images/logo.png';
import { sidebarItems } from '../../utils/enum'
// import { useSelector } from 'react-redux'
function Sidebar({
  sidebarOpen,
  setSidebarOpen
}) {
  // const sidebaritems = SidebarObj()

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);





  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === true);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    let expand = localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);







  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true" ></div>

      {/* Sidebar */}
      <div id="sidebar" ref={sidebar} className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-50 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white border-r  py-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`} >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2 border-b">
          {/* Close button */}
          <button ref={trigger} className="lg:hidden text-slate-500 hover:text-slate-400" onClick={() => setSidebarOpen(!sidebarOpen)} aria-controls="sidebar" aria-expanded={sidebarOpen}  >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>

          <NavLink end to="/dashboard" className="flex justify-center">
            <img src={hproxlogo} alt="hprox_lgo" className=" w-[50%] mb-2 " />
          </NavLink>

        </div>

        {/* Links */}
        <div className="space-y-8">

          <div >
            <ul className="max-h-[400px] overflow-auto">
              {sidebarItems.map((item, i) => (
                <li className={` py-2 rounded-sm mb-0.5 last:mb-0 `} key={i}>
                  <NavLink end to={item.link} className={`block text-slate-800 hover:text-black truncate transition duration-150 `} >
                    <div className="flex items-center justify-center">
                      <div className='rounded-r bg-[#93C234] h-[35px] w-[30px]'></div>
                      {item.icon}
                      <div className="grow flex items-center justify-start">
                        <span className="text-sm text-black font-medium ml-3  2xl:opacity-100 duration-200">
                          {item.label}
                        </span>
                      </div>

                    </div>
                  </NavLink>
                </li>
              ))}


            </ul>

          </div>


        </div>
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;