import React, { useState } from 'react'
import CompanyForm from '../components/FormStep/CompanyForm'
import InfoForm from '../components/FormStep/InfoForm'
import ResumeForm from '../components/FormStep/ResumeForm'
import SubmitForm from '../components/FormStep/SubmitForm'

export const RecruitPage = () => {

    const listName = ["Company/Job Info", "Resume", "Submit"]
    const [active, setActive] = useState(0)



    const handleNext = () => {
        debugger
        let activeIndex = active + 1
        setActive(activeIndex)
    }

    const handleBack = () => {
        let activeIndex = active - 1
        setActive(activeIndex)
    }


    return (
        <div className='bscontainer-fluid'>
            <div className='row h-full'>
                <div className='col-lg-7 flex items-center'>
                    <div className=' w-full pt-24'>
                        <h1 className='text-center font-bold text-2xl'>Recruit</h1>
                        <div>
                            <div className='flex flex-wrap justify-center items-center lg:px-14 px-1 lg:mb-12 mb-5'>
                                <div className='lg:w-[4%] w-[8%] text-center relative'>
                                    <div className={`${active === 0 && 'rounded-full border bg-[#DB4446] text-white'} rounded-full border `}>01</div>
                                    <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-[115px] text-[10px] font-semibold text-[#464A53] font-sans'>Personal Information</span>
                                </div>
                                {listName.map((list, index) => (
                                    <>
                                        <div className={`${active === index + 1 ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]': 'bg-gray-100'}  h-2 lg:w-[28%] w-[22.6%]`}></div>
                                        <div className='lg:w-[4%] w-[8%] text-center relative'>
                                            <div className={`${active === index + 1 && 'rounded-full border bg-[#DB4446] text-white'} rounded-full border`}>0{index + 2}</div>
                                            <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>{list}</span>
                                        </div>
                                    </>
                                ))}


                                <div className='w-full text-[#464A53] lg:hidden text-center font-sans text-lg font-semibold mt-2'>
                                    {active === 0 && "Personal Information"}
                                    {
                                        listName.map((list, index) => (
                                            active === index + 1 && list
                                        ))
                                    }

                                </div>

                            </div>


                            <div className='lg:ml-10 lg:mr-24'>

                                {active === 0 && <InfoForm />}
                                {active === 1 && <CompanyForm />}
                                {active === 2 && <ResumeForm />}
                                {active === 3 && <SubmitForm />}

                                <div className='flex justify-between'>
                                    {
                                        active !== 0 &&
                                        <div className=''>
                                            <button onClick={() => handleBack()} className=' bg-[#DB4446] hover:bg-[#93C234] px-2 py-2 mb-5 text-sm font-sans text-white w-full'>Back Step</button>
                                        </div>
                                    }
                                    <div className=''>
                                        <button onClick={() => handleNext()} className=' bg-[#DB4446] hover:bg-[#93C234] px-2 py-2 mb-5 text-sm font-sans text-white w-full'>Next Step</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-lg-5 bg-reruitBanner lg:h-auto h-96 bg-bottom bg-no-repeat bg-cover'>
                    <div className=''>

                    </div>
                </div>
            </div>
        </div>
    )
}
