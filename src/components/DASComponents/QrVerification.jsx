import React from 'react'
import { FaCheckCircle, FaCheckDouble, FaRegUser, FaUnlockAlt } from 'react-icons/fa'
import QR_code from "../../images/QR_code.png"
import video_img from "../../images/video_img.png"
const QrVerification = (props) => {
    return (
        <div className='w-full px-4 lg:px-16'>
            <div style={{ boxShadow: "0px 3px 6px #00000029" }} className="border border-[#70707045]  pt-4 pb-4 lg:px-6 px-6  rounded-md font-sans">
                <h1 className='text-[#626973] text-center font-sans font-bold text-lg mb-1'>Verification - Through QR Code</h1>
                <div className='flex justify-center mb-4'>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
                            <FaRegUser size={15} className='inline text-white' />
                        </div>
                    </div>
                    <div class=" w-[20%] flex items-center">
                        <div className='w-full h-[1px] bg-[#42946C]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#42946C]'>
                            <FaUnlockAlt size={15} className='inline text-white' />
                        </div>
                    </div>
                    <div class=" w-[20%] flex items-center">
                        <div className='w-full h-[1px] bg-[#E84125]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
                            <FaCheckCircle size={15} className='inline text-white' />
                        </div>
                    </div>
                    <div class=" w-[20%] flex items-center">
                        <div className='w-full h-[1px] bg-[#E84125]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
                            <FaCheckDouble size={15} className='inline text-white' />
                        </div>
                    </div>
                    <div class=" w-[20%] flex items-center">
                        <div className='w-full h-[1px] bg-[#E84125]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125]'>
                            <FaCheckDouble size={15} className='inline text-white' />
                        </div>
                    </div>
                </div>


                <div className='px-11 row g-0'>
                    <div className='order-2 col-lg-8 lg:order-1'>
                        <h1 className='text-[#626973] font-sans font-bold mb-4'>For identity verification use your mobile</h1>
                        <ul className='ml-4 text-xs list-disc text-[#626973]'>
                            <li className='mb-4'>Your access to and use of Lorem Ipsum (the app) is subject.</li>
                            <li className='mb-4'>Your access to and use of Lorem Ipsum (the app) is subject.</li>
                            <li className='mb-4'>Your access to and use of Lorem Ipsum (the app) is subject.</li>
                            <li className='mb-4'>Your access to and use of Lorem Ipsum (the app) is subject.</li>
                            <li className='mb-4'>Your access to and use of Lorem Ipsum (the app) is subject.</li>
                            <li className='mb-4'>Your access to and use of Lorem Ipsum (the app) is subject.</li>
                        </ul>
                        <h1 className='text-[#626973] font-sans font-bold mb-4'>Still any Query?</h1>
                    </div>
                    <div className='order-1 pl-10 col-lg-4 lg:order-2'>
                        <img src={QR_code} className="mb-2" alt="qrcode" />
                    </div>
                    <div className='order-3 col-lg-12 lg:order-3'>
                        <img src={video_img} className="m-auto" alt="video img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QrVerification