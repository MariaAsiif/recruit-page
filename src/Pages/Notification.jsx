import React from 'react'
import { BsArrowRight, BsFillCalendarMinusFill } from 'react-icons/bs'
import { IoHeartCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Notification = () => {
    return (
        <>
            <div className='bscontainer-fluid h-full py-5 px-5'>
                <div className='row'>
                    <div className='col-lg-12 flex justify-between items-end lg:px-10 mb-5'>
                        <div className='lg:w-[90%]'>
                            <h1 className='text-[#0D1829] font-semibold mb-2'>All Notification</h1>
                            <h1 className='text-[#626973] text-xs font-normal'>Based on your preferences</h1>
                        </div>

                        <div className="text-center flex lg:w-[20%]">
                            <div className=' p-2 lg:w-[30%]  cursor-pointer rounded-md text-white hover:bg-[#65A33A] bg-[#E84025]'>All</div>
                            <div className=' p-2 mx-2 lg:w-[50%] cursor-pointer rounded-md text-white hover:bg-[#65A33A] bg-[#E84025]'>UnRead</div>
                        </div>

                    </div>
                    <div className='col-lg-12 '>
                        <div className="overflow-x-auto bg-white rounded-md ">
                            <div className="bscontainer mt-5 ">
                                <div className='row '>
                                    <div className='col-lg-3 lg:mb-0 md:mb-0 mb-2 '>
                                        <div className=' p-2 bg-[#81A5F7] rounded-md' >
                                            <div className='flex justify-between items-center'>
                                                <div className='flex items-center'>
                                                    <div className=' p-3 bg-blue-300 cursor-pointer'>
                                                        <BsFillCalendarMinusFill className='  text-[20px] text-white' />
                                                    </div>
                                                    <div className='ml-2 text-[12px]'>
                                                        <h2 className='text-[14px] text-white'>17</h2>
                                                        <span className='text-[#FFFFFF]'>Application sent</span>
                                                    </div>

                                                </div>
                                                <div>
                                                    <BsArrowRight className='text-white text-[20px]' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 lg:mb-0 md:mb-0 mb-2 '>
                                        <div className=' p-2 bg-[#F5C270] rounded-md' >
                                            <div className='flex justify-between items-center'>
                                                <div className='flex items-center'>
                                                    <div className=' p-3 bg-[#eaddc8] cursor-pointer'>
                                                        <BsFillCalendarMinusFill className='  text-[20px] text-white' />
                                                    </div>
                                                    <div className='ml-2 text-[12px]'>
                                                        <h2 className='text-[14px] text-white'>17</h2>
                                                        <span className='text-[#FFFFFF]'>Application sent</span>
                                                    </div>

                                                </div>
                                                <div>
                                                    <BsArrowRight className='text-white text-[20px]' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 lg:mb-0 md:mb-0 mb-2  '>
                                        <div className=' p-2 bg-[#79D9B1] rounded-md' >
                                            <div className='flex justify-between items-center'>
                                                <div className='flex items-center'>
                                                    <div className=' p-3 bg-[#a8e1ca] cursor-pointer'>
                                                        <BsFillCalendarMinusFill className='  text-[20px] text-white' />
                                                    </div>
                                                    <div className='ml-2 text-[12px]'>
                                                        <h2 className='text-[14px] text-white'>17</h2>
                                                        <span className='text-[#FFFFFF]'>Application sent</span>
                                                    </div>

                                                </div>
                                                <div>
                                                    <BsArrowRight className='text-white text-[20px]' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 lg:mb-0 md:mb-0 mb-2 '>
                                        <div className=' p-2 border bg-[#D198F6] rounded-md' >
                                            <div className='flex justify-between items-center'>
                                                <div className='flex items-center'>
                                                    <div className=' p-3 bg-[#ddbff0] cursor-pointer'>
                                                        <BsFillCalendarMinusFill className='  text-[20px] text-white' />
                                                    </div>
                                                    <div className='ml-2 text-[12px]'>
                                                        <h2 className='text-[14px] text-white'>17</h2>
                                                        <span className='text-[#FFFFFF]'>Application sent</span>
                                                    </div>

                                                </div>
                                                <div>
                                                    <BsArrowRight className='text-white text-[20px]' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bscontainer-fluid mt-4">
                                <ul className='m-0 p-0'>
                                    <Link to="/dashboard/notification-detail">
                                        <li className=' p-2 rounded-lg bg-[#F7F8FA] shadow-[#00000029] mt-4'>
                                            <div className='flex justify-between items-center'>
                                                <div className="flex items-center">
                                                    <div className=' w-[45px] h-[45px] bg-red-500 rounded-full'></div>
                                                    <div className='ml-2 text-[#626973]'>
                                                        <h2 className='text-[18px]'>hellow this is heainf <span className='text-[14px]'>this is invited to me </span></h2>
                                                        <span className='text-sm text-gray-400'>12 mint ago</span>
                                                    </div>
                                                </div>
                                                <div className='flex items-center pr-2 '>
                                                    <IoHeartCircle className='text-[30px] text-red-400' />
                                                    <span className='text-[30px] pl-2 -mt-4'>...</span>
                                                </div>

                                            </div>
                                        </li>
                                    </Link>
                                    <Link to="/dashboard/notification-detail">
                                        <li className=' p-2 rounded-lg bg-[#F7F8FA] shadow-[#00000029] mt-4'>
                                            <div className='flex justify-between items-center'>
                                                <div className="flex items-center">
                                                    <div className=' w-[45px] h-[45px] bg-red-500 rounded-full'></div>
                                                    <div className='ml-2 text-[#626973]'>
                                                        <h2 className='text-[18px]'>hellow this is heainf <span className='text-[14px]'>this is invited to me </span></h2>
                                                        <span className='text-sm text-gray-400'>12 mint ago</span>
                                                    </div>
                                                </div>
                                                <div className='flex items-center pr-2 '>
                                                    <IoHeartCircle className='text-[30px] text-red-400' />
                                                    <span className='text-[30px] pl-2 -mt-4'>...</span>
                                                </div>

                                            </div>
                                        </li>
                                    </Link>
                                    <Link to="/dashboard/notification-detail">
                                        <li className=' p-2 rounded-lg bg-[#F7F8FA] shadow-[#00000029] mt-4'>
                                            <div className='flex justify-between items-center'>
                                                <div className="flex items-center">
                                                    <div className=' w-[45px] h-[45px] bg-red-500 rounded-full'></div>
                                                    <div className='ml-2 text-[#626973]'>
                                                        <h2 className='text-[18px]'>hellow this is heainf <span className='text-[14px]'>this is invited to me </span></h2>
                                                        <span className='text-sm text-gray-400'>12 mint ago</span>
                                                    </div>
                                                </div>
                                                <div className='flex items-center pr-2 '>
                                                    <IoHeartCircle className='text-[30px] text-red-400' />
                                                    <span className='text-[30px] pl-2 -mt-4'>...</span>
                                                </div>

                                            </div>
                                        </li>
                                    </Link>
                                    <Link to="/dashboard/notification-detail">
                                        <li className=' p-2 rounded-lg bg-[#F7F8FA] shadow-[#00000029] mt-4'>
                                            <div className='flex justify-between items-center'>
                                                <div className="flex items-center">
                                                    <div className=' w-[45px] h-[45px] bg-red-500 rounded-full'></div>
                                                    <div className='ml-2 text-[#626973]'>
                                                        <h2 className='text-[18px]'>hellow this is heainf <span className='text-[14px]'>this is invited to me </span></h2>
                                                        <span className='text-sm text-gray-400'>12 mint ago</span>
                                                    </div>
                                                </div>
                                                <div className='flex items-center pr-2 '>
                                                    <IoHeartCircle className='text-[30px] text-red-400' />
                                                    <span className='text-[30px] pl-2 -mt-4'>...</span>
                                                </div>

                                            </div>
                                        </li>
                                    </Link>
                                    

                                </ul>
                            </div>
                            <div className='px-8 my-6 flex justify-between items-center'>
                                <div className='lg:w-[70%] w-full'>
                                    <h1 className='text-[#999FA9] text-xs'>Showing 04-12 of 29</h1>
                                </div>
                                <div className='lg:w-[20%] w-full'>
                                    <div className=' flex justify-end'>
                                        <div className='w-[40%] '>Prev</div>
                                        <div className='w-[20%] text-[#E84025]'>01</div>
                                        <div className='w-[20%]'>02</div>
                                        <div className='w-[20%]'>05</div>
                                        <div className='w-[40%] text-right text-[#E84025]'>Next</div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notification