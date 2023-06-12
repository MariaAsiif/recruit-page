import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import logo from '../../images/logo.png'
import manu from '../../images/Menu.png'
import LanguageDropdown from '../LanguageDropdown';
import { Link } from 'react-router-dom';
const BuyerHeader = () => {
    return (
        <header style={{ boxShadow: "0px 0px 6px #00000029" }} className="sticky  top-0 h-[70px] bg-white border-b border-slate-200 z-30">
            <div className='px-10 '>
                <div className="flex justify-between items-center pt-4">
                    <div className=''>
                        <img className=' h-auto w-[80%] ' src={logo} alt="logo" loading="lazy" />
                    </div>
                    <div className='w-full'>
                        <div className={`lg:flex ml-8 `}>
                            <input className={`bg-[#F3F6FB]  focus:outline-none w-full py-1 px-2 text-xs text-[#999FA9]`} placeholder='search' />
                            <button className='bg-[#24D29F] px-2 h-[35px] rounded-sm  ml-2'><BiSearch className='inline text-white' /></button>
                        </div>
                    </div>
                    <div className='w-[90%] flex items-center justify-end '>
                        <div className={''}>
                            <IoMdNotificationsOutline className='text-[20px]' />
                        </div>
                        <div className='mx-5'>
                            <LanguageDropdown />
                        </div>
                        <div>
                            <Link to="/das" className='text-[#1F1F1F] text-[18px]'>Sign In</Link>
                        </div>
                        <div className='mx-5'>
                            <Link to="/das" className='border border-[#E2434E] py-2 rounded-lg text-[#E84125] px-2'>ServiceProvider  </Link>
                        </div>
                        <div>
                           <img src={manu} alt="manu" className='object-cover'/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default BuyerHeader