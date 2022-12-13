import React from 'react'
import ship from '../../../assets/Stocks/ship.png'
import icon from '../../../assets/Stocks/Icon.png'
import head from '../../../assets/Stocks/head.png'
import arrowDown from '../../../assets/Stocks/curve-down.png'
import arrowUp from '../../../assets/Stocks/curve-up.png'
const Benefits = () => {
    return (
        <>

            <div className="bscontainer mt-[2rem] mb-[2rem] ">
                <div className="row">
                    <div className="col-lg-4">
                        <div className='flex items-center '>
                            <div className=' w-[70px] h-[70px] flex bg-[#FBFBFB] justify-center  rounded-full p-2 shadow-lg'>
                                <img src={ship} className="object-contain w-9" alt="shipping" />
                            </div>
                            <div className='mx-2 pt-4'>
                                <h2 className='text-[15px] text-[#1B1D21] font-semibold'>Free Shipping</h2>
                                <p className='text-[12px] max-w-[200px]'>For all your orders over of $120 with speciality product</p>
                                <span className='text-[12px] font-semibold text-[#24D29F]'>Learn More </span>
                            </div>
                            <div>
                                <img src={arrowDown} alt="arrow"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='flex items-center '>
                            <div className=' w-[70px] h-[70px] flex bg-[#FBFBFB] justify-center  rounded-full p-2 shadow-lg'>
                                <img src={icon} className="object-contain w-9" alt="shipping" />
                            </div>
                            <div className='mx-2 pt-4'>
                                <h2 className='text-[15px] text-[#1B1D21] font-semibold'>Free Shipping</h2>
                                <p className='text-[12px] max-w-[200px]'>For all your orders over of $120 with speciality product</p>
                                <span className='text-[12px] font-semibold text-[#24D29F]'>Learn More </span>
                            </div>
                            <div>
                                <img src={arrowUp} alt="arrow"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='flex items-center '>
                            <div className=' w-[70px] h-[70px] flex bg-[#FBFBFB] justify-center  rounded-full p-2 shadow-lg'>
                                <img src={head} className="object-contain w-9" alt="shipping" />
                            </div>
                            <div className='mx-2 pt-4'>
                                <h2 className='text-[15px] text-[#1B1D21] font-semibold'>Free Shipping</h2>
                                <p className='text-[12px] max-w-[200px]'>For all your orders over of $120 with speciality product</p>
                                <span className='text-[12px] font-semibold text-[#24D29F]'>Learn More </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Benefits