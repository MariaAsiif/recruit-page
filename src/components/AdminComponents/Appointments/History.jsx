import React, { useState, useEffect } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callApi } from '../../../utils/CallApi';
// import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
// import moment from 'moment';
// import { Link } from 'react-router-dom';

const schema = yup.object({
  disease: yup.string().required('Disease is Required'),
  description: yup.string().required('Description is Required'),

});

const History = ({ handleNext, handleBack, data, updateState }) => {

  const [companySetting, setCompanySetting] = useState(true);
  const [error, setError] = useState("");
  const [file, setFile] = useState("");
  const [allDisease, setallDisease] = useState([])

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });



  const handleFile = async (e) => {
    try {
      let file = e.target.files[0]
      var re = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png|\.pdf)$/i;
      if (!re.exec(file.name)) {
        toast.error("Only Pdf file and image allowed");
        // setError('Only Pdf file are allowed')

      }
      else {
        let formdata = new FormData()
        formdata.append('prescription', file)
        setError('')
        let res = await callApi("/appointmentrequests/uploadMedicinePrescription", "post", formdata)
        if (res.status === "Success") {
          setFile(res.data)
          toast.success(res.message);
        }
        else {
          toast.error(res.message);

        }
      }


    } catch (error) {
      toast.error(error);

    }
  }



  const onSubmit = async (values) => {

    let payload = {
      medicalFiles: file,
      disease: values.disease,
      positive: companySetting,
      description: values.description,
    }
    if (file !== "") {
      updateState(payload)
      handleNext()
    }
    else {
      setError("File is required")
    }
  };


  useEffect(() => {
    (async () => {
      try {
        const payload = {
          sortproperty: "created_at",
          sortorder: -1,
          offset: 0,
          limit: 50,
          query: {
            critarion: { active: true, },
            addedby: "_id email first_name",
            lastModifiedBy: "_id email first_name"
          }
        }
        const response = await callApi("/diseases/getDiseasesWithFullDetails", "post", payload)
        setallDisease(response.data.diseases)
      } catch (error) {
        console.log(error);
      }
    })();

  }, [])


  console.log("daa", data)


  useEffect(() => {
    if (data?.disease) {
      setCompanySetting(data?.positive)
      reset(data)
    }
  }, [reset, data])



  return (
    <div className='bscontainer-fluid'>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row p-11'>

          <div className='col-lg-4 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='name'>
              Disease
            </label>
            <select
              {...register('disease')}
              className={`border p-[10px] focus:outline-blue-500 rounded-sm w-full -mt-[1px]  ${errors.disease && 'border-red-500'
                }`}
            >
              <option value="">Select Disease</option>
              {allDisease.map((dis) => (
                <option key={dis._id} value={dis._id}>{dis?.diseaseName}</option>
              ))}

            </select>
            {errors.disease && (
              <p className='text-red-500 text-sm'>{errors.disease.message}</p>
            )}

          </div>

          <div className='col-lg-4 mb-4 relative'>
            <div>
              <div className='text-sm text-slate-800 font-semibold mb-3'>
                Nagative / Positive
              </div>
              <div className='flex items-center'>

                <label for="default-toggles" class="inline-flex relative items-center cursor-pointer">
                  <input type="checkbox"
                    checked={companySetting}
                    onChange={() => setCompanySetting(!companySetting)}
                    id="default-toggles"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <div className='text-sm text-slate-400 italic ml-2'>
                    {companySetting ? 'True' : 'False'}
                  </div>
                </label>



              </div>
            </div>
          </div>

          <div className='col-lg-4 mb-4 '>
            <label className='block text-sm font-medium mb-1 '>
              Medical Files
            </label>
            <div className='relative'>
              <input
                type="file"
                // {...register('image')}
                onChange={(e) => handleFile(e)}
                className={`border p-1 focus:outline-blue-500 rounded-sm w-full  ${error && 'border-red-500'
                  }`}

              />

              {error !== "" ? (
                <p className='text-red-500 text-sm'>{error}</p>
              )
                :
                (
                  <p className='text-red-500 text-sm'>Pdf, jpg, png  allow</p>
                )

              }
            </div>
          </div>






          <div className='col-lg-12 mb-4 relative'>
            <label className='block text-sm font-medium mb-1' htmlFor='quote'>
              Description
            </label>
            <div className='absolute right-5 top-10'>
              {!errors.description && watch('description') ? (
                <FcCheckmark />
              ) : errors.description ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
            <textarea
              {...register('description')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.description && 'border-red-500'
                }`}
              name='description'
              id='description'
              placeholder='Description'
              cols='20'
            ></textarea>
            {/* <span hidden={watch('quot')} className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'>(optional)</span> */}

            {errors.description && (
              <p className='text-red-500 text-sm'>{errors.description.message}</p>
            )}
          </div>

          <div className='col-lg-12'>
            <div className='col-lg-12 flex justify-between'>
              <button onClick={(e) => handleBack(e)} className='p-2 bg-red-500 hover:bg-green-600 text-white'>
                Back
              </button>
              <button className='p-2 bg-red-500 hover:bg-green-600 text-white'>
                Next
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default History;
