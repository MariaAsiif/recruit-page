import React from 'react'
import wollet from '../../images/form/submit-giff.gif'
const SubmitForm = ({ handleBack, handleNext }) => {
  return (
    <div className='mt-[10px] '>
      <div className='flex justify-center items-center '>
        <img src={wollet} alt="wollet" className="w-[50%] h-[50%] " />
      </div>
      <div className='flex justify-between '>
        {

          <div className=''>
            <button onClick={() => handleBack()} className=' bg-[#DB4446] hover:bg-[#93C234] px-2 py-2 mb-5 text-sm font-sans text-white w-full'>Back Step</button>
          </div>
        }
        <div className=''>
          <button onClick={() => handleNext()} className=' bg-[#DB4446] hover:bg-[#93C234] px-2 py-2 mb-5 text-sm font-sans text-white w-full'>{"Submit"}</button>
        </div>
      </div>
    </div>
  )
}

export default SubmitForm