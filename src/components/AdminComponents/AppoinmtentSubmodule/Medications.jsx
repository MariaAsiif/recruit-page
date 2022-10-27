import React, { useState } from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { FcCheckmark } from 'react-icons/fc';
import { MdClose, MdDelete } from 'react-icons/md';
import { Controller, useFieldArray } from "react-hook-form";
import { callApi, HOSTNAME } from '../../../utils/CallApi';
import { toast } from 'react-toastify';

const Medications = ({ control, register, watch, errors, setImageFile, imagefile, mode, data }) => {

    const { fields, append, remove } = useFieldArray({
        control,
        name: "medicationsSuppliments"
    });

    // const [toggle, setToggle] = useState([{
    //     takingNow: true,
    //     isSurgeyDone: true
    // }])



    // const handleChange = (e, index) => {
    //     const { checked, name } = e.target
    //     const t = [...toggle]
    //     t[index][name] = checked
    //     setToggle(t)
    // }

    const addMore = () => {
        setImageFile([...imagefile, ""])
    }

    const handleFile = async (e, index) => {
        try {
            let file = e.target.files[0]
            let formData = new FormData();
            formData.append('prescription', file)
            let res = await callApi('/appointmentrequests/uploadMedicinePrescription', "post", formData)
            if (res.status === "Success") {
                console.log("Res", res)
                toast.success(res.message);
                for (let i = 0; i < imagefile.length; i++) {
                    const el = imagefile[i]
                    let d = el = res?.data
                    setImageFile(d)
                }
            }
            else {
                toast.error(res.message);

            }
        }
        catch (err) {

        }
    }





    return (
        <div className='row'>
            {mode !== "view" &&
                <div className='flex'>
                    <div className='flex items-center justify-between col-lg-12 '>
                        <h2 className='text-[18px] font-medium'>Medications Suppliments</h2>
                        <button
                            type='button'
                            onClick={() => { return append({ medicine: "", dosage: "", takingNow: true, isSurgeyDone: true, timesOfMedicine: "", prescriptionFile: "" }), addMore() }}
                            className='flex items-center p-2 text-white bg-red-500 hover:bg-green-600'>
                            Add <BsFillPlusCircleFill className='ml-2' />
                        </button>
                    </div>
                </div>
            }

            {
                fields.map((item, index) => (
                    console.log("itm", item),
                    <>

                        <div className='relative mb-4 col-lg-4'>
                            <label className='block mb-1 text-sm font-medium' htmlFor='name'>
                                Medicine{' '}
                            </label>
                            <div className='absolute right-5 top-10'>
                                {!errors.medicationsSuppliments?.[index]?.medicine && watch(`medicationsSuppliments[${index}].medicine`) ? (
                                    <FcCheckmark />
                                ) : errors.medicationsSuppliments?.[index]?.medicine ? (
                                    <div className='text-red-500 '>
                                        <MdClose />
                                    </div>
                                ) : null}
                            </div>
                            {/* <input
                                {...register('me')}
                                autoComplete='off'
                                className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.name && 'border-red-400'
                                    }`}
                                name='name'
                                id='name'
                                type='text'
                                placeholder='Medicine'
                            /> */}
                            {mode === "view" ?
                                (
                                    <p>{watch(`medicationsSuppliments[${index}].medicine`)}</p>
                                )
                                :
                                <>
                                    <input
                                        name={`medicationsSuppliments[${index}].medicine`}
                                        {...register(`medicationsSuppliments[${index}].medicine`)}
                                        autoComplete='off'
                                        className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.medicationsSuppliments?.[index]?.medicine && 'border-red-400'
                                            }`}
                                        id='name'
                                        placeholder='Medicine'
                                    />

                                    <span
                                        hidden={watch(`medicationsSuppliments[${index}].medicine`)}
                                        className='absolute text-red-400 text-lg font-medium  top-9 left-[95px]'
                                    >
                                        *
                                    </span>
                                </>
                            }

                            {errors.medicationsSuppliments?.[index]?.medicine && (
                                <p className='text-sm text-red-500'>{errors.medicationsSuppliments?.[index]?.medicine.message}</p>
                            )}
                        </div>

                        <div className='relative mb-4 col-lg-4'>
                            <label className='block mb-1 text-sm font-medium' htmlFor='name'>
                                Dosage
                            </label>
                            {mode === "view" &&
                                <div className='absolute right-5 top-10'>
                                    {!errors.medicationsSuppliments?.[index]?.dosage && watch('dosage') ? (
                                        <FcCheckmark />
                                    ) : errors.medicationsSuppliments?.[index]?.dosage ? (
                                        <div className='text-red-500 '>
                                            <MdClose />
                                        </div>
                                    ) : null}
                                </div>
                            }

                            {mode === "view" ?
                                (
                                    <p>{watch(`medicationsSuppliments[${index}].dosage`)}</p>
                                )
                                :
                                <>
                                    <input
                                        name={`medicationsSuppliments[${index}].dosage`}
                                        {...register(`medicationsSuppliments[${index}].dosage`)}
                                        autoComplete='off'
                                        className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.medicationsSuppliments?.[index]?.dosage && 'border-red-400'
                                            }`}
                                        id='dosage'
                                        type='text'
                                        placeholder='Dosage'
                                    />
                                    <span
                                        hidden={watch(`medicationsSuppliments[${index}].dosage`)}
                                        className='absolute text-red-400 text-lg font-medium  top-9 left-[95px]'
                                    >
                                        *
                                    </span>
                                </>
                            }

                            {errors.medicationsSuppliments?.[index]?.dosage && (
                                <p className='text-sm text-red-500'>{errors.medicationsSuppliments?.[index]?.dosage.message}</p>
                            )}
                        </div>

                        <div className='relative mb-4 col-lg-2'>
                            <div>
                                <div className='mb-3 text-sm font-semibold text-slate-800'>
                                    Taking Now
                                </div>
                                <div className='flex items-center'>

                                    {/* <label for={`${index}default-toggles`} class="inline-flex relative items-center cursor-pointer">
                                        <input
                                            name={`takingNow`}
                                            checked={toggle[index]?.takingNow}
                                            onChange={(e) => handleChange(e, index)}

                                            type="checkbox"
                                            id={`${index}default-toggles`}
                                            className={`sr-only peer 
                                                }`}
                                        />



                                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <div className='ml-2 text-sm italic text-slate-400'>
                                            {toggle[index]?.takingNow ? 'True' : 'False'}
                                        </div>
                                    </label> */}

                                    <label for={`${index}default-toggles`} className="inline-flex relative items-center cursor-pointer">

                                        <input type="checkbox"
                                            {...register(`medicationsSuppliments[${index}].takingNow`)}
                                            id={`${index}default-toggles`}
                                            disabled={mode === "view" ? true : false}
                                            class="sr-only peer"
                                        />
                                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <div className='text-sm text-slate-400 italic ml-2'>
                                            {watch(`medicationsSuppliments[${index}].takingNow`) ? 'True' : 'False'}
                                        </div>
                                    </label>



                                </div>
                            </div>
                        </div>

                        <div className='relative mb-4 col-lg-2'>
                            <div>
                                <div className='mb-3 text-sm font-semibold text-slate-800'>
                                    Is Surgey Done
                                </div>
                                <div className='flex items-center'>

                                    {/* <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                                        <input
                                            name="isSurgeyDone"
                                            checked={toggle[index]?.isSurgeyDone}
                                            onChange={(e) => handleChange(e, index)}
                                            type="checkbox"
                                            id="default-toggle"
                                            className={`sr-only peer 
                                                }`}
                                        />


                                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <div className='ml-2 text-sm italic text-slate-400'>
                                            {toggle[index]?.isSurgeyDone ? 'True' : 'False'}
                                        </div>
                                    </label> */}
                                    <label for={`${index}default-toggle`} className="inline-flex relative items-center cursor-pointer">
                                        <input type="checkbox"
                                            {...register(`medicationsSuppliments[${index}].isSurgeyDone`)}
                                            id={`${index}default-toggle`}
                                            class="sr-only peer"
                                            disabled={mode === "view" ? true : false}

                                        />
                                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        <div className='text-sm text-slate-400 italic ml-2'>
                                            {watch(`medicationsSuppliments[${index}].isSurgeyDone`) ? 'True' : 'False'}
                                        </div>
                                    </label>


                                </div>
                            </div>
                        </div>

                        <div className='relative mb-4 col-lg-6'>
                            <label className='block mb-1 text-sm font-medium' htmlFor='name'>
                                Times Of Medicine
                            </label>
                            {mode === "view" &&
                                <div className='absolute right-5 top-10'>
                                    {!errors.medicationsSuppliments?.[index]?.timesOfMedicine && watch(`medicationsSuppliments[${index}].timesOfMedicine`) ? (
                                        <FcCheckmark />
                                    ) : errors.medicationsSuppliments?.[index]?.timesOfMedicine ? (
                                        <div className='text-red-500 '>
                                            <MdClose />
                                        </div>
                                    ) : null}
                                </div>
                            }
                            {
                                mode === "view" ?
                                    (
                                        <p>{watch(`medicationsSuppliments[${index}].timesOfMedicine`)}</p>
                                    )
                                    :

                                    <input
                                        {...register(`medicationsSuppliments[${index}].timesOfMedicine`)}
                                        autoComplete='off'
                                        className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.medicationsSuppliments?.[index]?.timesOfMedicine && 'border-red-400'
                                            }`}
                                        name={`medicationsSuppliments[${index}].timesOfMedicine`}
                                        id='name'
                                        type='text'
                                        placeholder='timesOfMedicine'
                                    />
                            }

                            {errors.medicationsSuppliments?.[index]?.timesOfMedicine && (
                                <p className='text-sm text-red-500'>{errors.medicationsSuppliments?.[index]?.timesOfMedicine.message}</p>
                            )}
                        </div>

                        <div className='relative mb-4 col-lg-6'>
                            <label className='block mb-1 text-sm font-medium' htmlFor='name'>
                                Prescription File
                            </label>
                            <div className='relative flex items-center'>
                                {
                                    mode === "view" ?
                                        (
                                            <img src={`${HOSTNAME}${data?.prescriptionFile}`} />
                                        )
                                        :
                                        <>
                                            <input
                                                type="file"
                                                onChange={(e) => handleFile(e , index )}
                                                className={`border p-[5px] focus:outline-blue-500 rounded-sm w-full  `}
                                            />
                                            {index > 0 &&
                                                <button onClick={() => remove(index)} className='p-2 ml-2 text-white bg-red-500 hover:bg-green-600'>
                                                    <MdDelete />
                                                </button>
                                            }
                                        </>
                                }
                            </div>
                        </div>
                    </>
                ))
            }

        </div >
    )
}

export default Medications