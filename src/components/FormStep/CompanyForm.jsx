import React, { useState } from 'react'
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { useSelector } from 'react-redux';
const CompanyForm = ({ handleBack, handleNext }) => {


  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  const [expiryDate, setexpiryDate] = useState({ day: dd, month: mm, year: yyyy })
  const [job, setjob] = useState("BUSINESS DEVELOPMENT")
  const alljobs = [
    "BUSINESS DEVELOPMENT", "SALES REPRESENTATIVES", "DOCTORS", "LAWYERS", "CHEMIST", "BOTANY", "AGRICULTURE SCIENTIST", "ADMINISTRATOR",
  ]

  const {token} = useSelector((state) => state.recruitAuth.loginInfo)

  const onNext = () => {
    const obj = {
      expiryDate: `${expiryDate.day}-${expiryDate.month}-${expiryDate.year}`,
      job
    }
    handleNext(obj)
  }

  // ****************** Datepicker Content ***********
  const renderCustomInput = ({ ref }) => (
    < div className='relative cursor-pointe w-full'>
      <input readOnly ref={ref} // necessary  placeholder="yyy-mm-dd"
        value={expiryDate ? `${expiryDate.year}/${expiryDate.month}/${expiryDate.day}` : ''}
        className='lg:w-[635px] w-full mb-5 text-[#CCCCCC] font-sans  focus:outline-none border border-[#6D6E71] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium'
      />
      {/* <div className={`visible absolute top-3 cursor-pointer right-5`}>   <FcCheckmark />   </div> */}

    </div >
  )



  return (
    <div>
      <div className='h-[500px]'>
        <div className='row company_section'>
          <div className=' col-12  '>
            <label className="block text-sm font-medium mb-1" htmlFor="secondFname">Select Your Date of Birth </label>

            <DatePicker
              value={expiryDate}
              calendarPopperPosition="bottom"
              onChange={setexpiryDate}
              renderInput={renderCustomInput} // render a custom input
              shouldHighlightWeekends
            />
          </div>
          {
            token === null 
          ?
          <div className=' col-12  '>
            <label className="block text-sm font-medium mb-1" htmlFor="secondFname">Please Select Your job Category </label>

            <select name='job' value={job} onChange={(e) => setjob(e.target.value)} className='w-full mb-5 text-[#CCCCCC] font-sans  focus:outline-none border border-[#6D6E71] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium'>
              {alljobs.map((job, i) => <option key={i}>{job}</option>)}
            </select>
            {/* <input className='w-full mb-5 text-[#CCCCCC] font-sans  focus:outline-none border border-[#6D6E71] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Enter your First  Name*' /> */}
          </div>
          : null }
        </div>
      </div>

      <div className='flex justify-between lg:mt-[170px] button_section'>
        {

          <div className=''>
            <button onClick={() => handleBack()} className=' bg-[#DB4446] hover:bg-[#93C234] px-2 py-2 mb-5 text-sm font-sans text-white w-full'>Back Step</button>
          </div>
        }
        <div className=''>
          <button onClick={onNext} className=' bg-[#DB4446] hover:bg-[#93C234] px-2 py-2 mb-5 text-sm font-sans text-white w-full'>{"Next Step"}</button>
        </div>
      </div>
    </div>
  )
}

export default CompanyForm