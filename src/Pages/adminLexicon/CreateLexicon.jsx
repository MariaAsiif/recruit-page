import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { MdClose } from 'react-icons/md'
import { FcCheckmark } from 'react-icons/fc'
import { toast, ToastContainer } from 'react-toastify';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { callApi } from '../../utils/CallApi';

const schema = yup.object({
    name: yup.string().required("Decription is Required"),
    heading: yup.string().required("Decription is Required")


});



const CreateLexicon = () => {

    const { register, watch, reset, control, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });
    
    
    
const onSubmit = async (data) => {
    try {
        let payload = {
            lexiconName: data.heading,
            description: data.name

        }
        const res = await callApi("/lexicons/createLexicon", "post", payload)
        if (res.status === "Success") {
            toast.success(res.message);
            reset()
        }
        else {
            toast.error(res.message);

        }

    } catch (error) {
        console.log(error);
    }
}

    
    
    
    return (
        <div className='bscontainer-fluid'>
            <ToastContainer
                position="top-right"
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

                    <div className='col-12 mb-6'>
                        <div className='mb-3'>
                            <ul className="inline-flex flex-wrap text-sm font-medium">
                                <li className="flex items-center">
                                    <Link to="/admindashboard" className="text-slate-500 hover:text-indigo-500" >Dashboard </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/lexicons" className="text-slate-500 hover:text-indigo-500" >Lexicon </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    Create Lexicon
                                </li>
                            </ul>
                        </div>
                        <header className="py-4">
                            <h2 className="font-semibold text-slate-800">Add new Lexicon</h2>
                        </header>
                    </div>
                    <div className='col-lg-12 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">Heading</label>
                        <div className='absolute right-5 top-10'>
                            {!errors.heading && watch("heading") ? <FcCheckmark /> : errors.heading ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <textarea
                            {...register('heading')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.name && "border-red-400"}`}
                            name='heading' id="heading"
                            type="text"
                            placeholder="Heading"

                        ></textarea>
                        <span hidden={watch("heading")} className='absolute text-red-400 text-lg font-medium  top-9 left-[110px]'>*</span>

                        {errors.heading && (
                            <p className="text-red-500 text-sm">{errors.heading.message}</p>
                        )}


                    </div>




                    <div className='col-lg-12 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">Description</label>
                        <div className='absolute right-5 top-10'>
                            {!errors.name && watch("name") ? <FcCheckmark /> : errors.name ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <textarea
                            {...register('name')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.name && "border-red-400"}`}
                            name='name' id="name"
                            type="text"
                            placeholder=" Description"

                        ></textarea>
                        <span hidden={watch("name")} className='absolute text-red-400 text-lg font-medium  top-9 left-[120px]'>*</span>

                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name.message}</p>
                        )}


                    </div>

                    <div className='col-lg-12'>
                        <button className="p-2 bg-red-500 hover:bg-green-600 text-white" >Submit</button>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default CreateLexicon