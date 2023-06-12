import React from 'react'
import { HiOutlineRefresh } from 'react-icons/hi'
import user from '../../../../assets/ecome/shirt.png'
import shirt from '../../../../assets/ecome/comments.png'
import { FaReply, FaTrash } from 'react-icons/fa'
const Comments = () => {
    return (
        <>
            <div className='bscontainer mt-6'>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="border shadow-lg  ">
                            <div className='border-b flex items-center justify-between p-4'>
                                <h2 className='font-semibold'>Recent Comments</h2>
                                <div className="flex items-center ">
                                    <h2 className="px-2 text-[#24D29F] text-[14px]">Refresh</h2>
                                    <HiOutlineRefresh className="text-[#24D29F] text-[15px]" />
                                </div>
                            </div>
                            <div className='w-full overflow-hidden'>
                                {
                                    Array(3).fill(3).map((_, i) => (

                                        <div className='flex border-b  last:border-b-0 mt-2 p-4'>
                                            <div className="">
                                                <img src={shirt} className="w-[80%]"  alt="user" />
                                            </div>
                                            <div className="w-full">
                                                <div className='flex items-center justify-between pt-3'>
                                                    <h2 className='font-semibold'>Themexylum</h2>
                                                    <div className='flex items-center'>
                                                        <h2 className='text-[#B8B8B8] text-[14px] '>9 Hours Ago</h2>
                                                        <div className='flex items-center px-2'>
                                                            <FaReply className='text-[#24D29F] text-[14px]' />
                                                            <h2 className='text-[#24D29F] px-1 text-[14px]'>Reply</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='max-w-[530px]'> 
                                                    <p className='text-[#707070] text-[13px] text-justify'>
                                                    Product is great and very satisfied with client response and suggestion, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                                    </p>
                                                </div>
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
                                                </h2>

                                            </div>

                                        </div>
                                        <div>
                                            <FaTrash/>
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

export default Comments