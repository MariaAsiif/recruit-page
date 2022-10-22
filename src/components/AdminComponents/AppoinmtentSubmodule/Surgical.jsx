import React from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { MdClose, MdDelete } from 'react-icons/md'
import { useFieldArray } from "react-hook-form";
import { BsFillPlusCircleFill } from 'react-icons/bs';

let renderCount = 1;
export default function Surgical({ control, register, setValue, watch, getValues, errors }) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "test"
    });

    renderCount++;

    return (
        <div>
            <div className='flex'>
                <div className='flex items-center justify-between col-lg-12 '>
                    <h2 className='text-[18px] font-medium'>Surgical History</h2>
                    <button onClick={() => {
                        append({ name: "test", past: " " });
                    }} className='flex items-center p-2 text-white bg-red-500 hover:bg-green-600'>
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
                                {!errors.name && watch('name') ? (
                                    <FcCheckmark />
                                ) : errors.name ? (
                                    <div className='text-red-500 '>
                                        <MdClose />
                                    </div>
                                ) : null}
                            </div>
                            {/* <input
                    {...register('name')}
                    autoComplete='off'
                    className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.name && 'border-red-400'
                      }`}
                    name='name'
                    id='name'
                    type='text'
                    placeholder='Operational Name'
                  /> */}

                            <input
                                name={`test[${index}].name`}
                                {...register('name')}
                                defaultValue={item.name}
                            />
                            <span
                                hidden={watch('name')}
                                className='absolute text-red-400 text-lg font-medium  top-9 left-[170px]'
                            >
                                *
                            </span>

                            {errors.name && (
                                <p className='text-sm text-red-500'>{errors.name.message}</p>
                            )}
                        </div>

                        <div className='relative mb-4 col-lg-4'>
                            <label className='block mb-1 text-sm font-medium' htmlFor='name'>
                                Past Operations
                            </label>

                            <div className='absolute right-5 top-10'>
                                {!errors.past && watch('past') ? (
                                    <FcCheckmark />
                                ) : errors.past ? (
                                    <div className='text-red-500 '>
                                        <MdClose />
                                    </div>
                                ) : null}
                            </div>
                            <input
                                name={`test[${index}].past`}
                                {...register('past')}
                                defaultValue={item.past}
                            />
                            <span
                                hidden={watch('past')}
                                className='absolute text-red-400 text-lg font-medium  top-9 left-[170px]'
                            >
                                *
                            </span>

                            {errors.name && (
                                <p className='text-sm text-red-500'>{errors.name.message}</p>
                            )}



                        </div>

                        <div className='mb-4 col-lg-4 '>
                            <label className='block mb-1 text-sm font-medium '>
                                Operation Date
                            </label>
                            <div className='relative flex items-center'>
                                {/* <DatePicker
                                    value={quoteDate}
                                    name='quoteDate'
                                    onChange={(date) => setquoteDate(date)}
                                    renderInput={renderCustomInput} // render a custom input
                                    shouldHighlightWeekends
                                    calendarPopperPosition='bottom'
                                /> */}
                                <button className='p-2 ml-2 text-white bg-red-500 hover:bg-green-600'>
                                    <MdDelete />
                                </button>
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}
