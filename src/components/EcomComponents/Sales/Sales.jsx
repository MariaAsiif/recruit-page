import React from 'react'
import dp_img from "../../../assets/images/Botanist.jpg";
import Rating from '../RatingStarts'
const Sales = () => {

    return (
        <>
            <div className='bscontainer mb-2'>
                <div className='bscontainer mb-2 mt-6'>
                    <div className="tranding-heading relative">
                        <h1 className=" font-medium text-[20px] uppercase">Seller of The Month</h1>
                        <hr className="mt-2 " />
                        <hr className="border-[2px] -bottom-[1px] absolute z-99 rounded-sm border-[#24D29F] w-[20%]" />
                    </div>
                </div>

                <div className='row mt-2'>
                    {
                        Array(8).fill(8).map((s, index) => (
                            <div className='col-lg-3 '>
                                <div className='row mb-3'>
                                    <div className="col-lg-6">
                                        <div className='relative'>
                                            <div className=' lg:w-[80%] h-[120px] bg-[#E0DFDF]'></div>
                                            <div className=' lg:w-[95%] absolute   top-[10%] z-10 left-5'>
                                                <img src={dp_img} className="h-[95px] object-cover" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 ">
                                        <div className='pt-3'>
                                            <h2 className='text-[12px] font-medium'>Vantich VP-153C Camera</h2>
                                            <Rating value={0} text={"0"} font="sm" />
                                            <button className='bg-[#DB3C23] text-white p-2 text-sm'>Visit Store</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>

        </>
    )
}

export default Sales