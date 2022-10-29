import React, { useEffect, useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { MdClose, MdDelete } from 'react-icons/md';
// import { toast, ToastContainer } from 'react-toastify';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { callApi } from '../../../utils/CallApi';
import { useFieldArray } from "react-hook-form";
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
// import moment from 'moment';
// import { Link } from 'react-router-dom';
import { BsFillPlusCircleFill } from 'react-icons/bs'
// import { MdDelete } from 'react-icons/md'
const schema = yup.object({
  noOfChildrens: yup.string().required(),
  sexualOrientation: yup.string().required(),
  maritalStatus: yup.string().required(),
  deliveryMethod: yup.string().required(),
  addictions: yup
    .array()
    .of(
      yup.object({
        addictionName: yup.string().required(),
        howLongUsed: yup.string().required(),
        description: yup.string().required(),
        lastTimeUsed: yup.string().required(),
      })
    )
    .required(),
});

const SocialHistory = ({ control, register, watch, errors, mode, data, setStartDate }) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  const [quoteDate, setquoteDate] = useState({
    day: dd,
    month: mm,
    year: yyyy,
  });
  const [startDate, setStart] = useState([{
    day: dd,
    month: mm,
    year: yyyy,
  },])

  const [endDate, setEnd] = useState([{
    day: dd,
    month: mm,
    year: yyyy,
  },])
  const [hurt, setHurt] = useState(true);
  const [carrier, setcarrier] = useState(true);
  const [excise, setexcise] = useState(true);
  const [pregnet, setpregnet] = useState(true);
  const [feeding, setfeeding] = useState(true);
  const [injury, setinjury] = useState(true);

  let defaultValue = { addictionName: "", everUsed: "", howLongUsed: "", whenStarted: "", whenQuited: "", description: "", lastTimeUsed: "" }

  const marital = ["single", "married", "partner", "widowed", "divorced"]
  const sex = ["hetrosexual", "homosexual", "bisexual", "transsexual"]

  // const {
  //   register,
  //   watch,
  //   reset,
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({ mode: 'onChange', resolver: yupResolver(schema), defaultValues: { addictions: [{ addictionName: "", everUsed: false, howLongUsed: "", whenStarted: "", whenQuited: "", description: "", lastTimeUsed: "" }] } });


  const { fields, append, remove } = useFieldArray({
    control,
    name: "addictions"
  });


  const handleChangeDate = (date, index) => {

    const newdynamic = [...startDate]
    newdynamic[index] = date
    setStart(newdynamic)
  }

  const handleChangeDateEnd = (date, index) => {

    const newdynamic = [...endDate]
    newdynamic[index] = date
    setEnd(newdynamic)
  }

  const addMore = () => {
    setStart([...startDate, {
      day: dd,
      month: mm,
      year: yyyy,
    }])

    setEnd([...endDate, {
      day: dd,
      month: mm,
      year: yyyy,
    }])
  }


  useEffect(() => {
    setStartDate({
      start: startDate,
      end: endDate,
      last: quoteDate
    })
  }, [startDate, endDate, quoteDate])

  // ****************** Datepicker Content ***********
  const renderCustomInputStart = ({ ref }, index) => (
    <div className='relative cursor-pointe w-full'>
      <input
        readOnly
        ref={ref} // necessary  placeholder="yyy-mm-dd"
        value={
          startDate
            ? `${startDate[index].year}/${startDate[index].month}/${startDate[index].day}`
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
  const renderCustomInputEnd = ({ ref }, index) => (
    <div className='relative cursor-pointe w-full'>
      <input
        readOnly
        ref={ref} // necessary  placeholder="yyy-mm-dd"
        value={
          endDate
            ? `${endDate[index].year}/${endDate[index].month}/${endDate[index].day}`
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




  // const onSubmit = async (values) => {
  //   // handleNext()
  //   let arr = []
  //   for (let index = 0; index < values.addictions.length; index++) {
  //     const element = values.addictions[index];
  //     const start = startDate[index]
  //     const end = startDate[index]
  //     let updatedStart = `${start.year}-${start.month}-${start.day}`;
  //     let updatedEnd = `${end.year}-${end.month}-${end.day}`;
  //     element.whenStarted = updatedStart
  //     element.whenQuited = updatedEnd
  //     arr.push(element)
  //   }

  //   let payload = {
  //     ...values,
  //     hurt,
  //     carrier,
  //     excise,
  //     pregnet,
  //     feeding,
  //     injury,
  //   }
  //   updateState(payload)
  //   handleNext()

  // };

  return (
    <div >
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <div className='row p-11'>

        <h2 className='font-medium text-[20px] pb-3'>Social History</h2>

        {mode !== "view" &&
          <div className='flex'>
            <div className='col-lg-12 flex items-center justify-between '>
              <h2 className='text-[18px] font-medium'>Addictions</h2>
              <button type="button" onClick={() => { return append(defaultValue), addMore() }} className='p-2 bg-red-500 hover:bg-green-600 text-white flex items-center'>
                Add <BsFillPlusCircleFill className='ml-2' />
              </button>
            </div>
          </div>
        }

        {
          fields.map((item, index) => (
            <>


              <div className='col-lg-4 mb-4 relative'>
                <label className='block text-sm font-medium mb-1' htmlFor='name'>
                  Addiction Name{' '}
                </label>
                {mode !== "view" &&
                  <div className='absolute right-5 top-10'>
                    {!errors.addictions?.[index]?.addictionName && watch(`addictions[${index}].addictionName`) ? (
                      <FcCheckmark />
                    ) : errors.addictions?.[index]?.addictionName ? (
                      <div className=' text-red-500'>
                        <MdClose />
                      </div>
                    ) : null}
                  </div>
                }
                {
                  mode === "view" ?
                    (
                      <p>{watch(`addictions[${index}].addictionName`)}</p>
                    )
                    :
                    <>
                      <input
                        name={`addictions[${index}].addictionName`}
                        {...register(`addictions[${index}].addictionName`)}
                        autoComplete='off'
                        className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.test?.[index]?.addictionName && 'border-red-400'
                          }`}
                        id='name'
                        type='text'
                        placeholder='Addiction Name'
                      />
                      <span
                        hidden={watch('name')}
                        className='absolute text-red-400 text-lg font-medium  top-9 left-[170px]'
                      >
                        *
                      </span>
                    </>
                }

                {errors.addictions?.[index]?.addictionName && (
                  <p className='text-red-500 text-sm'>{errors.addictions?.[index]?.addictionName.message}</p>
                )}
              </div>

              <div className='col-lg-4 mb-4 relative'>
                <label className='block text-sm font-medium mb-1' htmlFor='name'>
                  How Long Used
                </label>
                {mode === "view" &&
                  <div className='absolute right-5 top-10'>
                    {!errors.addictions?.[index]?.howLongUsed && watch('name') ? (
                      <FcCheckmark />
                    ) : errors.addictions?.[index]?.howLongUsed ? (
                      <div className=' text-red-500'>
                        <MdClose />
                      </div>
                    ) : null}
                  </div>
                }
                {
                  mode === "view" ?
                    (
                      <p>{watch(`addictions[${index}].howLongUsed`)}</p>
                    )
                    :
                    <>
                      <input
                        name={`addictions[${index}].howLongUsed`}
                        {...register(`addictions[${index}].howLongUsed`)}
                        autoComplete='off'
                        className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.addictions?.[index]?.howLongUsed && 'border-red-400'
                          }`}
                        id='name'
                        type='text'
                        placeholder='How long used'
                      />
                      <span
                        hidden={watch(`addictions[${index}].howLongUsed`)}
                        className='absolute text-red-400 text-lg font-medium  top-9 left-[170px]'
                      >
                        *
                      </span>
                    </>
                }

                {errors.addictions?.[index]?.howLongUsed && (
                  <p className='text-red-500 text-sm'>{errors.addictions?.[index]?.howLongUsed.message}</p>
                )}

              </div>

              <div className='col-lg-2 mb-4 relative'>
                <div>
                  <div className='text-sm text-slate-800 font-semibold mb-3'>
                    Ever Used
                  </div>
                  <div className='flex items-center'>

                    <label for="default-toggle" className="inline-flex relative items-center cursor-pointer">
                      <input type="checkbox"
                        {...register(`addictions[${index}].everUsed`)}
                        id="default-toggle"
                        disabled={mode === "view" ? true : false}
                        class="sr-only peer"
                      />
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      <div className='text-sm text-slate-400 italic ml-2'>
                        {watch(`addictions[${index}].everUsed`) ? 'True' : 'False'}
                      </div>
                    </label>



                  </div>
                </div>
              </div>
              <div className='col-lg-2'>

                {
                  index > 0 &&
                  <button onClick={() => remove(index)} className='p-2 ml-2 mt-5 text-white bg-red-500 hover:bg-green-600'>
                    <MdDelete />
                  </button>
                }
              </div>

              <div className='col-lg-4 mb-4 '>
                <label className='block text-sm font-medium mb-1 '>
                  When Started
                </label>
                {
                  mode === "view" ?
                    (<p>
                      {watch(`addictions[${index}].whenStarted`)}
                    </p>)
                    :
                    <div className='relative flex items-center'>
                      <DatePicker
                        value={startDate[index]}
                        name='quoteDate'
                        onChange={(date) => handleChangeDate(date, index)}
                        renderInput={(ref) => renderCustomInputStart(ref, index)} // render a custom input
                        shouldHighlightWeekends
                        calendarPopperPosition='bottom'
                      />

                    </div>
                }
              </div>

              <div className='col-lg-4 mb-4 '>
                <label className='block text-sm font-medium mb-1 '>
                  When Quited
                </label>
                {
                  mode === "view" ?
                    (<p>
                      {watch(`addictions[${index}].whenQuited`)}
                    </p>)
                    :
                    <div className='relative flex items-center'>
                      <DatePicker
                        value={endDate[index]}
                        name='quoteDate'
                        onChange={(date) => handleChangeDateEnd(date, index)}
                        renderInput={(ref) => renderCustomInputEnd(ref, index)} // render a custom input
                        shouldHighlightWeekends
                        calendarPopperPosition='bottom'
                      />
                      {/* <button className='p-2 ml-2 bg-red-500 hover:bg-green-600 text-white'>
                <MdDelete />
              </button> */}
                    </div>
                }
              </div>

              <div className='col-lg-4 mb-4 relative'>
                <label className='block text-sm font-medium mb-1' htmlFor='name'>
                  Last Time Used
                </label>
                {mode !== "view" &&
                  <div className='absolute right-5 top-10'>
                    {!errors.addictions?.[index]?.lastTimeUsed && watch('name') ? (
                      <FcCheckmark />
                    ) : errors.addictions?.[index]?.lastTimeUsed ? (
                      <div className=' text-red-500'>
                        <MdClose />
                      </div>
                    ) : null}

                  </div>
                }
                {
                  mode === "view" ?
                    (<p>
                      {watch(`addictions[${index}].lastTimeUsed`)}
                    </p>)
                    :
                    <>
                      <input
                        name={`addictions[${index}].lastTimeUsed`}
                        {...register(`addictions[${index}].lastTimeUsed`)}
                        autoComplete='off'
                        className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.addictions?.[index]?.lastTimeUsed && 'border-red-400'
                          }`}
                        id='name'
                        type='text'
                        placeholder='How long used'
                      />
                      <span
                        hidden={watch(`addictions[${index}].lastTimeUsed`)}
                        className='absolute text-red-400 text-lg font-medium  top-9 left-[170px]'
                      >
                        *
                      </span>
                    </>
                }

                {errors.addictions?.[index]?.lastTimeUsed && (
                  <p className='text-red-500 text-sm'>{errors.addictions?.[index]?.lastTimeUsed.message}</p>
                )}

              </div>

              <div className='col-lg-12 mb-4 relative'>
                <label className='block text-sm font-medium mb-1' htmlFor='name'>
                  Description
                </label>
                {mode !== "view" &&
                  <div className='absolute right-5 top-10'>
                    {!errors.addictions?.[index]?.description && watch(`addictions[${index}].description`) ? (
                      <FcCheckmark />
                    ) : errors.addictions?.[index]?.description ? (
                      <div className=' text-red-500'>
                        <MdClose />
                      </div>
                    ) : null}
                  </div>
                }
                {mode === "view" ? (
                  <p>{watch(`addictions[${index}].description`)}</p>
                )
                  :
                  <textarea
                    name={`addictions[${index}].description`}
                    {...register(`addictions[${index}].description`)}
                    autoComplete='off'
                    className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.addictions?.[index]?.description && 'border-red-400'
                      }`}
                    id='name'
                    placeholder='Description'
                  ></textarea>
                }


                {errors.addictions?.[index]?.description && (
                  <p className='text-red-500 text-sm'>{errors.addictions?.[index]?.description.message}</p>
                )}
              </div>
            </>
          ))
        }

        <hr className='mb-4' />

        <div className='col-lg-4 mb-4 relative'>
          <label className='block text-sm font-medium mb-1' htmlFor='name'>
            Marital Status
          </label>

          {
            mode === "view" ?
              (
                <p>{watch('maritalStatus')}</p>
              )
              :
              <select
                {...register('maritalStatus')}
                autoComplete='off'
                className={`border p-[10px] focus:outline-blue-500 rounded-sm w-full -mt-[1px]   ${errors.maritalStatus && 'border-red-400'
                  }`}
              >
                <option value="">Select Marital </option>
                {marital.map((m, i) => (
                  <option key={i} value={m}>{m}</option>
                ))}

              </select>
          }


        </div>
        <div className='col-lg-4 mb-4 relative'>
          <label className='block text-sm font-medium mb-1' htmlFor='name'>
            Sexual Orientation
          </label>
          {
            mode === "view" ?
              (
                <p>{watch('sexualOrientation')}</p>
              )
              :
              <select
                {...register('sexualOrientation')}
                autoComplete='off'

                className={`border p-[10px] focus:outline-blue-500 rounded-sm w-full -mt-[1px]   ${errors.sexualOrientation && 'border-red-400'
                  }`}
              >
                <option value="">Sexual Orientation</option>
                {sex.map((m, i) => (
                  <option key={i} value={m}>{m}</option>
                ))}
              </select>
          }


        </div>

        <div className='col-lg-2 mb-4 relative'>
          <div>
            <div className='text-sm text-slate-800 font-semibold mb-3'>
              Ever Hurt
            </div>
            <div className='flex items-center'>

              <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox"
                  checked={hurt}
                  onChange={() => setHurt(!hurt)}
                  disabled={mode === "view" ? true : false}
                  id="default-toggle"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <div className='text-sm text-slate-400 italic ml-2'>
                  {hurt ? 'True' : 'False'}
                </div>
              </label>



            </div>
          </div>
        </div>

        <div className='col-lg-2 mb-4 relative'>
          <div>
            <div className='text-sm text-slate-800 font-semibold mb-3'>
              Need Carrier
            </div>
            <div className='flex items-center'>

              <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox"
                  checked={carrier}
                  onChange={() => setcarrier(!carrier)}
                  id="default-toggle"
                  disabled={mode === "view" ? true : false}

                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <div className='text-sm text-slate-400 italic ml-2'>
                  {carrier ? 'True' : 'False'}
                </div>
              </label>



            </div>
          </div>
        </div>
        <div className='col-lg-2 mb-4 relative'>
          <div>
            <div className='text-sm text-slate-800 font-semibold mb-3'>
              Exercise
            </div>
            <div className='flex items-center'>

              <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox"
                  checked={excise}
                  onChange={() => setexcise(!excise)}
                  disabled={mode === "view" ? true : false}

                  id="default-toggle"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <div className='text-sm text-slate-400 italic ml-2'>
                  {excise ? 'True' : 'False'}
                </div>
              </label>



            </div>
          </div>
        </div>
        <div className='col-lg-2 mb-4 relative'>
          <div>
            <div className='text-sm text-slate-800 font-semibold mb-3'>
              Pregnant
            </div>
            <div className='flex items-center'>

              <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox"
                  checked={pregnet}
                  onChange={() => setpregnet(!pregnet)}
                  disabled={mode === "view" ? true : false}

                  id="default-toggle"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <div className='text-sm text-slate-400 italic ml-2'>
                  {pregnet ? 'True' : 'False'}
                </div>
              </label>



            </div>
          </div>
        </div>
        <div className='col-lg-2 mb-4 relative'>
          <div>
            <div className='text-sm text-slate-800 font-semibold mb-3'>
              Breast Feeding
            </div>
            <div className='flex items-center'>

              <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox"
                  checked={feeding}
                  onChange={() => setfeeding(!feeding)}
                  disabled={mode === "view" ? true : false}

                  id="default-toggle"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <div className='text-sm text-slate-400 italic ml-2'>
                  {feeding ? 'True' : 'False'}
                </div>
              </label>



            </div>
          </div>
        </div>
        <div className='col-lg-2 mb-4 relative'>
          <div>
            <div className='text-sm text-slate-800 font-semibold mb-3'>
              Delivery Injury
            </div>
            <div className='flex items-center'>

              <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                <input type="checkbox"
                  checked={injury}
                  onChange={() => setinjury(!injury)}
                  disabled={mode === "view" ? true : false}

                  id="default-toggle"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <div className='text-sm text-slate-400 italic ml-2'>
                  {injury ? 'True' : 'False'}
                </div>
              </label>



            </div>
          </div>
        </div>

        <div className='col-lg-4 mb-4 relative'>
          <label className='block text-sm font-medium mb-1' htmlFor='name'>
            No Of Childrens
          </label>
          {mode !== "view" &&
            <div className='absolute right-5 top-10'>
              {!errors.children && watch('children') ? (
                <FcCheckmark />
              ) : errors.children ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
          }
          {
            mode === "view" ?
              (<p>
                {watch('noOfChildrens')}
              </p>)
              :
              <input
                {...register('noOfChildrens')}
                autoComplete='off'
                className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.noOfChildrens && 'border-red-400'
                  }`}
                name='noOfChildrens'
                id='name'
                type='number'
                placeholder='no Of Childrens'
              />
          }


          {errors.noOfChildrens && (
            <p className='text-red-500 text-sm'>{errors.noOfChildrens.message}</p>
          )}
        </div>

        <div className='col-lg-6 mb-4 '>
          <label className='block text-sm font-medium mb-1 '>
            Last Menstrual Date
          </label>
          {
            mode === "view" ?
              (<p>
                {watch('lastMenstrualDate')}
              </p>)
              :

              <div className='relative flex items-center'>
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


        <div className='col-lg-6 mb-4 relative'>
          <label className='block text-sm font-medium mb-1' htmlFor='name'>
            Delivery Method
          </label>
          {
            mode !== "view" &&

            <div className='absolute right-5 top-10'>
              {!errors.deliveryMethod && watch('deliveryMethod') ? (
                <FcCheckmark />
              ) : errors.deliveryMethod ? (
                <div className=' text-red-500'>
                  <MdClose />
                </div>
              ) : null}
            </div>
          }
          {mode === "view" ?


            (<p>{watch('deliveryMethod')}</p>)
            :
            <input
              {...register('deliveryMethod')}
              autoComplete='off'
              className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.deliveryMethod && 'border-red-400'
                }`}
              name='deliveryMethod'
              id='name'
              type='text'
              placeholder=' Delivery Method'
            />
          }


          {errors.deliveryMethod && (
            <p className='text-red-500 text-sm'>{errors.deliveryMethod.message}</p>
          )}
        </div>



        {/* <div className='col-lg-12 flex justify-between'>
            <button onClick={(e) => handleBack(e)} className='p-2 bg-red-500 hover:bg-green-600 text-white'>
              Back
            </button>
            <button className='p-2 bg-red-500 hover:bg-green-600 text-white'>
              Next
            </button>
          </div> */}
      </div>
      {/* </form> */}
    </div>
  );
};

export default SocialHistory;
