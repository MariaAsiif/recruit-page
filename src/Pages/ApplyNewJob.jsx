import React, { useState } from 'react'
import { IoSaveOutline, IoPrintOutline, IoMailOutline } from "react-icons/io5";
import { BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp, BsFillShareFill, BsHeart } from "react-icons/bs";
import flag from '../assets/images/usflag_logo.png'
const ApplyNewJob = () => {
    const [layout, setlayout] = useState("grid")
    const [sidebar, setSetSidebar] = useState(false)
    const jobs = ["asdf", "asdfasd", "asdfds", "next", "", "", "", ""]
    return (
        <div className='bscontainer-fluid p-0 '>

            <div className='row g-0'>
                <div className={sidebar ? 'col-lg-9' : 'col-lg-12'}>
                    <div className='row g-0 px-4 py-2'>
                        {/* <div className='col-lg-12'>
                            <div className='lg:flex lg:justify-between apply_job'>
                                <div className='m-3'>
                                    <h2 className='text-[20px] font-semibold'>Here, we found job!</h2>
                                    <span className='text-[12px] text-gray-400' >Brand on your preferance</span>
                                </div>
                                <div className='flex items-center sorting'>
                                    <button onClick={() => { setlayout("grid") }} className={`mr-8 ${layout === "grid" ? "text-orange-600" : ""}`}>Grid</button>
                                    <button onClick={() => { setlayout("list") }} className={`mr-8 ${layout === "list" ? "text-orange-600" : ""}`}>List</button>
                                    <h2>Sort by : </h2>
                                    <select className='bg-transparent'>
                                        <option>Newest</option>
                                    </select>
                                </div>

                            </div>
                        </div> */}
                        {jobs.map(() => {
                            return (
                                <div className={`${layout === "grid" ? sidebar ? "col-lg-4 " : "col-lg-3" : "col-lg-12"} mb-5 px-2`} onClick={() => setSetSidebar(true)}>
                                    <div className=' border-2 border-transparent hover:border-[#65A33A] rounded-md '>
                                        <div className='bg-white rounded-md cursor-pointer'>
                                            <div className='row g-0  '>
                                                <div className={`${layout === "grid" ? "col-lg-12 " : "col-lg-4"} ${layout === "grid" ? "h-44 " : "h-44"} bg-top-background bg-bottom bg-no-repeat bg-cover rounded-md`}>  </div>
                                                <div className={`${layout === "grid" ? "col-lg-12 " : "col-lg-8"} p-2`}>
                                                    <div className={` flex justify-between items-center`}>
                                                        <h1 className={`${layout !== "grid" && "text-[20px]"} 'text-[#0D1829] hover:text-[#65A33A] text-[14px] font-medium`}>Front end Developer</h1>
                                                        <div>
                                                            <span className='w-4 h-4  rounded-full inline-block mr-1 align-middle'>
                                                                <img src={flag} alt="flag" />
                                                            </span>
                                                            <span className='w-4 h-4  rounded-full inline-block mr-1 align-middle'>
                                                                <img src={flag} alt="flag" />
                                                            </span>
                                                            <span className='w-4 h-4  rounded-full inline-block align-middle'>
                                                                <img src={flag} alt="flag" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <h1 className={`${layout !== "grid" && "text-[15px] pt-2"} text-[#626973] mb-4 text-[10px] mt-2 font-light leading-4`}>Lor liqua equat. Duis aute irure dolor in repre hend erit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</h1>
                                                    <div className={`${layout !== "grid" && 'pt-[2rem] flex justify-between items-center '} flex justify-between items-center`}>
                                                        <div>
                                                            <button className='text-[10px] transition-all text-white hover:bg-[#E84025] hover:text-white  rounded-sm pl-2 pr-2 p-[6px] bg-[#42946C] mr-1'>Fulltime</button>
                                                            <button className='text-[10px] transition-all text-[#42946C]  p-[5px] border-[#42946C] border rounded-sm mr-1'>Senior level</button>
                                                            <BsHeart className='inline mx-1 ' />
                                                            <BsFillShareFill className='inline' />
                                                        </div>
                                                        <div className='text-[10px]'>
                                                            <span className='font-bold'>$80K</span>/Year
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}




                    </div>
                </div>
                {sidebar &&
                    <div style={{ boxShadow: "-2px 3px 5px #00000043" }} className='col-lg-3 border bg-white  shadow-lg'>
                        <div className='p-5'>
                            <h1 className='text-[#65A33A] text-center text-lg font-medium mb-4'>Detail Job</h1>
                            <div className='border-2 border-[#65A33A]  rounded-md p-[2px] mb-2'>
                                <div className='bg-top-background bg-bottom bg-no-repeat bg-cover h-44 rounded-md'></div>
                            </div>
                            <h1 className='text-[#0D1829] text-center text-[10px] font-medium mb-2'>Senior UI/UX Designer</h1>
                            <div className='flex justify-between items-center mb-4'>
                                <h1 className='text-[#626973] text-[8px]'>Full Time Job at Google, Inc</h1>
                                <div>
                                    <span className='w-4 h-4  rounded-full inline-block mr-1 align-middle'>
                                        <img src={flag} alt="flag" />
                                    </span>
                                    <span className='w-4 h-4  rounded-full inline-block mr-1 align-middle'>
                                        <img src={flag} alt="flag" />
                                    </span>
                                    <span className='w-4 h-4  rounded-full inline-block align-middle'>
                                        <img src={flag} alt="flag" />
                                    </span>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <h1 className='text-[#65A33A]  text-sm mb-4'>Qualification :</h1>
                                <ul className='list-disc pl-4 text-[#0D1829] text-[9px]'>
                                    <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur</li>
                                    <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</li>
                                    <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur</li>
                                    <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</li>
                                    <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur</li>
                                    <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</li>
                                </ul>
                            </div>
                            <div className='mb-4'>
                                <h1 className='text-[#65A33A]  text-sm mb-4'>Responsibilities & Duties :</h1>
                                <ul className='list-disc pl-4 text-[#0D1829] text-[9px]'>
                                    <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur</li>
                                    <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</li>
                                    <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur</li>
                                    <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</li>
                                    <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur</li>
                                    <li className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</li>
                                </ul>
                            </div>
                            <div className='mb-4 h-8'>
                                <button className='border-2 transition-all border-[#65A33A] px-2 py-2 text-[9px] bg-[#65A33A] hover:bg-white text-white hover:text-[#65A33A] rounded-md float-left'>Messages</button>
                                <button className='border-2  transition-all border-[#65A33A] px-2 py-2 text-[9px] bg-[#65A33A] hover:bg-white text-white hover:text-[#65A33A] rounded-md float-right'>Apply Now</button>
                            </div>
                            <h1 className='text-[#65A33A]  text-sm mb-1'>Interested in this job?</h1>
                            <div className='text-[#626973] text-[11px] mb-4'>
                                <IoSaveOutline className='inline mr-1' /><span className='mr-2'>Save Job</span>
                                <IoPrintOutline className='inline mr-1' /><span className='mr-2'>Print this Job</span>
                                <IoMailOutline className='inline mr-1' /><span>Email this Job</span>
                            </div>

                            <div className='flex items-center flex-wrap mt-1'>
                                <div className='border rounded-full p-1 '>
                                    <span className='text-[14px] px-2'>English Transitions</span>
                                </div>
                                <div className='border rounded-full p-1 m-2 '>
                                    <span className='text-[14px] px-2'>English</span>
                                </div>
                                <div className='border rounded-full p-1 mb-2'>
                                    <span className='text-[14px] px-2'>English Transitions</span>
                                </div>
                            </div>
                            <h1 className='text-[#65A33A]  text-sm mb-1'>Share on Social Media</h1>
                            <div className='mb-4'>
                                <BsFacebook className='inline text-blue-600 mr-2' />
                                <BsTwitter className='inline text-[#33ACE2] mr-2' />
                                <BsLinkedin className='inline text-[#0177B5] mr-2' />
                                <BsWhatsapp className='inline text-[#26CC64]' />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>

    )
}

export default ApplyNewJob