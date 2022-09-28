import React from 'react'

import { IoChatbubblesSharp } from "react-icons/io5";
const NeedHelp = () => {
    return (
        <div className='bg-white rounded-xl p-4 text-center'>
            <IoChatbubblesSharp size={90} className='inline text-center text-[#999FA9] mb-1' />
            <h1 className='font-sans text-[#626973] font-bold text-lg'>Need help?</h1>
            <p className='text-[#626973] font-sans font-medium text-[10px] mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <button className='px-6 py-3 text-white font-sans rounded-lg text-xs' style={{ boxShadow: "0px 3px 6px #00000029", background: "transparent linear-gradient(251deg, #D57869 0%, #FF3A1C 100%) 0% 0% no-repeat padding-box" }} >Contact US</button>
        </div>
    )
}

export default NeedHelp