import React from 'react'
import { Link } from 'react-router-dom'
const BuyerNotification = () => {
    return (
        <>
            <div className='bscontainer-fluid h-full py-5 px-5'>
                <div className='row'>
                    <div className='col-lg-12 '>
                        <div className="overflow-x-auto bg-white rounded-md ">

                            <div className="bscontainer-fluid mt-4">
                                <div className='bg-[#F9FAFE] shadow-md rounded-md border  p-3'>
                                    <div className="flex justify-between items-center px-1 border-b py-2 ">
                                        <h2 className='text-[#878787] text-[16px] font-semibold'>Notification</h2>
                                        <h2 className='text-[#878787] text-[16px] font-semibold'>Mark as all read</h2>
                                    </div>
                                    <ul className='m-0 p-0'>
                                        <Link to="/dashboard/notification-detail">
                                            <li className=' p-2 rounded-lg bg-[#24D29F] bg-opacity-[0.09] shadow-[#00000029] mt-4'>
                                                <div className='flex justify-between items-center'>
                                                    <div className="flex items-center">
                                                        <div className=' w-[45px] h-[45px] bg-[#222943] rounded-full'></div>
                                                        <div className='ml-2 text-[#626973]'>
                                                            <h2 className='text-[16px] text-[#222943]'>Elizabeth Holland</h2>
                                                            <span className='text-[14px]  text-[#222943]'>Nunc maximus nibh at placerat tincidunt.</span>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center pr-2 '>
                                                        <h2>Proin ac quam et lectus vestibulum blandit.</h2>
                                                    </div>

                                                </div>
                                            </li>
                                        </Link>
                                        <Link to="/dashboard/notification-detail">
                                            <li className=' p-2  border-t border-b shadow-[#00000029] mt-4'>
                                                <div className='flex justify-between items-center'>
                                                    <div className="flex items-center">
                                                        <div className=' w-[45px] h-[45px] bg-[#222943] rounded-full'></div>
                                                        <div className='ml-2 text-[#626973]'>
                                                            <h2 className='text-[18px]'>hellow this is heainf <span className='text-[14px]'>this is invited to me </span></h2>
                                                            <span className='text-sm text-gray-400'>12 mint ago</span>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center pr-2 '>
                                                        <h2>Proin ac quam et lectus vestibulum blandit.</h2>
                                                    </div>

                                                </div>
                                            </li>
                                        </Link>
                                        <Link to="/dashboard/notification-detail">
                                            <li className=' p-2  border-t border-b shadow-[#00000029] mt-4'>
                                                <div className='flex justify-between items-center'>
                                                    <div className="flex items-center">
                                                        <div className=' w-[45px] h-[45px] bg-[#222943] rounded-full'></div>
                                                        <div className='ml-2 text-[#626973]'>
                                                            <h2 className='text-[18px]'>hellow this is heainf <span className='text-[14px]'>this is invited to me </span></h2>
                                                            <span className='text-sm text-gray-400'>12 mint ago</span>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center pr-2 '>
                                                        <h2>Proin ac quam et lectus vestibulum blandit.</h2>
                                                    </div>

                                                </div>
                                            </li>
                                        </Link>
                                        <Link to="/dashboard/notification-detail">
                                            <li className=' p-2  border-t border-b shadow-[#00000029] mt-4'>
                                                <div className='flex justify-between items-center'>
                                                    <div className="flex items-center">
                                                        <div className=' w-[45px] h-[45px] bg-[#222943] rounded-full'></div>
                                                        <div className='ml-2 text-[#626973]'>
                                                            <h2 className='text-[18px]'>hellow this is heainf <span className='text-[14px]'>this is invited to me </span></h2>
                                                            <span className='text-sm text-gray-400'>12 mint ago</span>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center pr-2 '>
                                                        <h2 className="text-[16px]">Proin ac quam et lectus vestibulum blandit.</h2>
                                                    </div>

                                                </div>
                                            </li>
                                        </Link>

                                        <li className=' p-2 bg-white  mt-4'>
                                            <div className='flex justify-center items-center'>
                                                <h2 className='text-[#24D29F] '>View All</h2>
                                            </div>
                                        </li>


                                    </ul>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyerNotification