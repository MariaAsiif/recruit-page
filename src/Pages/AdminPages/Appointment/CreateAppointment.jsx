import React from 'react'
import { useState } from 'react'
import Category from '../../../components/AdminComponents/Appointments/Category'
import ConsultationType from '../../../components/AdminComponents/Appointments/ConsultationType'
import History from '../../../components/AdminComponents/Appointments/History'
import Schedule from '../../../components/AdminComponents/Appointments/Secdual'
import Secdual from '../../../components/AdminComponents/Appointments/Secdual'
import SocialHistory from '../../../components/AdminComponents/Appointments/SocialHistory'
import Submit from '../../../components/AdminComponents/Appointments/Submit'
import SurgicalHistory from '../../../components/AdminComponents/Appointments/SurgicalHistory'
import UserInfo from '../../../components/AdminComponents/Appointments/userInfo'

const CreateAppointment = () => {
  const listName = ["", "", "Category / Sedule", "Medical History", "Prvious Consulatation", "Surgical History", "Social History", "Consultation Type", "Submit"]
  const [active, setActive] = useState(0)
  const [activeIndex, setActiveIndex] = useState({
    one: false,
    two: false,
    three: false,
    for: false,
    five: false,
    six: false,
    seven: false
  })


  const handleNext = (e) => {
    e.preventDefault()
    const increse = active + 1
    console.log("inc", increse)
    if (increse === 1) {
      setActiveIndex((prev) => ({
        ...prev,
        one: true
      })
      )
    }
    if (increse === 2) {
      setActiveIndex((prev) => ({
        ...prev,
        two: true
      })
      )
    }
    if (increse === 3) {
      setActiveIndex((prev) => ({
        ...prev,
        three: true
      })
      )
    }
    if (increse === 4) {
      setActiveIndex((prev) => ({
        ...prev,
        for: true
      })
      )
    }
    if (increse === 5) {
      setActiveIndex((prev) => ({
        ...prev,
        five: true
      })
      )
    }
    if (increse === 6) {
      setActiveIndex((prev) => ({
        ...prev,
        six: true
      })
      )
    }
    if (increse === 7) {
      setActiveIndex((prev) => ({
        ...prev,
        seven: true
      })
      )
    }



    setActive(increse)
  }



  const handleBack = () => {
    const increse = active - 1
    setActive(increse)
  }





  console.log("index", activeIndex)
  //  )) 

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
                  <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-[115px] text-[10px] font-semibold text-[#464A53] font-sans'>User / info</span>
                </div>

                <div className={`${activeIndex.one === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-2 lg:w-[10%] w-[10.6%]`}></div>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={`${activeIndex.one === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>02</div>
                  <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>
                    Category / Sedule
                  </span>
                </div>
                <div className={`${activeIndex.two === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-2 lg:w-[10%] w-[10.6%]`}></div>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={`${activeIndex.two === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>03</div>
                  <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>
                    Medical History

                  </span>
                </div>
                <div className={`${activeIndex.three === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-2 lg:w-[10%] w-[10.6%]`}></div>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={`${activeIndex.three === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>04</div>
                  <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>
                    Prvious Consulatation
                  </span>
                </div>
                <div className={`${activeIndex.for === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-2 lg:w-[10%] w-[10.6%]`}></div>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={`${activeIndex.for === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>05</div>
                  <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>
                    Surgical History
                  </span>
                </div>
                <div className={`${activeIndex.five === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-2 lg:w-[10%] w-[10.6%]`}></div>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={`${activeIndex.five === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>06</div>
                  <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>
                    Social History
                  </span>
                </div>
                <div className={`${activeIndex.six === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-2 lg:w-[10%] w-[10.6%]`}></div>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={`${activeIndex.six === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>07</div>
                  <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>
                    Consultation Type
                  </span>
                </div>
                <div className={`${activeIndex.seven === true ? 'bg-gradient-to-r from-[#DB4446] to-[#E9644F]' : 'bg-gray-100'} md:w-[25%] md:-ml-5 h-2 lg:w-[10%] w-[10.6%]`}></div>
                <div className='lg:w-[4%] w-[8%] text-center relative'>
                  <div className={`${activeIndex.seven === true && 'rounded-full border bg-[#DB4446] text-white'} pt-2 text-sm w-[40px] h-[40px] rounded-full border`}>08</div>
                  <span className='absolute bg-white hidden lg:inline  z-10 -left-10 mt-2 w-24 text-[10px] font-semibold text-[#464A53] font-sans'>
                    Submit
                  </span>
                </div>

              </div>
            </div>

            <div className='lg:ml-10 lg:mr-24'>


              {active === 0 && <UserInfo handleNext={(e) => handleNext(e)} handleBack={(e) => handleBack(e)} />}
              {active === 1 && <Category handleNext={(e) => handleNext(e)} handleBack={(e) => handleBack(e)} />}
              {active === 2 && <History handleNext={(e) => handleNext(e)} handleBack={(e) => handleBack(e)} />}
              {active === 3 && <Schedule handleNext={(e) => handleNext(e)} handleBack={(e) => handleBack(e)} />}
              {active === 4 && <SurgicalHistory handleNext={(e) => handleNext(e)} handleBack={(e) => handleBack(e)} />}
              {active === 5 && <SocialHistory handleNext={(e) => handleNext(e)} handleBack={(e) => handleBack(e)} />}
              {active === 6 && <ConsultationType handleNext={(e) => handleNext(e)} handleBack={(e) => handleBack(e)} />}
              {active === 7 && <Submit handleNext={(e) => handleNext(e)} handleBack={(e) => handleBack(e)} />}


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAppointment