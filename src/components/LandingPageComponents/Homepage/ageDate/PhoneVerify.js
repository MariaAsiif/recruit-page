import React from 'react'
import { Button } from 'react-bootstrap'
import { EmailVerifyWrpper } from './StylePopup'
const PhoneVerify = ({handleNext , handleClose}) => {
  return (
    <EmailVerifyWrpper>
      <h1 >Verify Number & Phone Number
        <br />
        <span >Verification Code is sent to you,Please enter that code here.</span>

      </h1>
      <div>
        <div className='mb-5'>
          <input type="number" placeholder='Enter Code' />
        </div>

      </div>

      <Button
        onClick={() => handleClose()}
        className="btns d-grid col-2 mx-auto btn-lg clo-3"
      >
        Finish
      </Button>
    </EmailVerifyWrpper>
  )
}

export default PhoneVerify