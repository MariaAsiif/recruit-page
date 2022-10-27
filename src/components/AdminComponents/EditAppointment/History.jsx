import React, { useState, useEffect } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
import { callApi, HOSTNAME } from '../../../utils/CallApi';
// import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
// import moment from 'moment';
// import { Link } from 'react-router-dom';

// const schema = yup.object({


// });

const History = ({ register, watch, errors, mode , data  }) => {

  const [companySetting, setCompanySetting] = useState(true);
  const [file, setFile] = useState("");
  const [allDisease, setallDisease] = useState([])



  const handleFile = async (e) => {
    try {
      let file = e.target.files[0]
      let formdata = new FormData()
      formdata.append('picture', file)
      let res = await callApi("/appointmentrequests/uploadMedicalImages", "post", file)
      if (res.status === "Success") {
        setFile(res.data)
        toast.success(res.message);
      }
      else {
        toast.error(res.message);

      }


    } catch (error) {
      toast.error(error);

    }
  }




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


  return (
    <div >
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

      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <div className='row p-11'>

        <div className='col-lg-4 mb-4 relative'>
          <label className='block text-sm font-medium mb-1' htmlFor='name'>
            Disease
          </label>
          {mode === "view" ?
            <p>
              {allDisease.filter((item) => item._id === watch('disease')?.diseaseName)}
            </p>
            :
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
          }
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

              <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox"
                  disabled={mode === "view" ? true : false}
                  checked={companySetting}
                  onChange={() => setCompanySetting(!companySetting)}
                  id="default-toggle"
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
            {mode === "view" ?
              <img src={`${HOSTNAME}${watch(data?.medicalFiles)}`} />
              :
              <input
                type="file"
                // {...register('image')}
                onChange={(e) => handleFile(e)}
                className={`border p-1 focus:outline-blue-500 rounded-sm w-full  ${'border-red-500'
                  }`}

              />
            }

            {/* {errors.image && (
                <p className='text-red-500 text-sm'>{errors.image.message}</p>
              )} */}
          </div>
        </div>






        <div className='col-lg-12 mb-4 relative'>
          <label className='block text-sm font-medium mb-1' htmlFor='quote'>
            Description
          </label>
          {mode === "view" &&
            <div className='absolute right-5 top-10'>
              {!errors.desc && watch('desc') ? (
                <FcCheckmark />
              ) : errors.desc ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
          }
          {mode === "view" ?
            <p>
              {watch('description')}
            </p>
            :

            <textarea
              {...register('description')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.description && 'border-red-500'
                }`}
              name='description'
              id='desc'
              placeholder='Description'
              cols='20'
            ></textarea>
          }
          {/* <span hidden={watch('quot')} className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'>(optional)</span> */}

          {errors.description && (
            <p className='text-red-500 text-sm'>{errors.description.message}</p>
          )}
        </div>


      </div>
      {/* </form> */}
    </div>
  );
};

export default History;
