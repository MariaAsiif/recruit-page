import React from 'react'
import { Button } from 'react-bootstrap'
import { EmailVerifyWrpper } from './StylePopup'
const EmailVerify = ({handleNext}) => {
  return (
    <EmailVerifyWrpper>
      <h1 >Verify Email & Email Address
        <br />
        <span >Verification Code is sent to you,Please enter that code here. </span>

      </h1>
      <div>
        <div className='mb-5'>
          <input type="number" placeholder='Enter Code' />
        </div>

      </div>

      <Button
        onClick={() => handleNext()}
        className="btns d-grid col-2 mx-auto btn-lg clo-3"
      >
        Next
      </Button>
    </EmailVerifyWrpper>
  )
}

export default EmailVerify