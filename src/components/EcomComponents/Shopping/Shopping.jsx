import React from 'react'

import dp_img from "../../../assets/images/Botanist.jpg";
const Shopping = () => {
    return (
        <>
            <div className='bscontainer mb-2'>
                <div className='row'>
                    <div className='col-lg-4 '>
                        <div className='bg-[#DD2E44]  p-2'>
                            <div className='flex justify-between'>
                                <h2 className='p-4'>helleo asdfjj</h2>
                                <div>
                                    <img src={dp_img} className="rounded-full w-[130px] h-[130px]" alt="img_pro" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 '>
                        <div className='bg-[#707070]  '>
                            <div className='flex justify-between'>
                                <h2 className='p-4'>helleo asdfjj</h2>
                                <div>
                                    <img src={dp_img} className="rounded-full w-[130px] h-[130px]" alt="img_pro" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 '>
                        <div className='bg-[#24D29F]  '>
                            <div className='flex justify-between'>
                                <h2 className='p-4'>helleo asdfjj</h2>
                                <div>
                                    <img src={dp_img} className="rounded-full w-[130px] h-[130px]" alt="img_pro" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Shopping