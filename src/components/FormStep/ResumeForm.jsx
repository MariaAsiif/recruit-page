import React from 'react'

const ResumeForm = ({ handleBack, handleNext }) => {
  return (
    <div className='lg:mt-[120px]'>
      <label className="block text-sm font-medium mb-1" htmlFor="secondFname">Please Upload Your File</label>

      <label htmlFor='file'>
        <div className='image_wrapper border-2 h-[50px] text-center lg:pt-2 text-[16px] cursor-pointe lg:w-[670px]  w-full bg-gray-200'>Upload CV or Just Drag and Drop</div>
      </label>
      <input type="file" className='hidden' id="file" />

      <div className='flex justify-between lg:pt-[180px]'>
        {

          <div className=''>
            <button onClick={() => handleBack()} className=' bg-[#DB4446] hover:bg-[#93C234] px-2 py-2 mb-5 text-sm font-sans text-white w-full'>Back Step</button>
          </div>
        }
        <div className=''>
          <button onClick={() => handleNext()} className=' bg-[#DB4446] hover:bg-[#93C234] px-2 py-2 mb-5 text-sm font-sans text-white w-full'>{"Next Step"}</button>
        </div>
      </div>
    </div>
  )
}

export default ResumeForm