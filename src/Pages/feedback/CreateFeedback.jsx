import React, { useState } from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { callApi } from '../../utils/CallApi';
const schema = yup.object({
    name: yup.string().required("User Name is Required"),
    email: yup.string().email("Invalid email").required("Email is Required"),
    desc: yup.string().required(" Feedback is Required"),
   

});

const CreateFeedback = () => {

    const [file, setFile] = useState('')

    const { register, watch, reset, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });



    const onSubmit = async (data) => {
        try {
            let formdata = new FormData()
            formdata.append('feedbackimg', file);
            formdata.append('request', JSON.stringify({
                userEmail: data.email,
                feedbackDescription: data.desc,
                userName : data.name,
            }));
            const res = await callApi("/feedbacks/createFeedback", "post", formdata)
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
                        <header className="py-4">
                            <h2 className="font-semibold text-slate-800">Add new Ticker</h2>
                        </header>
                    </div>

                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">User Name</label>
                        <div className='absolute right-5 top-10'>
                            {!errors.name && watch("name") ? <FcCheckmark /> : errors.name ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('name')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.name && "border-red-400" }`}
                            name='name' id="name"
                            type="text"
                            placeholder="User Name"

                        />
                        <span hidden={watch("name")} className='absolute text-red-400 text-lg font-medium  top-9 left-[125px]'>*</span>

                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name.message}</p>
                        )}
                    </div>

                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.email && watch("email") ? <FcCheckmark /> : errors.email ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('email')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.email && "border-red-400" }`}
                            name='email' id="email"
                            type="text"
                            placeholder="AUTHOR NAME"

                        />
                        <span hidden={watch("email")} className='absolute text-red-400 text-lg font-medium  top-9 left-[145px]'>*</span>

                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>



                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="secondFname">Image </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.logo && watch('logo') ? <FcCheckmark /> : errors.logo ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input

                            onChange={(e) => setFile(e.target.files[0])}
                            type="file"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full h-[42px]  ${errors.logo && 'border-red-500'}`}
                            name='logo' id="logo"
                        />
                        <small className='text-red-500'>only png, svg images can be added</small>
                        


                
                    </div>

                    <div className='col-lg-12 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="desc">Your Feedback</label>
                        <div className='absolute right-5 top-10'>
                            {!errors.desc && watch("desc") ? <FcCheckmark /> : errors.desc ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <textarea
                            {...register('desc')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.desc && "border-red-400" }`}
                            name='desc' id="desc"
                            placeholder="Your Feedback"
                            />


                        <span hidden={watch("desc")} className='absolute text-red-400 text-lg font-medium  top-9 left-[145px]'>*</span>

                        {errors.desc && (
                            <p className="text-red-500 text-sm">{errors.desc.message}</p>
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

export default CreateFeedback