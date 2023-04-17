import React from 'react'
// import { BsFillCalendarMinusFill } from 'react-icons/bs'
import bellbg from '../../images/buyer/bellbg.svg'
import bell from '../../images/buyer/bell.svg'
import message from '../../images/buyer/mes.svg'
import calendar from '../../images/buyer/calandar.svg'
import { AiOutlinePlus } from 'react-icons/ai'
const TopWeights = () => {
    return (
        <>
            <div className="bg-white shadow-md rounded-md py-3 px-2">
                <div className="bscontainer ">
                    <div className='row '>
                        <div className='col-lg-3 lg:mb-0 md:mb-0 mb-2 '>
                            <div className=' p-2 bg-[#FFCD24] bg-opacity-[0.1] rounded-lg' >
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center'>
                                        <div className=' cursor-pointer relative ml-2'>
                                            <img src={bellbg} alt="bel" className='object-cover w-[80%] ' />
                                            <img src={bell} alt="bel" className='object-cover absolute w-[30%]  top-3 bottom-0 left-3 right-0' />
                                        </div>
                                        <div className=''>
                                            <h2 className='text-[16px] leading-0 text-[#707070] font-semibold font-poppine opacity-1'>Notification</h2>
                                            <span className='text-[#707070] text-[12px] leading-0'>5 Unread notification</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 lg:mb-0 md:mb-0 mb-2 '>
                            <div className=' p-2 bg-[#1CA755] bg-opacity-[0.1] rounded-lg' >
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center '>
                                        <img src={message} alt="bel" className='object-cover w-[22%] ml-2 ' />
                                        <div className='ml-2 '>
                                            <h2 className='text-[16px] leading-0 text-[#222943] font-semibold font-poppine opacity-1'>Message</h2>
                                            <span className='text-[#707070] text-[12px] leading-0'>5 Unread notification</span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 lg:mb-0 md:mb-0 mb-2  '>
                            <div className=' p-2 bg-[#3C21F7] bg-opacity-[0.1] rounded-lg' >
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center '>
                                        <img src={calendar} alt="bel" className='object-cover w-[22%] ml-2 ' />
                                        <div className='ml-2 '>
                                            <h2 className='text-[16px] leading-0 text-[#707070] font-semibold font-poppine opacity-1'>Calendar</h2>
                                            <span className='text-[#707070] text-[12px] leading-0'>5 Unread notification</span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 lg:mb-0 md:mb-0 mb-2 '>
                            <div className=' p-2 bg-[#3C21F7]  rounded-lg' >
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center '>
                                        <div className='border bg-white rounded-full p-3.5'>
                                            <AiOutlinePlus className='text-[#3C21F7]' />
                                        </div>
                                        <div className=' ml-2'>
                                            <span className='text-white text-[14px] leading-0'>Create New Project</span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TopWeights