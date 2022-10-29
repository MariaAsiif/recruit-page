import React from 'react'

import dp_img from "../../../assets/images/Botanist.jpg";
const Products = () => {
    return (
        <>
            <div className='bscontainer mb-2'>
                <div className='row'>
                    <div className='col-lg-4 '>
                        <div className=' bg-[#E0DFDF]  p-2 pb-6'>
                            <div className='flex bg-[#E0DFDF]  flex-col justify-center text-center   '>
                                <div className='flex justify-center pt-4 '>

                                    <img src={dp_img} className=" object-cover w-[130px]  h-[130px]" alt="img_pro" />
                                </div>
                                <div className='pt-5'>
                                    <h2 className='text-[20px] text-black  font-bold '>Mens Shopping</h2>
                                    <p className='text-[12px]'>Lorem ipsum dolor sit amet...</p>
                                    <button className=' hover:bg-[#EEEEEE] hover:text-black bg-[#313131] text-white text-[14px] h-[45px] w-[40%] mt-5'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 '>
                        <div className='bg-[#E0DFDF] p-2 pb-6'>
                            <div className='flex justify-center pt-4 flex-col text-center  '>
                                <div className='flex justify-center'>
                                    <img src={dp_img} className=" object-cover w-[130px]   h-[130px]" alt="img_pro" />
                                </div>
                                <div className='pt-5'>
                                    <h2 className='text-[20px] text-black  font-bold '>Mens Shopping</h2>
                                    <p className='text-[12px]'>Lorem ipsum dolor sit amet...</p>
                                    <button className=' hover:bg-[#EEEEEE] hover:text-black bg-[#313131] text-white text-[14px] h-[45px] w-[40%] mt-5'>Shop Now</button>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-4 '>
                        <div className='bg-[#E0DFDF] p-2 pb-6'>
                            <div className='flex justify-center pt-4 flex-col text-center  '>
                                <div className='flex justify-center'>
                                    <img src={dp_img} className=" object-cover   w-[130px] h-[130px]" alt="img_pro" />

                                </div>
                                <div className='pt-5'>
                                    <h2 className='text-[20px] text-black  font-bold '>Mens Shopping</h2>
                                    <p className='text-[12px]'>Lorem ipsum dolor sit amet...</p>
                                    <button className=' hover:bg-[#EEEEEE] hover:text-black bg-[#313131] text-white text-[14px] h-[45px] w-[40%] mt-5'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Products