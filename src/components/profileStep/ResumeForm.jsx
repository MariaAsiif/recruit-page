import React from 'react'

const ResumeForm = ({ handleNext }) => {
  return (
    <div className=''>

      <div className='row'>
        <div className='col-lg-6  '>
          <div className="dropdown relative ">
            <label className='text-sm text-gray-400'>Enter New Password </label>
            <input className='w-full mb-5  font-sans  focus:outline-none border-b border-[#6D6E71] py-2 px-2 placeholder:text-sm placeholder:font-medium'  />
          </div>
        </div>
        <div className=' col-lg-6 '>
          <label className='text-sm text-gray-400'>Confirm new Password </label>
          <input className='w-full mb-5  font-sans  focus:outline-none border-b border-[#6D6E71] py-2 px-2 placeholder:text-sm placeholder:font-medium'  />
        </div>
      </div>
      <div className='row mt-3'>
        <h2 className='mb-5'>Security Question</h2>
        <div className='col-lg-6  '>
          <div className="dropdown relative ">
            <label className='text-sm text-gray-400'>Which team  play well in game?</label>
            <input className='w-full mb-5  font-sans  focus:outline-none border-b border-[#6D6E71] py-2 px-2 placeholder:text-sm placeholder:font-medium' />
          </div>
        </div>
        <div className=' col-lg-6 '>
          <label className='text-sm text-gray-400'>Play where your parent born?</label>
          <input className='w-full mb-5  font-sans  focus:outline-none border-b border-[#6D6E71] py-2 px-2 placeholder:text-sm placeholder:font-medium'  />
        </div>
      </div>


      <div className='flex justify-end lg:pt-[120px] button_section '>

        <div className=''>
          <button onClick={() => handleNext()} className=' bg-[#DB4446] hover:bg-[#93C234] px-2 py-2 mb-5 text-sm font-sans text-white w-full'>{"Next Step"}</button>
        </div>
      </div>
    </div>
  )
}

export default ResumeForm