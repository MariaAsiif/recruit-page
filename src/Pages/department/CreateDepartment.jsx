import React from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { MdClose } from 'react-icons/md';
import { ToastContainer } from 'react-toastify';
import { useForm, } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from "react-router-dom"
const schema = yup.object({
    name: yup.string().required("Department Name is Required"),
    head: yup.string().required("Head of Department is Required"),
    added: yup.string().required("Add By Department is Required"),
    desc: yup.string().required("Description is Required"),

});

const CreateDepartment = () => {


    const { register, watch, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });




    const onSubmit = async (data) => {
        console.log("Data", data)
        try {
          
            

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
                                    <Link to="/department" className="text-slate-500 hover:text-indigo-500" >Department </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/department/create-department" className="text-slate-500 hover:text-indigo-500" href="#0">Create department</Link>
                                </li>
                            </ul>
                        </div>
                        <header className="py-4">
                            <h2 className="font-semibold text-slate-800">Add new Departmant</h2>
                        </header>
                    </div>

                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">Department Name </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.name && watch("name") ? <FcCheckmark /> : errors.name ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('name')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.name && "border-red-400" }`}
                            name='name' id="name"
                            type="text"
                            placeholder="DEPATMENT NAME"

                        />
                        <span hidden={watch("name")} className='absolute text-red-400 text-lg font-medium  top-9 left-[175px]'>*</span>

                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name.message}</p>
                        )}
                    </div>

                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="head">Head of Department </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.head && watch('head') ? <FcCheckmark /> : errors.head ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('head')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.head && 'border-red-500'}`}
                            name='head' id="head"
                            placeholder="Head of Department"

                            type="text" />
                        <span hidden={watch("head")} className='absolute text-red-400 text-lg font-medium  top-9 left-[195px]'>*</span>


                        {errors.head && (
                            <p className="text-red-500 text-sm">{errors.head.message}</p>
                        )}
                    </div>

                    <div className='col-lg-4 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="head">Added By </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.added && watch('added') ? <FcCheckmark /> : errors.added ? <div className=' text-red-500 mr-5'><MdClose /></div> : null}
                        </div>
                        <select 
                            name="added"
                            {...register('added')}
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.added && 'border-red-500'}`}
                        >
                            <option value=""> Select Added By</option>
                            <option>Super Admin</option>
                            <option>Admin</option>
                        </select>


                        {errors.added && (
                            <p className="text-red-500 text-sm">{errors.added.message}</p>
                        )}
                    </div>

                    <div className='col-lg-12 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="desc">Description  </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.desc && watch('desc') ? <FcCheckmark /> : errors.desc ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <textarea
                            {...register('desc')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.desc && 'border-red-500'}`}
                            name='desc' id="desc"
                            placeholder="Description"
                            cols="20"
                        ></textarea>
                        {/* <span hidden={watch('desc')} className='absolute text-red-400 text-sm font-medium  top-9 left-[170px]'>(optional)</span> */}

                        {errors.desc && (
                            <p className="text-red-500 text-sm">{errors.desc.message}</p>
                        )}
                    </div>

                    <div className='col-lg-12'>
                        <button className="p-2 bg-red-500 hover:bg-green-600 text-white" >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateDepartment