import React from 'react'

const ResumeForm = () => {
  return (
    <div className='mb-6'>
      <label htmlFor='file'>
        <div className='border-2 h-[50px] text-center pt-2 text-[16px] cursor-pointer  w-full bg-gray-200'>Upload CV or Just Drag and Drop</div>
      </label>
      <input type="file" className='hidden' id="file"/>
    </div>
  )
}

export default ResumeForm