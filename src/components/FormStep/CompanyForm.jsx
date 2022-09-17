import React, { useState } from 'react'
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
const CompanyForm = () => {


  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  const [expiryDate, setexpiryDate] = useState({ day: dd, month: mm, year: yyyy })

  // ****************** Datepicker Content ***********
  const renderCustomInput = ({ ref }) => (
    < div className='relative cursor-pointe w-full'>
      <input readOnly ref={ref} // necessary  placeholder="yyy-mm-dd"
        value={expiryDate ? `${expiryDate.year}/${expiryDate.month}/${expiryDate.day}` : ''}
        className='w-full mb-5 text-[#CCCCCC] font-sans  focus:outline-none border border-[#6D6E71] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium'
      />
      {/* <div className={`visible absolute top-3 cursor-pointer right-5`}>   <FcCheckmark />   </div> */}

    </div >
  )


  return (
    <div>
      <div className='row'>
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
        <div className=' col-12  '>
          <label className="block text-sm font-medium mb-1" htmlFor="secondFname">Please Select Your job Category </label>

          <select className='w-full mb-5 text-[#CCCCCC] font-sans  focus:outline-none border border-[#6D6E71] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium'>
            <option>Select Option</option>
            <option>Select Option</option>
            <option>Select Option</option>
            <option>Select Option</option>
            <option>Select Option</option>
          </select>
          {/* <input className='w-full mb-5 text-[#CCCCCC] font-sans  focus:outline-none border border-[#6D6E71] rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' placeholder='Enter your First  Name*' /> */}
        </div>
      </div>
    </div>
  )
}

export default CompanyForm