import React from 'react'
import { FaCheckCircle, FaCheckDouble, FaChevronLeft, FaChevronRight, FaRegUser, FaUnlockAlt } from 'react-icons/fa'
import video_large from "../../images/video_large.png"
const QrVideoProcess = (props) => {
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
                        <div className='w-full h-[1px] bg-[#E84125]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#E84125] '>
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
                        <div className='w-full h-[1px] bg-[#42946C]'></div>
                    </div>
                    <div class=" w-auto ">
                        <div className='p-1 flex m-auto justify-center items-center rounded-[50%] w-7 h-7 bg-[#42946C]'>
                            <FaCheckDouble size={15} className='inline text-white' />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <img src={video_large} className="m-auto" alt="cideo" />
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "space-between", justifyContent: "end" }}>
                    {/* <button onClick={() => props.onBack("QrVerification")} className='border-2 border-[#4DA676] text-[#4DA676] rounded font-sans font-semibold text-lg px-10 py-1 '><FaChevronLeft className='inline' /> Back </button> */}
                    <button onClick={() => props.onNext("Dashboard")} className='border-2 mt-4 border-[#4DA676] text-[#4DA676] rounded font-sans font-semibold text-lg px-10 py-1'>Next <FaChevronRight className='inline' /></button>
                </div>
            </div>
        </div>
    )
}

export default QrVideoProcess