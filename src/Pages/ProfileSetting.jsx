import React from 'react'
import MainProfile from '../components/ProfileSettingComponents/MainProfile'
import { IoChatbubblesSharp } from "react-icons/io5";

const ProfileSetting = () => {
    return (
        <div className='bscontainer-fluid px-6 py-6'>
            <div className='row border mb-6'>
                <div className='col-lg-12'>
                    <h1 className='font-sans font-bold text-lg mb-1'>Edit Profile</h1>
                    <h1 className='text-[#949799] font-sans font-normal text-xs'>Based on your preferences</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-3 border'>
                    <div className='row gy-4'>
                        <div className='col-lg-12 border'>
                            <MainProfile />
                        </div>
                        <div className='col-lg-12 border'>
                            <div className='bg-white    rounded-xl p-4 text-center'>
                                <IoChatbubblesSharp size={90} className='inline text-center text-[#999FA9] mb-1' />
                                <h1 className='font-sans text-[#626973] font-bold text-lg'>Need help?</h1>
                                <p className='text-[#626973] font-sans font-medium text-[10px] mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <button className='px-6 py-3 text-white font-sans rounded-lg text-xs' style={{ boxShadow: "0px 3px 6px #00000029", background: "transparent linear-gradient(251deg, #D57869 0%, #FF3A1C 100%) 0% 0% no-repeat padding-box" }} >Contact US</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-lg-9 border'>
                    <div className='row gy-4'>
                        <div className='col-lg-12 border'>
                            <div className='bg-white h-40'></div>
                        </div>
                        <div className='col-lg-12 border'>
                            <div className='bg-white h-[368px]'></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileSetting