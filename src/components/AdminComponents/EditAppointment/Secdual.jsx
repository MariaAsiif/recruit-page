import React, { useEffect, useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose } from 'react-icons/md';
// import { toast, ToastContainer } from 'react-toastify';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { callApi } from '../../../utils/CallApi';
import { MdDelete } from 'react-icons/md'
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import moment from 'moment';
import { BsPlusCircle } from 'react-icons/bs'
import { useFieldArray } from "react-hook-form";
import { callApi, HOSTNAME } from '../../../utils/CallApi';
import { toast, ToastContainer } from 'react-toastify';

const schema = yup.object({
  // name: yup.string().required('Doctor Name is Required'),
  // special: yup.string().required('Specialization is Required'),
  // link: yup.string().required('Profile link is Required'),
  // // quote: yup.string().required('Quotation is Required'),
  // familyDiseases: yup
  //   .array()
  //   .of(
  //     yup.object({
  //       description: yup.string().required(),

  //     })
  //   )
  //   .required(),
  // prs: yup.mixed().test('required ', "File is required", value => {
  //   return value && value.length
  // }),
  // med: yup.mixed().test('required ', "File is required", value => {
  //   return value && value.length
  // })

});

const Schedule = ({ control, register, watch, errors, mode, reset, setSeduleFiles, data, setSeduleDate }) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  const [quoteDate, setquoteDate] = useState({
    day: dd,
    month: mm,
    year: yyyy,
  });

  const [file, setFile] = useState('')
  const [report, setReport] = useState('')




  const { fields, append, remove } = useFieldArray({
    control,
    name: "familyDiseases"
  });


  // ****************** Datepicker Content ***********
  const renderCustomInput = ({ ref }) => (
    <div className='relative cursor-pointe w-full'>
      <input
        readOnly
        ref={ref} // necessary  placeholder="yyy-mm-dd"
        value={
          quoteDate
            ? `${quoteDate.year}/${quoteDate.month}/${quoteDate.day}`
            : ''
        }
        className={` border p-2 focus:outline-blue-500 rounded-sm w-full cursor-pointer z-30  px-2 py-2 `}
      />
      <div className={`visible absolute top-3 cursor-pointer right-5`}>
        {' '}
        <FcCheckmark />{' '}
      </div>
    </div>


  );


  const handleFile = async (e, type) => {
    try {
      if (type === "file") {
        let file = e.target.files[0]
        let formData = new FormData();
        formData.append('prescription', file)
        let res = await callApi('/appointmentrequests/uploadMedicinePrescription', "post", formData)
        if (res.status === "Success") {
          toast.success(res.message);
          setSeduleFiles((prev) => ({ ...prev, file: res?.data }))
        }
        else {
          toast.error(res.message);

        }
      }
      else {
        let file = e.target.files[0]
        let formData = new FormData();
        formData.append('prescription', file)
        let res = await callApi('/appointmentrequests/uploadMedicinePrescription', "post", formData)
        if (res.status === "Success") {
          toast.success(res.message);
          setSeduleFiles((prev) => ({ ...prev, report: res?.data }))
        }
        else {
          toast.error(res.message);

        }
      }

    } catch (error) {
      toast.error(error);


    }
  }


  useEffect(() => {
    // var parts = data?.quoteDate?.split('-');
    // var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
    if (data.lastCheckupDate) {
      reset(data);
      const date = moment(data?.lastCheckupDate).format('yyyy-M-D').split('-')
      setquoteDate({ day: +date[2], month: +date[1], year: +date[0] })
      let d = `${quoteDate.year}/${quoteDate.month}/${quoteDate.day}`
      setquoteDate(d)
    }
  }, [data, reset])


  useEffect(() => {
    let d = `${quoteDate.year}/${quoteDate.month}/${quoteDate.day}`
    setSeduleDate(d)
  }, [quoteDate])

  return (
    <div>
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
      <div className='row px-10'>
        <h2 className='font-medium text-[20px] pb-3'>Prvious Consulatation</h2>
        <div className='col-lg-4 mb-4 relative'>
          <label className='block text-sm font-medium mb-1' htmlFor='name'>
            Doctor Name{' '}
          </label>
          {mode === "view" &&
            <div className='absolute right-5 top-10'>
              {!errors.name && watch('name') ? (
                <FcCheckmark />
              ) : errors.name ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
          }
          {mode === "view" ?
            (
              <p>{watch('doctorName')}</p>
            )
            :
            < input
              {...register('doctorName')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.doctorName && 'border-red-400'
                }`}
              name='doctorName'
              id='name'
              type='text'
              placeholder='doctor Name'
            />
          }
          <span
            hidden={watch('doctorName')}
            className='absolute text-red-400 text-lg font-medium  top-9 left-[145px]'
          >
            *
          </span>

          {errors.doctorName && (
            <p className='text-red-500 text-sm'>{errors.doctorName.message}</p>
          )}
        </div>

        <div className='col-lg-4 mb-4 relative'>
          <label className='block text-sm font-medium mb-1' htmlFor='name'>
            Specialization
          </label>


          <div className='absolute right-5 top-10'>
            {!errors.special && watch('special') ? (
              <FcCheckmark />
            ) : errors.special ? (
              <div className=' text-red-500'>
                <MdClose />
              </div>
            ) : null}
          </div>

          {mode === "view" ?
            (
              <p>{watch('specialization')}</p>
            )
            :

            <input type="text"
              {...register('specialization')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.specialization && 'border-red-500'
                }`}
              name='specialization'
              id='special'
              placeholder='Specialization'
            />
          }
          {/* <span hidden={watch('quot')} className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'>(optional)</span> */}

          {errors.link && (
            <p className='text-red-500 text-sm'>{errors.link.message}</p>
          )}





        </div>

        <div className='col-lg-4 mb-4 '>
          <label className='block text-sm font-medium mb-1 '>
            Last Checkup Date
          </label>
          {mode === "view" ?
            (
              `${quoteDate.year}/${quoteDate.month}/${quoteDate.day}`
            )
            :

            <div className='relative'>
              <DatePicker
                value={quoteDate}
                name='quoteDate'
                onChange={(date) => setquoteDate(date)}
                renderInput={renderCustomInput} // render a custom input
                shouldHighlightWeekends
                calendarPopperPosition='bottom'
              />
            </div>
          }
        </div>

        <div className='col-lg-4 mb-4 relative'>
          <label className='block text-sm font-medium mb-1' htmlFor='link'>
            Profile Link
          </label>
          {mode !== "view" &&
            <div className='absolute right-5 top-10'>
              {!errors.profileLink && watch('profileLink') ? (
                <FcCheckmark />
              ) : errors.profileLink ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
          }

          {mode === "view" ?
            (
              <p>{watch('profileLink')}</p>
            )
            :
            <input type="text"
              {...register('profileLink')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.profileLink && 'border-red-500'
                }`}
              name='profileLink'
              id='link'
              placeholder='profile Link'
              cols='20'
            />
          }
          {/* <span hidden={watch('quot')} className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'>(optional)</span> */}

          {errors.profileLink && (
            <p className='text-red-500 text-sm'>{errors.profileLink.message}</p>
          )}
        </div>
        <div className='col-lg-4 mb-4 '>
          <label className='block text-sm font-medium mb-1 '>
            Dr Prescription
          </label>
          <div className='relative'>

            {mode === "view" ?
              (
                data.drPrescription ?  <img src={`${HOSTNAME}${data.drPrescription}`} /> : null 
              )
              :
              <input
                onChange={(e) => handleFile(e, "file")}
                type="file"
                className={`border p-[5px] focus:outline-blue-500 rounded-sm w-full  `}
              />
            }

          </div>
        </div>
        <div className='col-lg-4 mb-4 '>
          <label className='block text-sm font-medium mb-1 '>
            Medical Reports
          </label>
          <div className='relative'>
            {mode === "view" ?
              (
                data.medicalReports ?  <img src={`${HOSTNAME}${data.medicalReports[0]}`} /> :  null 
              )
              :

              <input
                onChange={(e) => handleFile(e, "report")}
                type="file"
                className={`border p-[5px] focus:outline-blue-500 rounded-sm w-full`}
              />
            }
          </div>
        </div>
        <div className="flex justify-between">
          <h2 className='mb-3 font-medium'>Family Diseases</h2>
          {mode !== "view" &&
            <button type="button" onClick={() => append({ description: "" })} className='p-2 mb-3 flex items-center bg-red-500 hover:bg-green-600 text-white'>
              Add <BsPlusCircle className='ml-2' />
            </button>
          }
        </div>
        <div className='col-lg-12 mb-4 border '>
          <div className='row p-2 '>
            {
              fields.map((item, index) => (
                <>
                  <div className='col-lg-4 relative'>
                    <div className=' mt-2 mb-2'>
                      <div className="flex items-center">
                        {mode === "view" ?
                          (
                            <p>{watch(`familyDiseases[${index}].description`)}</p>
                          )
                          :
                          <>
                            <input
                              name={`familyDiseases[${index}].description`}
                              {...register(`familyDiseases[${index}].description`)}
                              autoComplete='off'
                              className={`border p-2  focus:outline-blue-500 rounded-sm  ${errors.familyDiseases?.[index]?.description && 'border-red-400'
                                }`}
                              id='name'
                              placeholder='Disease Name'
                            />
                            <div>
                              {index > 0 &&
                                <button onClick={() => remove(index)} className='p-2 ml-2  h-[10] bg-red-500 hover:bg-green-600 text-white'>
                                  <MdDelete />
                                </button>
                              }

                            </div>
                          </>
                        }
                      </div>
                      <span
                        hidden={watch(`familyDiseases[${index}].description`)}
                        className='absolute text-red-400 text-lg font-medium  top-4 left-[140px]'
                      >
                        *
                      </span>

                      {errors.familyDiseases?.[index]?.description && (
                        <p className='text-sm text-red-500'>{errors.familyDiseases?.[index]?.description.message}</p>
                      )}

                    </div>
                  </div>

                </>


              ))}

          </div>
        </div>

      </div>
      {/* </form> */}
    </div>
  );
};

export default Schedule;
