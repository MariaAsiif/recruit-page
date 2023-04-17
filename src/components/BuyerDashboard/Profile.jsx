import React from 'react'
import { AiFillAppstore, AiOutlinePlus } from 'react-icons/ai'
import { BsPhone, BsSearch, BsThreeDots } from 'react-icons/bs'
import { GoThreeBars } from 'react-icons/go'
import client from '../../images/buyer/Ellipse 96.png'
import { ImPhone } from 'react-icons/im'
import { IoMail } from 'react-icons/io5'
const Profile = () => {
    return (
        <>
            {/* search section */}
            <section>
                <div className="bg-white shadow-md rounded-md py-3 px-2 mt-[30px]">
                    <div className="bscontainer ">
                        <div className="flex justify-between items-center">
                            <div className='bg-[#F9FAFE] flex items-center p-2 w-full'>
                                <input type="text" placeholder='Search by Name/ID' className='border h-[40px] w-full rounded focus:outline-none px-2' />
                                <select className='border focus:outline-none p-2 mx-2 w-full rounded'>
                                    <option>Select Category</option>
                                </select>
                                <button className='rounded-md bg-[#24D29F] text-white px-4 py-2 flex items-center'>
                                    <BsSearch className='mx-2' />
                                    Search
                                </button>
                            </div>
                            <div className='flex items-center w-[40%] justify-end'>
                                <GoThreeBars className='text-[22px]' />
                                <AiFillAppstore className='text-[22px] mx-4' />
                                <button className='rounded-md bg-[#707070] text-white px-4 py-2 flex items-center'>
                                    Add Client
                                    <AiOutlinePlus className='mx-2' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients part */}
            <section className='pt-[40px]'>
                <div className='grid grid-cols-4 gap-5'>
                    {
                        Array(8).fill(8).map((_, i) => (
                            <div className='bg-white shadow-md rounded-md py-3 px-5' key={i}>
                                <div className='flex justify-between'>
                                    <div>
                                        <div className='relative'>
                                            <img src={client} alt="client" className="object-cover w-[70%]" />
                                            <div className='absolute bottom-3 right-7 border border-white w-[12px] h-[12px] rounded-full bg-[#24D29F]'></div>

                                        </div>

                                    </div>
                                    <div>
                                        <BsThreeDots className='text-[20px] text-[#8F93A0]' />
                                    </div>
                                </div>
                                <div className='pt-[15px]'>
                                    <h2 className='text-[#222943] text-[18px] font-semibold'>Tom Schneider</h2>
                                    <div className='flex items-center text-[14px]'>
                                        <h2 className='text-[#878787]'>WordPress</h2>
                                        <span className='mx-1'>|</span>
                                        <p className='text-[#CA4931] font-medium'> Top Seller</p>
                                    </div>
                                </div>
                                <div className='pt-[15px]'>
                                    <ul>
                                        <li>
                                            <div className='flex items-center text-[14px]'>
                                                <ImPhone />
                                                <h2 className='text-[#878787] mx-2'>(589)505-4521</h2>
                                            </div>
                                        </li>
                                        <li className='py-1'>
                                            <div className='flex items-center text-[14px]'>
                                                <IoMail />
                                                <h2 className='text-[#878787] mx-2'>tom.schneider@mail.com</h2>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                                <div className='pt-[15px]'>
                                    <div className="flex items-center justify-between">
                                        <button className="bg-[#24D29F] px-3 rounded-md py-1.5 text-white  text-[14px]">Message</button>
                                        <button className="bg-transparent px-3 rounded-md border border-[#24D29F] py-1.5 text-[#24D29F] text-[14px] ">View Profile</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Profile