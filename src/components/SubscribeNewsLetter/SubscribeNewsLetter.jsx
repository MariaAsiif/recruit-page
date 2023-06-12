import React from 'react'
import { VscMail } from "react-icons/vsc";
const SubscribeNewsLetter = () => {
    return (
        <div className='bscontainer-fluid bg-gradient-to-r from-[#BF422D] to-[#446402]   py-8 '>
            <div className='row justify-center'>
                <div className='col-lg-6'>
                    <div>
                        <h1 className='text-center lg:mb-8 mb-4 text-white font-sans lg:text-2xl text-xl font-bold'>Subscribe To Our Newsletter</h1>
                        <p className='text-white text-xs font-extralight leading-5 lg:mb-8 mb-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>
                    <div className='row g-0 bg-white rounded-md py-1 px-1'>
                        <div className='col-1 m-auto text-center'>
                            <VscMail className='text-[#969696] inline' />
                        </div>
                        <div className='col-8 m-auto'>
                            <input className='w-full focus:outline-none py-1 text-sm text-[#969696] placeholder:text-[11px]' placeholder='Enter your email address' />
                        </div>
                        <div className='col-3'>
                            <button style={{ boxShadow: "0px 4px 4px #00000040" }} className='bg-[#E84025] w-full rounded-md text-white text-[11px] font-extralight px-1 py-3'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeNewsLetter