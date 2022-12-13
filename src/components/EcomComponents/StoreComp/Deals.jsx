import React from 'react'
import deal from '../../../assets/Stocks/timer.png'
import hoverColor from '../../../assets/Stocks/bluehover.png'
import { AiFillPauseCircle } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
const Deals = () => {
    return (
        <>
            <div className='relative'>
                <img src={deal} alt="deal" />
                <div className='absolute top-0 w-full h-full '>
                    <img src={hoverColor} alt="hover" />
                </div>
                <div className='absolute top-[20%] right-[20%] bottom-0'>
                    <div className='flex justify-center my-3 '>
                        <div className='border border-[#24D29F] rounded-full shadow-lg p-3 w-[98px] mx-3 text-center flex justify-center items-center '>
                            <div className=' bg-white rounded-full shadow-lg p-3 w-[75px] mx-3 text-center flex justify-center items-center '>
                                <BsFillPlayFill className='text-[#24D29F] text-[3rem]' />
                            </div>
                        </div>
                    </div>
                    <h1 className='text-white text-center text-[2rem] font-semibold'>
                        Deal of The Day
                    </h1>
                    <p className='max-w-[450px] m-auto text-[14px] text-white'>Way is there to get clothing you’re sure to love than by making it</p>
                    <div className='flex items-center justify-center my-2  '>
                        <div>
                            <div className='border bg-white rounded-full shadow-lg p-3 w-[75px] mx-3 text-center  ' >
                                <h2 className='font-bold text-[20px]'>26</h2>
                                <p className='uppercase text-[14px] text-center'>Days</p>
                            </div>
                        </div>
                        <div>
                            <div className='border bg-white rounded-full shadow-lg p-3 w-[75px] mx-3 text-center  '>
                                <h2 className='font-bold text-[20px]'>26</h2>
                                <p className='uppercase text-[14px] text-center'>hours</p>
                            </div>
                        </div>
                        <div>
                            <div className='border bg-white rounded-full shadow-lg p-3 w-[75px] mx-3 text-center  '>
                                <h2 className='font-bold text-[20px]'>26</h2>
                                <p className='uppercase text-[14px] text-center'>Minuts</p>
                            </div>
                        </div>
                        <div>
                            <div className='border bg-white rounded-full shadow-lg p-3 w-[75px] mx-3 text-center  '>
                                <h2 className='font-bold text-[20px]'>26</h2>
                                <p className='uppercase text-[14px] text-center'>seconds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Deals