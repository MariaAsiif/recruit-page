import React, { useState } from 'react'
import profileImg from '../images/people.png'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineComment } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { BiLockOpenAlt } from 'react-icons/bi'
import { IoShieldCheckmark } from 'react-icons/io5'
import InfoForm from '../components/profileStep/InfoForm'
import CompanyForm from '../components/profileStep/CompanyForm'
import ResumeForm from '../components/profileStep/ResumeForm'
import SubmitForm from '../components/profileStep/SubmitForm'
const ProfileSetting = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleNext =() => {
        let updated = activeIndex + 1
        setActiveIndex(updated)
    }
    return (
        <div className='bscontainer-fluid p-[30px] h-full '>
            <div className=''>
                <h2 className='text-[20px] font-semibold'>Here, we found job!</h2>
                <span className='text-[12px] text-gray-400' >Brand on your preferance</span>
            </div>
            <div className='row mt-2 ml-2'>
                <div className='col-lg-4 '>
                    <div className='bg-white text-center p-5 '>
                        <div className='relative'>
                            <div className='flex justify-center items-center'>
                                <img src={profileImg} className="w-[38%] border border-[#65A33A] pt-[3px] rounded-full" alt="profile" />
                            </div>
                            <div className='absolute  bottom-[8%] left-[60%] p-1  rounded-full bg-[#E84025] '>
                                <FiEdit className='text-[white]' />
                            </div>
                        </div>
                        <div className='mt-2'>
                            <h2 className='text-[20px] font-medium'>Laher asif</h2>
                            <span className='text-[13px] text-gray-400'>Web Developer</span>
                        </div>
                    </div>
                    <div className='bg-white text-center p-5 mt-4 '>
                        <div className='flex justify-center'>

                            <AiOutlineComment className='text-gray-400 text-[5rem]' />

                        </div>
                        <div className='mt-2'>
                            <h2 className='text-[20px] font-medium'>Laher asif</h2>
                            <span className='text-[13px] text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cumque? Explicabo cumque deserunt quidem, omnis modi molestias doloremque eligendi tempore? Consequatur, expedita? Unde natus optio esse nostrum magni aspernatur fuga.</span>
                        </div>
                    </div>
                </div>

                <div className='col-lg-8'>

                    <div className=" bg-white rounded-md p-5">
                        <div className='flex'>
                            <div>left image</div>
                            <div>
                                <div>
                                    <h2 className='text-[20px]  text-[#626973] font-medium'>Your account need to be verified </h2>
                                    <span className='text-[11px] text-[#626973]'>If you need to update the information you will be able to verify your account. You need to verify your Phone number and Email account</span>
                                </div>
                                <div className='flex  flex-wrap justify-center items-center lg:px-14 px-1 '>
                                    <div className='lg:w-[4%] w-[8%] text-center relative'>
                                        <div className={`${activeIndex === 0 ? 'rounded-full border bg-[#65A33A] text-white' : 'rounded-full border bg-gray-300 text-white'}  text-white pt-2 text-sm w-[50px] h-[50px] rounded-full border`}>
                                            <FaUser className='ml-[14px] mt-[6px] text-[20px] ' />
                                        </div>
                                    </div>
                                    <div className={`${activeIndex === 1 ? 'bg-gradient-to-r from-[#65A33A] to-[#65A33A]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-1 lg:w-[28%] w-[22.6%]`}></div>
                                    <div className='lg:w-[4%] w-[8%] text-center relative'>
                                        <div className={`${activeIndex === 1 ? 'rounded-full border bg-[#65A33A] text-white' : 'rounded-full border bg-gray-300 text-white'}  text-white pt-2 text-sm w-[50px] h-[50px] rounded-full border`}>
                                            <BiLockOpenAlt className='ml-[14px] mt-[6px] text-[20px] ' />
                                        </div>
                                    </div>
                                    <div className={`${activeIndex === 2 ? 'bg-gradient-to-r from-[#65A33A] to-[#65A33A]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-1 lg:w-[28%] w-[22.6%]`}></div>
                                    <div className='lg:w-[4%] w-[8%] text-center relative'>
                                        <div className={`${activeIndex === 2 ? 'rounded-full border bg-[#65A33A] text-white' : 'rounded-full border bg-gray-300 text-white'}  text-white pt-2 text-sm w-[50px] h-[50px] rounded-full border`}>
                                            <IoShieldCheckmark className='ml-[14px] mt-[6px] text-[20px] ' />
                                        </div>
                                    </div>
                                    <div className={`${activeIndex === 3 ? 'bg-gradient-to-r from-[#65A33A] to-[#65A33A]' : 'bg-gray-100'} md:w-[25%] md:-ml-5  h-1 lg:w-[28%] w-[22.6%]`}></div>
                                    <div className='lg:w-[4%] w-[8%] text-center relative'>
                                        <div className={`${activeIndex === 3 ? 'rounded-full border bg-[#65A33A] text-white' : 'rounded-full border bg-gray-300 text-white'}  text-white pt-2 text-sm w-[50px] h-[50px] rounded-full border`}>
                                            <BiLockOpenAlt className='ml-[14px] mt-[6px] text-[20px] ' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='bg-white rounded-md p-5 mt-5'>
                        {activeIndex === 0 && <InfoForm handleNext={handleNext}  />}
                        {activeIndex === 1 && <ResumeForm handleNext={handleNext}  />}
                        {activeIndex === 2 && <CompanyForm handleNext={handleNext}  />}
                        {activeIndex === 3 && <SubmitForm handleNext={handleNext}  />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSetting