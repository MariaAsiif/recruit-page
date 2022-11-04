import React from 'react'
import { HiOutlineRefresh } from 'react-icons/hi'
import shirt from '../../../../assets/ecome/shirt.png'
import user from '../../../../assets/ecome/user.png'
const Product = () => {
    return (
        <>

            <div className='bscontainer'>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="border shadow-lg  ">
                            <div className='border-b flex items-center justify-between p-4'>
                                <h2 className='font-semibold'>Recent Item Sales</h2>
                                <div className="flex items-center ">
                                    <h2 className="px-2 text-[#24D29F] text-[14px]">Refresh</h2>
                                    <HiOutlineRefresh className="text-[#24D29F] text-[15px]" />
                                </div>
                            </div>
                            <div className='p-4'>
                                {
                                    Array(5).fill(5).map((_, i) => (

                                        <div className='flex  justify-between  ' key={i}>
                                            <div className="flex ">
                                                <img src={shirt} className="w-[25%]" alt="img" />
                                                <h2 className='pt-4 text-[#B8B8B8] text-[14px]'>Fleece Hooded Longline Jacket</h2>
                                            </div>
                                            <div>

                                                <h2 className='text-[#24D29F] pt-4 font-medium'>$34.25</h2>
                                            </div>
                                        </div>


                                    ))
                                }


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="border shadow-lg ">
                            <div className='border-b p-4 flex items-center justify-between'>
                                <h2 className='font-semibold'>Recent Buyers</h2>
                                <div className="flex items-center ">
                                    <h2 className="px-2 text-[#24D29F] text-[14px]">Refresh</h2>
                                    <HiOutlineRefresh className="text-[#24D29F] text-[15px]" />
                                </div>
                            </div>
                            {
                                Array(5).fill(5).map((_, i) => (

                                    <div className='flex items-center justify-between p-[16px]'>
                                        <div className="flex items-center ">
                                            <img src={user} className="w-[25%]" alt="img" />
                                            <div className='px-2 '>
                                                <h2 className='text-[14px] text-semibold flex flex-col'>
                                                    James Anderson
                                                    <span className='text-[10px] '>United States</span>
                                                </h2>

                                            </div>

                                        </div>
                                        <div>
                                            <h2 className='text-semibold text-[14px]'>$34</h2>
                                        </div>

                                    </div>

                                ))
                            }



                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product