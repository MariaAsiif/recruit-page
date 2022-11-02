import React, { useState } from 'react'
import { BiDotsHorizontal, BiSend } from 'react-icons/bi'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'

const OrderDetails = () => {
    const [showDetails, setshowDetails] = useState(false)
    return (
        <div>
            <div style={{ boxShadow: "0px 3px 6px #0000000D" }} className='mb-5 bg-white rounded-t-2xl'>
                <div className='grid gap-0 px-3 lg:px-10 grid-cols-24'>
                    <div className='col-span-8 border-r py-2 flex items-center text-[#626973] lg:text-2xl font-semibold'>
                        <h1>Order <span className='text-[#4DA676]'>#A43400</span></h1>
                    </div>
                    <div className='col-span-4 border-r text-center py-2 flex justify-center items-center flex-col text-[#4DA676]'>
                        <h1 className='font-semibold lg:text-2xl'>25</h1>
                        <h1 className='hidden lg:block'>Days</h1><h1 className='text-xl font-medium lg:hidden'>D</h1>
                    </div>
                    <div className='col-span-4 border-r text-center py-2 flex justify-center items-center flex-col text-[#4DA676]'>
                        <h1 className='font-semibold lg:text-2xl'>07</h1>
                        <h1 className='hidden lg:block'>Hours</h1><h1 className='text-xl font-medium lg:hidden'>H</h1>
                    </div>
                    <div className='col-span-4 text-center border-r py-2 flex justify-center items-center flex-col text-[#4DA676]'>
                        <h1 className='font-semibold lg:text-2xl'>10</h1>
                        <h1 className='hidden lg:block'>Minutes</h1><h1 className='text-xl font-medium lg:hidden'>M</h1>
                    </div>
                    <div className='col-span-4 text-center py-2 flex justify-center items-center flex-col text-[#4DA676]'>
                        <h1 className='font-semibold lg:text-2xl'>59</h1>
                        <h1 className='hidden lg:block'>Seconds</h1><h1 className='text-xl font-medium lg:hidden'>S</h1>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ boxShadow: "0px 3px 6px #00000029" }} className='px-3 py-3 mb-2 bg-white lg:px-10 '>
                    <div className='row g-0'>
                        <div className='flex items-center col-lg-11 col-10'>
                            <img className='w-full h-auto max-w-[50px] rounded-full' src="http://placekitten.com/200/200" alt="logo" loading="lazy" />
                            <h1 className='text-[#626973] font-semibold text-xl ml-3'>Your order details</h1>
                        </div>
                        <div className='flex items-center justify-center text-center col-lg-1 col-2'>
                            {
                                showDetails ?
                                    <FaChevronUp onClick={() => setshowDetails(!showDetails)} size={30} className="inline cursor-pointer text-[#4DA676]" /> :
                                    <FaChevronDown onClick={() => setshowDetails(!showDetails)} size={30} className="inline cursor-pointer text-[#4DA676]" />
                            }

                        </div>
                    </div>
                </div>
                {
                    showDetails && (
                        <div className='py-5 pl-5 pr-5 mb-5 bg-white lg:pl-20'>
                            <p className='text-[#707070] font-semibold mb-3'>Buyer: icedrgy (view history)|Date ordered 5 Sept, 1:30</p>
                            <p className='text-[#707070] text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p>
                        </div>
                    )
                }
                <div>
                    <div style={{ boxShadow: "0px 3px 6px #0000000D" }} className='mb-5 bg-white rounded-b-2xl'>
                        <div className='lg:px-10 px-5 text-[#626973] text-lg font-semibold border-b mb-3 '>
                            <h1>Your order details</h1>
                        </div>

                        <div className='px-5 mb-5 lg:px-10'>
                            <div className='mb-5 row g-0'>
                                <div className='grid grid-cols-24 col-lg-6'>
                                    <div className='col-span-3 '>
                                        <img className=' w-full h-auto max-w-[40px] rounded-full' src="http://placekitten.com/200/200" alt="logo" loading="lazy" />
                                    </div>
                                    <div className='pt-2 col-span-21'>
                                        <h1 className='text-[#4DA676]'>icedesigner <span className='text-[#707070] ml-5 text-xs'>30 Sept, 12:40</span></h1>
                                        <h1 className='text-[#707070] text-xs'> I’ve got the message yesterday.The Ticket number from Support . I’ve got the message yesterday.</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='justify-end mb-5 row g-0'>
                                <div className='grid grid-cols-24 col-lg-6'>
                                    <div className='col-span-3 '>
                                        <img className=' w-full h-auto max-w-[40px] rounded-full' src="http://placekitten.com/200/200" alt="logo" loading="lazy" />
                                    </div>
                                    <div className='pt-2 col-span-21'>
                                        <h1 className='text-[#4DA676]'>icedesigner <span className='text-[#707070] ml-5 text-xs'>30 Sept, 12:40</span></h1>
                                        <h1 className='text-[#707070] text-xs'> I’ve got the message yesterday.The Ticket number from Support . I’ve got the message yesterday.</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className=' row g-0 py-3 px-5 lg:px-10 border-t border-[#4DA676]'>
                            <div className='col-lg-3 col-3'>
                                <BiSend className='inline text-[#4DA676]' />
                                <BiSend className='inline text-[#4DA676]' />
                                <BiSend className='inline text-[#4DA676]' />
                                <BiSend className='inline text-[#4DA676]' />
                                <BiSend className='inline text-[#4DA676]' />
                                <BiSend className='inline text-[#4DA676]' />
                            </div>
                            <div className='p-1 text-center border border-[#707070] col-lg-6 col-6 rounded-2xl'>
                                <div>
                                    <input className='w-28 lg:w-11/12 focus:outline-none' />
                                    <BiSend className='inline text-[#4DA676]' />
                                </div>
                            </div>
                            <div className='text-right col-lg-3 col-3'>
                                <small className='text-[#44444F] mr-3'>Saved</small>
                                <RiDeleteBinLine className='inline mr-3 text-[#4DA676]' />
                                <BiDotsHorizontal className='inline text-[#4DA676]' />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}

export default OrderDetails