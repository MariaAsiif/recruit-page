import React from 'react'

import dp_img from "../../../assets/images/Botanist.jpg";
const Shopping = () => {
    return (
        <>
            <div className='bscontainer mb-2'>
                <div className='row'>
                    <div className='col-lg-4 '>
                        <div className='bg-[#DD2E44]  p-2 pb-3'>
                            <div className='flex justify-between'>
                                <h2 className='p-4 text-[12px] text-white'>EXRA SAVE 40% ON ORDER $90</h2>
                                <div className="border-[3px] rounded-full ">
                                    <img src={dp_img} className="rounded-full object-cover w-[130px] border-2 border-[#DD2E44] h-[130px]" alt="img_pro" />

                                </div>

                            </div>
                            <div className='pl-4'>
                                <h2 className='text-[20px] text-white font-medium '>Mens Shopping</h2>
                                <button className=' hover:bg-[#EEEEEE] hover:text-black rounded-md bg-[#313131] text-white text-[14px] h-[45px] w-[40%] mt-3'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 '>
                        <div className='bg-[#707070]  p-2 pb-3'>
                            <div className='flex justify-between'>
                                <h2 className='p-4 text-[12px] text-white'>EXRA SAVE 40% ON ORDER $90</h2>
                                <div className="border-[3px] rounded-full ">
                                    <img src={dp_img} className="rounded-full object-cover w-[130px] border-2 border-[#707070] h-[130px]" alt="img_pro" />
                                </div>
                            </div>
                            <div className='pl-4'>
                                <h2 className='text-[20px] text-white font-medium '>Mens Shopping</h2>
                                <button className=' hover:bg-[#EEEEEE] hover:text-black rounded-md bg-[#313131] text-white text-[14px] h-[45px] w-[40%] mt-3'>Shop Now</button>
                                
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-4 '>
                        <div className='bg-[#24D29F] p-2  pb-3'>
                            <div className='flex justify-between'>
                                <h2 className='p-4 text-[12px] text-white'>EXRA SAVE 40% ON ORDER $90</h2>
                                <div className="border-[3px] rounded-full ">
                                    <img src={dp_img} className="rounded-full object-cover border-2 border-[#24D29F] w-[130px] h-[130px]" alt="img_pro" />

                                </div>

                            </div>
                            <div className='pl-4'>
                                <h2 className='text-[20px] text-white font-medium '>Mens Shopping</h2>
                                <button className=' hover:bg-[#EEEEEE] hover:text-black rounded-md bg-[#313131] text-white text-[14px] h-[45px] w-[40%] mt-3'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Shopping