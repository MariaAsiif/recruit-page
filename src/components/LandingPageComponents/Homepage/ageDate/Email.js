import React, { useState } from 'react'
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { EmailWrpper } from './StylePopup'
import { Button } from 'react-bootstrap';
import { BsFillCalendar2DateFill } from 'react-icons/bs'
const Email = ({ handleNext }) => {

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  const [expiryDate, setexpiryDate] = useState({ day: dd, month: mm, year: yyyy })

  // ****************** Datepicker Content ***********
  const renderCustomInput = ({ ref }) => (
    < div className='position-relative cursor-pointe w-full '>
      <input readOnly ref={ref} // necessary  placeholder="yyy-mm-dd"
        value={expiryDate ? `${expiryDate.year}/${expiryDate.month}/${expiryDate.day}` : ''}
        className="width_full"
        
      />
      <div className={`position-absolute top-0 cursor-pointer end-0 `} style={{marginRight:'20px' , marginTop:'2px' , fontSize:'20px'}}>   <BsFillCalendar2DateFill />   </div>

    </div >
  )

  return (
    <EmailWrpper>
      <div>
        <h1 >Please Enter your Date of birth and email address</h1>
        <div className="email_wraper">
          <DatePicker
            value={expiryDate}
            calendarPopperPosition="left"
            onChange={setexpiryDate}
            renderInput={renderCustomInput} // render a custom input
            shouldHighlightWeekends
          />
        </div>

        <div className='mb-5'>
          <input type="email" placeholder='Email Address' />
        </div>

        <Button
          onClick={() => handleNext()}
          className="btns d-grid col-2 mx-auto btn-lg clo-3"
        >
          Next
        </Button>

      </div>
    </EmailWrpper>
  )
}

export default Email