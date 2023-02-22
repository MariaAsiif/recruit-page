import React, { useState } from 'react'
import { callPublicApi } from '../../utils/CallApi'
import { toast } from 'react-toastify'

const ResumeForm = ({ handleBack, handleNext }) => {
  const [resume, setresume] = useState({})
  const [file, setFile] = useState('')

      
const handleImage = async (e) => {
  let file = e.target.files[0]

  let formData = new FormData();    
  formData.append('file', file);   //append the values with key, value pair

  try {
      const res = await callPublicApi("/uploads/uploadPublicCvFile", "post", formData)
      if (res) {
          let obj = Object.assign({} , ...res)
          setFile(obj.url)
          toast.success("Your Cv are Successfully uploaded");
      }
      else {
          toast.error(res.message);

      }

  } catch (error) {
      console.log(error);
  }
}

  const onNext = () => {
    let obj = {
      file
    }
    handleNext(obj)
  }
  return (
    <>
      <div className='lg:mt-[120px] h-[400px]'>
        <label className="block text-sm font-medium mb-1" htmlFor="secondFname">Please Upload Your File</label>

        <label htmlFor='file'>
          <div className='image_wrapper border-2 h-[50px] text-center pt-2 text-[16px] cursor-pointe    w-full bg-gray-200'>Upload CV or Just Drag and Drop</div>
        </label>
        <input onChange={handleImage} type="file" className='hidden' id="file" />
        <h1 className='text-center'></h1>


      </div>
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
    </>

  )
}

export default ResumeForm