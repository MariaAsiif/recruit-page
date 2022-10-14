import React from 'react'
import { useState } from 'react'

const CreateAppointment = () => {
  const listName = ["Company/Job Info", "Resume", "Submit"]
  const [active, setActive] = useState(0)
  const [activeIndex, setActiveIndex] = useState({
    one: false,
    two: false,
    three: false
  })

  return (
    <div className='bscontainer-fluid'>
      <div className='row h-full '>
        <div className='col-lg-12 order-2 lg:order-1 flex items-center full_form'>
          <div className={`w-full ${active === 0 && 'lg:pt-[50px]' || active === 2 && 'lg:mt-[60px]'}`}>
            <h1 className='text-center font-semibold text-[35px]'>Appointment</h1>
            <div>
              <div className='flex flex-wrap justify-center items-center lg:px-14 px-1 lg:mb-12 mb-5'>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={` rounded-full border bg-[#DB4446] text-white pt-2 text-sm  w-[40px] h-[40px] `}>01</div>
                  <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-[115px] text-[10px] font-semibold text-[#464A53] font-sans'>Category</span>
                </div>
                <div className={`${activeIndex.one === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-2 lg:w-[28%] w-[22.6%]`}></div>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={`${activeIndex.one === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>02</div>
                  <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>Secdule</span>
                </div>
                <div className={`${activeIndex.two === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-2 lg:w-[28%] w-[22.6%]`}></div>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={`${activeIndex.two === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>03</div>
                  <span className='absolute bg-white hidden pl-5 lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>Medical History</span>
                </div>
                <div className={`${activeIndex.three === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5  h-2 lg:w-[28%] w-[22.6%]`}></div>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={`${activeIndex.three === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>04</div>
                  <span className='absolute bg-white hidden pl-5 lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>Submit</span>
                </div>
              </div>
            </div>

            <div className='lg:ml-10 lg:mr-24'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAppointment