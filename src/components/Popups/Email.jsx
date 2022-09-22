import React, { useState } from 'react'
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
const Email = ({ handleNext }) => {

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
        className='lg:w-[380px] w-full mb-5 text-[#CCCCCC] font-sans bg-transparent focus:outline-none border border-white rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium'
      />
      {/* <div className={`visible absolute top-3 cursor-pointer right-5`}>   <FcCheckmark />   </div> */}

    </div >
  )

  return (
    <div>
      <div className='w-full lg:px-20  px-2 py-5'>
        <h1 className='text-white font-light text-center text-xl mb-5'>Please Enter your Date of birth and email address</h1>
        <div>
          <div className="">
            <DatePicker
              value={expiryDate}
              calendarPopperPosition="bottom"
              onChange={setexpiryDate}
              renderInput={renderCustomInput} // render a custom input
              shouldHighlightWeekends
            />
          </div>

          <div className='mb-5'>
            <input type="email" placeholder='Email Address' className=' w-full mb-5 text-[#CCCCCC] font-sans  focus:outline-none border bg-transparent  border-white  rounded-lg py-2 px-2 placeholder:text-sm placeholder:font-medium' />
          </div>

        </div>
        <button onClick={() => handleNext()} className='bg-white text-[#00492C]  px-2 py-2 rounded-full  font-medium tracking-widest mb-5 w-4/5 m-auto block'>Next</button>
      </div>
    </div>
  )
}

export default Email     