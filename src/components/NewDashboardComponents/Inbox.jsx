import React from 'react'
import { AiOutlineMinus, AiOutlinePaperClip, AiOutlinePicture, AiOutlinePlus, AiOutlineReload } from 'react-icons/ai'
import { BsEmojiSmile, BsTrash } from 'react-icons/bs';
import { FaTimes } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { TfiText } from "react-icons/tfi";
import { RiDriveFill, RiDropboxFill } from "react-icons/ri";
const Inbox = () => {
    return (
        <div style={{ boxShadow: "0px 3px 6px #0000000D" }} className='h-[84vh] overflow-y-auto p-5 bg-white rounded-2xl'>
            <div className='h-full row g-0'>
                <div className='flex items-center justify-between py-3 border-b border-r col-lg-3'>
                    <div className="flex">
                        <div>
                            <div className="relative dropdown">
                                <button className=" dropdown-toggle px-3 py-2  border-2 border-[#E2E2EA]  text-[#44444F] font-medium text-xs leading-tight rounded-lg focus:outline-none transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    Primary
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">  <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />  </svg>
                                </button>
                                <ul className="absolute z-50 hidden float-left py-2 m-0 mt-1 text-base text-left list-none bg-white border-none rounded-lg shadow-lg dropdown-menu min-w-max bg-clip-padding" aria-labelledby="dropdownMenuButton2">
                                    <li>
                                        <span className="block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100"  >Action</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <AiOutlineReload className='inline mr-3 text-[#92929D]' />
                </div>
                <div className='flex items-center justify-between pl-5 border-b col-lg-9'>
                    <h1 className='text-[#171725] font-medium font-sans text-lg'>Write New Message</h1>
                    <div>
                        <AiOutlineMinus className='inline mr-3' />
                        <AiOutlinePlus className='inline' />
                    </div>
                </div>
                <div className='h-full pt-2 border-r col-lg-3'>
                    <div>
                        <div className='pb-1 mb-2 border-b'>
                            <div className='bg-[#4DA676] rounded-lg p-2 flex gap-2'>
                                <img className='w-10 h-10 rounded-full' src={"http://placekitten.com/200/200"} alt="logo" loading="lazy" />
                                <div>
                                    <h1 className='text-sm font-light text-white'>Any Carrol <span className='float-right'>12:48PM</span></h1>
                                    <h1 className='mb-3 font-sans text-sm font-semibold text-white'>Mobile Apps Redesign</h1>
                                    <p className='font-sans text-xs text-white opacity-70'>Hey Cak, Could you free now? Can you look and read the brief…</p>
                                </div>
                            </div>
                        </div>
                        <div className='pb-1 mb-2 border-b'>
                            <div className='flex gap-2 p-2 bg-white rounded-lg'>
                                <img className='w-10 h-10 rounded-full' src={"http://placekitten.com/200/200"} alt="logo" loading="lazy" />
                                <div>
                                    <h1 className='text-[#4DA676] text-sm font-light'>Any Carrol <span className='float-right text-[#696974]'>12:48PM</span></h1>
                                    <h1 className='mb-3 font-sans text-sm font-semibold text-[#171725]'>Mobile Apps Redesign</h1>
                                    <p className='font-sans text-xs text-[#92929D]'>Hey Cak, Could you free now? Can you look and read the brief…</p>
                                </div>
                            </div>
                        </div>
                        <div className='pb-1 mb-2 border-b'>
                            <div className='flex gap-2 p-2 bg-white rounded-lg'>
                                <img className='w-10 h-10 rounded-full' src={"http://placekitten.com/200/200"} alt="logo" loading="lazy" />
                                <div>
                                    <h1 className='text-[#4DA676] text-sm font-light'>Any Carrol <span className='float-right text-[#696974]'>12:48PM</span></h1>
                                    <h1 className='mb-3 font-sans text-sm font-semibold text-[#171725]'>Mobile Apps Redesign</h1>
                                    <p className='font-sans text-xs text-[#92929D]'>Hey Cak, Could you free now? Can you look and read the brief…</p>
                                </div>
                            </div>
                        </div>
                        <div className='pb-1 mb-2 border-b'>
                            <div className='flex gap-2 p-2 bg-[#f0eeee]  rounded-lg'>
                                <img className='w-10 h-10 rounded-full' src={"http://placekitten.com/200/200"} alt="logo" loading="lazy" />
                                <div>
                                    <h1 className='text-[#4DA676] text-sm font-light'>Any Carrol <span className='float-right text-[#696974]'>12:48PM</span></h1>
                                    <h1 className='mb-3 font-sans text-sm font-semibold text-[#171725]'>Mobile Apps Redesign</h1>
                                    <p className='font-sans text-xs text-[#92929D]'>Hey Cak, Could you free now? Can you look and read the brief…</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='pl-5 border-b col-lg-9'>
                    <div className='flex items-center py-2 border-b'>
                        <h1 className='text-[#9b9baf] text-sm '>Send to</h1>
                        <div className='ml-4  border px-3 py-1 text-[#9b9baf] text-sm font-light rounded-full'>ali@gmail.com <FaTimes className='inline ml-1 cursor-pointer' /></div>
                    </div>
                    <div className='flex items-center py-2 mb-3 border-b'>
                        <h1 className='text-[#9b9baf] text-sm '>Subject</h1>
                        <h1 className='ml-4 text-sm font-medium'>Hello Bonsai Redesign Project</h1>
                    </div>
                    <div className='text-[#44444f81]  text-sm'>
                        <h1 className='mb-4'>Hi All,</h1>
                        <p> I hate peeping Toms. For one thing they usually step all over the hedges and plants on the side of someone’s house killing them and setting back the vegetation’s gardener countless time and effort. Another thing that I don’t really like about them is that they’re such sideline actors, lacking the abilities to participate actively, that I just can’t offer them any respect, whatsoever. Finally, I hate peeping Toms because of the very nature of their field. What is that nature? Its one of intrusiveness. And intrusive, unwelcome company is intolerable in any form. This leads me to internet advertising trends. Best Regards, Tom Gravesen</p>
                    </div>
                </div>
                <div className='h-6 border-r col-lg-3 lg:h-auto'>

                </div>
                <div className='flex flex-col items-center py-4 pl-5 col-lg-9 lg:flex-row'>
                    <button className='text-white font-semibold font-sans text-sm block bg-[#4DA676] px-3 py-2 rounded-lg'>Send Message</button>
                    <div className='ml-5 grow'>
                        <TfiText className='inline mr-2 cursor-pointer' />
                        <AiOutlinePaperClip className='inline mr-2 cursor-pointer' />
                        <BsEmojiSmile className='inline mr-2 cursor-pointer' />
                        <AiOutlinePicture className='inline mr-2 cursor-pointer' />
                        <RiDriveFill className='inline mr-2 cursor-pointer' />
                        <RiDropboxFill className='inline mr-2 cursor-pointer' />
                    </div>
                    <div>

                        <BsTrash className='inline mx-2 cursor-pointer' />
                        <BiDotsHorizontalRounded className='inline mx-2 cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inbox