import React from 'react'
import { FaCheckCircle, FaCheckDouble, FaChevronRight, FaRegUser, FaUnlockAlt } from 'react-icons/fa'
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
                <div className='row'>
                    <div className='col-lg-12'>
                        <img src={video_large} className="m-auto" alt="cideo" />
                    </div>
                </div>
                {/* Here ProviderSelection screen will display on next just to design the flow. After design completion its connection has to be settled with the flow. */}
                <button onClick={() => props.onNext("ReferralLink")} className='border-2 border-[#4DA676] text-[#4DA676] rounded font-sans font-semibold text-lg px-10 py-1'>Next <FaChevronRight className='inline' /></button>

            </div>
        </div>
    )
}

export default QrVideoProcess