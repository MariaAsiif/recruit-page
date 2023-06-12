import React from 'react'
import { AiFillSetting } from 'react-icons/ai'
import {
    BsFillEmojiSmileFill, BsSearch, BsThreeDots,
    BsSendFill
} from 'react-icons/bs'
import { GrAttachment } from 'react-icons/gr'
import { RiSendPlaneFill } from 'react-icons/ri'

const MessageBox = () => {
    return (
        <>
            <div className="">
                <div className="flex flex-row h-full w-full overflow-x-hidden">
                    <div className="flex flex-col py-8 pl-6 pr-2 w-[30%] bg-white flex-shrink-0">

                        <div
                            className=" shadow-md bg-white rounded-md p-4 "
                        >
                            <div className="flex justify-between">
                                <div className="flex ">
                                    <div className="h-10 w-10 rounded-full border overflow-hidden">
                                        <img
                                            src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                                            alt="Avatar"
                                            className="h-full w-full"
                                        />
                                    </div>
                                    <div className='pl-2'>
                                        <div className="text-sm font-semibold ">Aminos Co.</div>
                                        <div className="text-xs text-gray-500">Lead UI/UX Designer</div>
                                        <div className="flex flex-row items-center mt-3">
                                            <div
                                                className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full"
                                            >
                                                <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
                                            </div>
                                            <div className="leading-none ml-1 text-xs">Active</div>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <AiFillSetting />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-8">
                            <div className='bg-white shadow-md rounded-md p-4'>
                                <div className='pt-[30px]'>
                                    <div className='border h-[40px] px-2 flex items-center  rounded-md '>
                                        <BsSearch />
                                        <input type="text" placeholder='Search' className='w-full focus:outline-none ml-2' />
                                    </div>
                                </div>
                                <div className="flex pt-[30px] flex-row items-center justify-between text-xs">
                                    <span className="font-semibold text-[#222943] text-[20px] ">Recent Message</span>
                                    <BsThreeDots className='text-[20px] text-[#8F93A0]' />
                                </div>
                                <div className="flex flex-col space-y-1 mt-4 ">
                                    {
                                        Array(6).fill(6).map((_, i) => (
                                            <button
                                                className="flex flex-row hover:bg-[#EBE8FF] rounded-md p-2"
                                            >
                                                <div className="h-10 w-10 rounded-full  overflow-hidden">
                                                    <img
                                                        src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                                                        alt="Avatar"
                                                        className="h-full w-full"
                                                    />
                                                </div>

                                                <div className="ml-2 flex flex-col items-start">
                                                    <h2 className='text-[#222943] font-semibold'>Henry Boyd</h2>
                                                    <p className='text-[#222943] text-[14px]'>Hi, Did you check the file?</p>
                                                </div>
                                            </button>
                                        ))
                                    }


                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col flex-auto h-full p-6">
                        <div
                            className="flex flex-col flex-auto flex-shrink-0 rounded-md bg-white shadow-md h-full "
                        >

                            <div className="flex flex-col h-full overflow-x-auto mb-4">
                                <div className='bg-white border-b p-4'>
                                    <button
                                        className="flex flex-row  rounded-md p-2"
                                    >
                                        <div className="h-10 w-10 rounded-full  overflow-hidden">
                                            <img
                                                src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                                                alt="Avatar"
                                                className="h-full w-full"
                                            />
                                        </div>

                                        <div className="ml-2 flex flex-col items-start">
                                            <h2 className='text-[#222943] font-semibold'>Henry Boyd</h2>
                                            <p className='text-[#222943] text-[14px]'>Hi, Did you check the file?</p>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex flex-col h-[500px] overflow-y-auto p-4">
                                    <div className="grid grid-cols-12 gap-y-2">

                                        <div className="col-start-1 col-end-10 p-3 rounded-lg">
                                            <div className="flex flex-row ">
                                                <div className="h-10 w-10 rounded-full flex-shrink-0  overflow-hidden">
                                                    <img
                                                        src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                                                        alt="Avatar"
                                                        className="h-full w-full"
                                                    />
                                                </div>
                                                <div
                                                    className="relative ml-3 text-sm bg-[#F2F4FC] py-2 px-4 shadow rounded-xl"
                                                >
                                                    <div>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit. Vel ipsa commodi illum saepe numquam maxime
                                                        asperiores voluptate sit, minima perspiciatis.
                                                    </div>

                                                </div>

                                            </div>
                                            <div className='pl-14 pt-3'>
                                                <h2 className='text-[#9B9B9B] text-[14px]'>Sunday, march 17, 2021 at 2:39 PM</h2>
                                            </div>

                                        </div>
                                        <div className="col-start-3 col-end-13 p-3 rounded-lg">
                                            <div className="flex  justify-start flex-row-reverse">
                                                <div className="h-10 w-10 rounded-full  overflow-hidden">
                                                    <img
                                                        src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                                                        alt="Avatar"
                                                        className="h-full w-full"
                                                    />
                                                </div>
                                                <div className='flex flex-col w-full items-center'>
                                                    <div
                                                        className="relative mr-3 text-sm bg-[#00BC8B] text-white py-4 px-4 w-full shadow rounded-xl"
                                                    >
                                                        <div>Cras eu elit congue, placerat dui ut, tincidunt nisl.</div>

                                                    </div>
                                                    <div
                                                        className="relative mr-3 text-sm bg-[#00BC8B] text-white py-4 px-4 w-full shadow rounded-xl mt-2"
                                                    >
                                                        <div>Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim sem, pharetra et magna sit amet, luctus aliquet nibh. Curabitur auctor leo et libero consectetur gravida. Morbi gravida et sem dictum varius. Proin eget viverra sem, non euismod est. </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex justify-end pt-2 pr-14'>
                                                <h2 className='text-[#9B9B9B] text-[14px]'>Sunday, march 17, 2021 at 2:39 PM</h2>
                                            </div>
                                        </div>
                                        <div className="col-start-6 col-end-13 p-3 rounded-lg">
                                            <div className="flex items-center justify-start flex-row-reverse">
                                                <div
                                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                                >
                                                    A
                                                </div>
                                                <div
                                                    className="relative mr-3 text-sm bg-[#00BC8B] text-white py-2 px-4 shadow rounded-xl"
                                                >
                                                    <div>
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                    </div>
                                </div>
                            </div>
                            <div className="mx-2 border  p-5 rounded-md mb-3 border-[#3C21F7]">
                                <div className="flex  items-center ">
                                    <input type="text" placeholder='Can you send me the png without background. Than' className='focus:outline-none w-full' />
                                    <div className='flex items-center w-[50%] justify-end '>
                                        <BsFillEmojiSmileFill />
                                        <GrAttachment className='mx-3' />
                                        <button className='flex items-center py-1 px-4 rounded-md bg-[#E84125] text-white'>
                                            Send
                                            <RiSendPlaneFill />

                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageBox