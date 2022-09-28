import React from 'react'
import { BsCalendarWeekFill, BsArrowRightShort } from 'react-icons/bs'

const Notification = () => {
    return (
        <div className='bscontainer-fluid px-6 py-6'>
            <div className='row g-0 mb-10'>
                <div className='col-lg-10 border font-sans'>
                    <h1 className='text-lg font-lg font-semibold'>All Notification</h1>
                    <h1 className='text-[#949799] text-sm font-light'>Here all the notification shows</h1>
                </div>
                <div className='col-lg-2 border'>
                    <button className='bg-[#65A33A] px-6 py-3 rounded-lg text-white font-sans text-lg mr-5'>All</button>
                    <button className='bg-white px-6 py-3 rounded-lg text-[#999FA9] font-sans text-lg'>Unread(6)</button>
                </div>
            </div>
            <div className='px-24'>
                <div className='row g-0'>
                    <div className='col-lg-3 px-6'>
                        <div style={{ boxShadow: "0px 3px 5px #00000029" }} className='bg-[#999FA9] rounded-lg p-3 flex items-end justify-between '>
                            <BsCalendarWeekFill size={43} className='text-white p-3 rounded-sm bg-[#c7c8ca] block' />
                            <div  >
                                <h1 className='text-white text-sm font-sans font-bold'>17</h1>
                                <h1 className='text-[#c7c8ca] text-sm font-sans font-light'>Interview schedule</h1>
                            </div>
                            <BsArrowRightShort size={33} className='block text-white self-center' />
                        </div>
                    </div>
                    <div className='col-lg-3 px-6'>
                        <div style={{ boxShadow: "0px 3px 5px #00000029" }} className='bg-[#999FA9] rounded-lg p-3 flex items-end justify-between '>
                            <BsCalendarWeekFill size={43} className='text-white p-3 rounded-sm bg-[#c7c8ca] block' />
                            <div  >
                                <h1 className='text-white text-sm font-sans font-bold'>17</h1>
                                <h1 className='text-[#c7c8ca] text-sm font-sans font-light'>Application sent</h1>
                            </div>
                            <BsArrowRightShort size={33} className='block text-white self-center' />
                        </div>
                    </div>
                    <div className='col-lg-3 px-6'>
                        <div style={{ boxShadow: "0px 3px 5px #00000029" }} className='bg-[#999FA9] rounded-lg p-3 flex items-end justify-between '>
                            <BsCalendarWeekFill size={43} className='text-white p-3 rounded-sm bg-[#c7c8ca] block' />
                            <div  >
                                <h1 className='text-white text-sm font-sans font-bold'>17</h1>
                                <h1 className='text-[#c7c8ca] text-sm font-sans font-light'>Profile viewed</h1>
                            </div>
                            <BsArrowRightShort size={33} className='block text-white self-center' />
                        </div>
                    </div>
                    <div className='col-lg-3 px-6'>
                        <div style={{ boxShadow: "0px 3px 5px #00000029" }} className='bg-[#999FA9] rounded-lg p-3 flex items-end justify-between '>
                            <BsCalendarWeekFill size={43} className='text-white p-3 rounded-sm bg-[#c7c8ca] block' />
                            <div  >
                                <h1 className='text-white text-sm font-sans font-bold'>17</h1>
                                <h1 className='text-[#c7c8ca] text-sm font-sans font-light'>Unread Message</h1>
                            </div>
                            <BsArrowRightShort size={33} className='block text-white self-center' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Notification