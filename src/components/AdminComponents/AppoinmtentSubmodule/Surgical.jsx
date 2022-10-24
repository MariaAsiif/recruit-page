import React, { useState } from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { MdClose, MdDelete } from 'react-icons/md'
import { useFieldArray } from "react-hook-form";
import { BsFillPlusCircleFill } from 'react-icons/bs';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { useEffect } from 'react';
export default function Surgical({ control, register, watch, errors, setDates }) {


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    // const [quoteDate, setquoteDate] = useState({
    //     day: dd,
    //     month: mm,
    //     year: yyyy,
    // });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "operationType"
    });




    const [dynamic, setDynamic] = useState([{
        day: dd,
        month: mm,
        year: yyyy,
    },])


    const handleChangeDate = (date, index) => {

        const newdynamic = [...dynamic]
        newdynamic[index] = date
        setDynamic(newdynamic)
    }

    const addMore = () => {
        setDynamic([...dynamic, {
            day: dd,
            month: mm,
            year: yyyy,
        }])
    }



    const renderCustomInput = ({ ref }, index) => (
        <div className='relative w-full cursor-pointe'>
            <input
                readOnly
                ref={ref}
                value={
                    dynamic
                        ? `${dynamic[index].year}/${dynamic[index].month}/${dynamic[index].day}`
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



   

    useEffect(() => {
        setDates(dynamic)
    },[dynamic])



    return (
        <div className='row'>
            <div className='flex'>
                <div className='flex items-center justify-between col-lg-12 '>
                    <h2 className='text-[18px] font-medium'>Surgical History</h2>
                    <button type='button' onClick={() => {
                        return append({ name: "", past: "", date: "" }),
                            addMore()

                    }
                    } className='flex items-center p-2 text-white bg-red-500 hover:bg-green-600'>
                        Add <BsFillPlusCircleFill className='ml-2' />
                    </button>
                </div>
            </div>

            {
                fields.map((item, index) => (
                    <>

                        <div className='relative mb-4 col-lg-4'>
                            <label className='block mb-1 text-sm font-medium' htmlFor='name'>
                                Operation Name{' '}
                            </label>
                            <div className='absolute right-5 top-10'>
                                {!errors.operationType?.[index]?.operationName && watch(`operationType[${index}].operationName`) ? (
                                    <FcCheckmark />
                                ) : errors.operationType?.[index]?.operationName ? (
                                    <div className='text-red-500 '>
                                        <MdClose />
                                    </div>
                                ) : null}
                            </div>
                            <input
                                name={`operationType[${index}].operationName`}
                                {...register(`operationType[${index}].operationName`)}
                                autoComplete='off'
                                className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.operationType?.[index]?.operationName && 'border-red-400'
                                    }`}
                                id='name'
                                placeholder='Operational Name'
                            />


                            <span
                                hidden={watch(`operationType[${index}].operationName`)}
                                className='absolute text-red-400 text-lg font-medium  top-9 left-[170px]'
                            >
                                *
                            </span>

                            {errors.operationType?.[index]?.operationName && (
                                <p className='text-sm text-red-500'>{errors.operationType?.[index]?.operationName.message}</p>
                            )}
                        </div>

                        <div className='relative mb-4 col-lg-4'>
                            <label className='block mb-1 text-sm font-medium' htmlFor='name'>
                                Past Operations
                            </label>

                            <div className='absolute right-5 top-10'>
                                {!errors.operationType?.[index]?.operationResult && watch(`operationType[${index}].operationResult`) ? (
                                    <FcCheckmark />
                                ) : errors.operationType?.[index]?.operationResult ? (
                                    <div className='text-red-500 '>
                                        <MdClose />
                                    </div>
                                ) : null}
                            </div>
                            <input
                                name={`operationType[${index}].operationResult`}
                                {...register(`operationType[${index}].operationResult`)}
                                autoComplete='off'
                                className={`border p-2 focus:outline-blue-500 rounded-sm w-full   ${errors.operationType?.[index]?.operationResult && 'border-red-400'
                                    }`}
                                id='name'
                                placeholder='Past Operational'
                            />


                            <span
                                hidden={watch(`operationType[${index}].operationResult`)}
                                className='absolute text-red-400 text-lg font-medium  top-9 left-[170px]'
                            >
                                *
                            </span>
                            {errors.operationType?.[index]?.operationResult &&
                                <p className='text-sm text-red-500'>{errors.operationType?.[index]?.operationResult.message}</p>
                            }
                            {/* {errors.items?.[index]?.operationResult && (
                    <p className='text-sm text-red-500'>{errors.items?.[index]?.operationResult.message}</p>
                  )} */}



                        </div>

                        <div className='mb-4 col-lg-4 '>
                            <label className='block mb-1 text-sm font-medium '>
                                Operation Date
                            </label>
                            <div className='relative flex items-center'>
                                <DatePicker
                                    value={dynamic[index]}
                                    name='dynamic'
                                    onChange={(date) => handleChangeDate(date , index )}
                                    renderInput={(ref) => renderCustomInput(ref, index)} // render a custom input
                                    shouldHighlightWeekends
                                    calendarPopperPosition='bottom'
                                />
                                {
                                    index > 0 &&
                                    <button onClick={() => remove(index)} className='p-2 ml-2 text-white bg-red-500 hover:bg-green-600'>
                                        <MdDelete />
                                    </button>
                                }
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}
