import React from 'react'
import { useFieldArray } from 'react-hook-form';
import { BsPlusCircle } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md'

const Symptoms = ({ register, watch, errors, control , mode }) => {

    const { fields, append, remove } = useFieldArray({
        control,
        name: "symptoms"
    });

    return (
        <div>
            {mode !== "view" &&
                <div className="flex justify-between">
                    <h2 className='mb-3 font-medium'></h2>
                    <button type="button" onClick={() => append("")} className='p-2 mb-3 flex items-center bg-red-500 hover:bg-green-600 text-white'>
                        Add <BsPlusCircle className='ml-2' />
                    </button>
                </div>
            }
                    <h2 className='text-[20px] font-medium pb-3'>Symptoms</h2>

            <div className='col-lg-12 mb-4 border '>
                <div className='row p-2 '>
                    {
                        fields.map((item, index) => (
                            <>
                                <div className='col-lg-4 relative'>
                                    <div className=' mt-2 mb-2'>
                                        <div className="flex items-center">
                                            {mode === "view" ?
                                                (<p>{watch(`symptoms[${index}].name`)}</p>)
                                                :
                                                <>
                                                    <input
                                                        name={`symptoms[${index}].name`}
                                                        {...register(`symptoms[${index}].name`)}
                                                        autoComplete='off'
                                                        className={`border p-2  focus:outline-blue-500 rounded-sm  ${errors.symptoms?.[index]?.name && 'border-red-400'
                                                            }`}
                                                        id='name'
                                                        placeholder='Symptoms'
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
                                            hidden={watch(`symptoms[${index}].name`)}
                                            className='absolute text-red-400 text-lg font-medium  top-4 left-[110px]'
                                        >
                                            *
                                        </span>

                                        {errors.symptoms?.[index]?.name && (
                                            <p className='text-sm text-red-500'>{errors.symptoms?.[index]?.name.message}</p>
                                        )}

                                    </div>
                                </div>

                            </>


                        ))}

                </div>
            </div>
        </div>
    )
}

export default Symptoms