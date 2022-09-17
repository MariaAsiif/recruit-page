import React from 'react'

const SubmitForm = ({ handleBack, handleNext }) => {
  return (
    <div className='mt-[150px]'>
      submit
      <div className='flex justify-between lg:pt-[200px] '>
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