import React, { useState } from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { callApi } from '../../utils/CallApi';
import { Link } from "react-router-dom"


const CreatePhoneBook = () => {

    const [companySetting, setCompanySetting] = useState(true)
    const [file, setFile] = useState('')

    const { register, watch, reset, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', });

console.log("file" , file )

    const onSubmit = async (data) => {
      

        let formData = new FormData();    

        formData.append('logoimg', file);   //append the values with key, value pair

        formData.append('request', JSON.stringify({
            businessPhoneBookText: data.businessPhoneBookText,
            "active": true
        }));

        console.log(formData);
        try {
            const res = await callApi("/phonebooks/createPhoneBook", "post", formData)
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
                                    <Link to="/dashboard" className="text-slate-500 hover:text-indigo-500" >Dashboard </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/phonebook" className="text-slate-500 hover:text-indigo-500" >Business Phone Books</Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/ticker/create-phonebook" className="text-slate-500 hover:text-indigo-500" href="#0">Create Business Phone Book</Link>
                                </li>
                            </ul>
                        </div>
                        <header className="py-4">
                            <h2 className="font-semibold text-slate-800">Add New Business Book</h2>
                        </header>
                    </div>

                    <div className='col-lg-6 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">Business Name</label>
                        <div className='absolute right-5 top-10'>
                            {!errors.name && watch("businessPhoneBookText") ? <FcCheckmark /> : errors.name ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('businessPhoneBookText', { required: true })} t className={`w-full form-input  ${errors.name ? "border-red-400" : "border-gray-400"}`} placeholder="Business Name" />
                        <span hidden={watch("businessPhoneBookText")} className='absolute text-red-400 text-lg font-medium  top-9 left-[155px]'>*</span>
                        {errors.businessPhoneBookText && (<p className="text-red-500 text-sm">This field is required</p>)}
                    </div>

                    <div className='col-lg-6 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="secondFname">logo </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.logoimg && watch('logoimg') ? <FcCheckmark /> : errors.logo ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input  type="file" className={`form-input w-full h-[42px`} onChange={(e) => setFile(e.target.files[0])} />
                        <small className='text-red-500'>only png, svg images can be added</small>
                    </div>
                    <div className='col-lg-12'>
                        <button className="btn bg-red-500 hover:bg-green-600 text-white" >Submit</button>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default CreatePhoneBook