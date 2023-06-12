import React from 'react'
import wollet from '../../images/form/submit-giff.gif'
const SubmitForm = ({  handleNext }) => {
  return (
    <div className='mt-[10px] '>
      <div className='flex justify-center items-center flex-col'>
        <h2 className='text-[#65A33A] font-medium text-[20px]'> Your account updated</h2>
        <img src={wollet} alt="wollet" className="w-[30%] h-[30%] " />
      </div>
      <div className='flex justify-between '>
      
        <div className=''>
          <button onClick={() => handleNext()} className=' bg-[#DB4446] hover:bg-[#93C234] px-2 py-2 mb-5 text-sm font-sans text-white w-full'>{"Submit"}</button>
        </div>
      </div>
    </div>
  )
}

export default SubmitForm