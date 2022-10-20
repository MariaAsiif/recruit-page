import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaMapMarker } from "react-icons/fa";
const ProfileBar = () => {
    return (
        <div className="fixed right-0 flex-none w-full h-full bg-white col-lg-3 lg:static lg:w-1/5 lg:h-auto">
            <div className='px-1 pt-3 pb-3 mb-2 text-center border-b'>
                <img className='m-auto w-full h-auto max-w-[70px] mb-3 rounded-full' src="http://placekitten.com/200/200" alt="logo" loading="lazy" />
                <h1 className='text-[10px] text-center font-semibold'>Senior UI/UX Designer</h1>
                <h1 className='text-[7px] text-center font-light mb-3'>Google, Inc</h1>
                <button className='bg-[#4da67721] px-3 py-1 text-[10px]   uppercase font-medium   rounded-md text-[#4DA676]'><BsFillTelephoneFill className="inline mr-2 " />Contact Me</button>
            </div>
            <div className='px-4 pb-3 mb-2 text-center border-b'>
                <div className='flex items-center mb-3 last:mb-0'>
                    <IoMdMail size={15} className="inline mr-2 text-[#4DA676] " />
                    <div className='text-[#000000] text-[10px]  opacity-50'>farhan@gmail.com</div>
                </div>
                <div className='flex items-center mb-3 last:mb-0'>
                    <BsFillTelephoneFill size={15} className="inline mr-2 text-[#4DA676] " />
                    <div className='text-[#000000] text-[10px]  opacity-50'>+12 3456 7890</div>
                </div>
                <div className='flex items-center mb-3 last:mb-0'>
                    <FaMapMarker size={15} className="inline mr-2 text-[#4DA676] " />
                    <div className='text-[#000000] text-[10px]  opacity-50'>Toronto, California</div>
                </div>
            </div>

            <div className='px-3 pb-3 mb-2 border-b'>
                <h1 className='mb-1 text-xs font-semibold'>About Me</h1>
                <p className='text-[8px] opacity-40'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
            <div className='px-2 pb-3 border-b'>
                <h1 className='text-[#4DA676] text-[10px] font-semibold mb-1'>Inbox (12)</h1>
                <div className="flex items-center space-x-1 mb-1 last:mb-0 border bg-[#4da6771c] border-[#4da67783] rounded-md p-1 ">
                    <div className='relative flex-none '>
                        <img src="http://placekitten.com/200/200" alt="inbox" className="object-cover rounded-full w-full h-auto max-w-[20px] " loading="lazy" decoding="async" />
                        <div className="absolute top-0 right-0 w-2 text-white text-[50%]   h-2 bg-[#4DA676] flex justify-center items-center rounded-full">12</div>
                    </div>
                    <div className="flex-auto text-[8px] whitespace-pre-line ">  e 1500s galley of type and scrambled it to make a  </div>
                </div>
                <div className="flex items-center space-x-1 mb-1 last:mb-0 border bg-[#4da6771c] border-[#4da67783] rounded-md p-1 ">
                    <div className='relative flex-none '>
                        <img src="http://placekitten.com/200/200" alt="inbox" className="object-cover rounded-full w-full h-auto max-w-[20px] " loading="lazy" decoding="async" />
                        <div className="absolute top-0 right-0 w-2 text-white text-[50%]   h-2 bg-[#4DA676] flex justify-center items-center rounded-full">12</div>
                    </div>
                    <div className="flex-auto text-[8px] whitespace-pre-line ">  e 1500s galley of type and scrambled it to make a  </div>
                </div>
                <div className="flex items-center space-x-1 mb-1 last:mb-0 border bg-[#4da6771c] border-[#4da67783] rounded-md p-1 ">
                    <div className='relative flex-none '>
                        <img src="http://placekitten.com/200/200" alt="inbox" className="object-cover rounded-full w-full h-auto max-w-[20px] " loading="lazy" decoding="async" />
                        <div className="absolute top-0 right-0 w-2 text-white text-[50%]   h-2 bg-[#4DA676] flex justify-center items-center rounded-full">12</div>
                    </div>
                    <div className="flex-auto text-[8px] whitespace-pre-line ">  e 1500s galley of type and scrambled it to make a  </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileBar