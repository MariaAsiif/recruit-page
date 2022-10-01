import React from 'react'
import { RiMessage2Line } from 'react-icons/ri'
import Header from '../SharedComponents/Header/Header'
import beta from '../../assets/images/beta.png'
import { Link } from 'react-router-dom'
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {
                children
            }

            <div className='flex'>
                <Link to="/user-feedback">
                    <div className='user-feedback fixed bottom-[10px] right-10 w-12 '>
                        <div className="rounded-full  bg-gray-400 p-3">
                            <RiMessage2Line className='text-[22px] text-white ml-[2px]' />
                        </div>
                        <span className='text-black text-[14px] text-center ml-[-8px]'>

                            Feedback
                        </span>
                    </div>
                </Link>

                <div className='fixed bottom-[10px] left-50'>
                    <img src={beta} className="w-10 " alt="beta_image" />
                </div>
            </div>

        </>
    )
}

export default Layout