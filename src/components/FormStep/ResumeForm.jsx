import React, { useState , useEffect } from 'react'
import { callApi, callPublicApi } from '../../utils/CallApi'
import { toast } from 'react-toastify'
import Loader from '../Loader/loader'
import { useSelector } from 'react-redux'

const ResumeForm = ({ handleBack, handleNext }) => {
  const [resume, setresume] = useState("")
  const [file, setFile] = useState('')
  const [loader, setLoader] = useState(false)


  const user = useSelector((state) => state.recruitAuth.userInfo)


  const handleImage = async (e) => {
    let file = e.target.files[0]

    let formData = new FormData();
    formData.append('file', file);   //append the values with key, value pair

    try {
      setLoader(true)
      const res = await callPublicApi("/uploads/uploadPublicCvFile", "post", formData)
      if (res) {
        setLoader(false)
        let obj = Object.assign({}, ...res)
        setFile(obj.url)
        setresume(obj.url)
        toast.success("Your Cv are Successfully uploaded");
      }
      else {
        toast.error(res.message);

      }

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    let fetchPool = async () => {
      let payload = {
        "critarion": { "_id": user?._id },
        "addedby": "_id email first_name",
        "lastModifiedBy": "_id email first_name"
      }
      try {
        let res = await callApi('/talentPool/findTalentPoolById', 'post', payload)
        console.log("Res", res)
      }
      catch (err) { }
    }
    fetchPool()
  }, [])

  const onNext = () => {
    let obj = {
      file
    }
    handleNext(obj)
  }
  return (
    <>
      {
        loader ?
          <Loader />
          :
          <>
            <div className='lg:mt-[120px] h-[400px]'>
              <label className="block text-sm font-medium mb-1" htmlFor="secondFname">Please Upload Your File</label>

              <label htmlFor='file'>
                <div className='image_wrapper border-2 h-[50px] text-center pt-2 text-[16px] cursor-pointe    w-full bg-gray-200'>{resume ? resume : "Upload CV or Just Drag and Drop"}</div>
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
      }
    </>

  )
}

export default ResumeForm