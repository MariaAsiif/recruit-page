import React, { useState } from 'react'

const ResumeForm = ({ handleBack, handleNext }) => {
  const [resume, setresume] = useState({})
  const onNext = () => {
    let obj = {
      resume
    }
    handleNext(obj)
  }
  return (
    <div className='lg:mt-[120px]'>
      <label className="block text-sm font-medium mb-1" htmlFor="secondFname">Please Upload Your File</label>

      <label htmlFor='file'>
        <div className='image_wrapper border-2 h-[50px] text-center pt-2 text-[16px] cursor-pointe    w-full bg-gray-200'>Upload CV or Just Drag and Drop</div>
      </label>
      <input onChange={(e) => setresume(e.target.files[0])} type="file" className='hidden' id="file" />
      <h1 className='text-center'>{resume.name}</h1>

      <div className='flex justify-between lg:pt-[180px] button_section '>
        {

          <div className=''>
            <button onClick={() => handleBack()} className=' bg-[#DB4446] hover:bg-[#93C234] px-2 py-2 mb-5 text-sm font-sans text-white w-full'>Back Step</button>
          </div>
        }
        <div className=''>
          <button onClick={onNext} className=' bg-[#DB4446] hover:bg-[#93C234] px-2 py-2 mb-5 text-sm font-sans text-white w-full'>{"Next Step"}</button>
        </div>
      </div>
    </div>
  )
}

export default ResumeForm