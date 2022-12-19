import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

const CreatePolicy = () => {
    const useername = useSelector((state) => state.userAuth.userInfo.name);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [toggle1, setToggle1] = useState(true);
    const onSubmit = async (data) => {
        console.log("Data", data)
        // try {
        //     const config = {
        //         headers: {
        //             'Authorization': 'Bearer ' + token
        //         }
        //     };
        //     let response = await axios.post('http://localhost:5873/jobs/createjob', config);
        //     console.log(response);
        //     if (response.data.status === "Success") {
        //         navigate("/jobs", { replace: true });
        //         toast.success(response.data.message);

        //     }
        //     else {
        //         toast.error(response.data.message);
        //     }

        // } catch (error) {
        //     console.log(error);
        // }
    }
    return (
        <div className='bscontainer-fluid'>
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
                                    <Link to="/policy" className="text-slate-500 hover:text-indigo-500" >Policy </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/policy/create-policy" className="text-slate-500 hover:text-indigo-500" href="#0">Create policy</Link>
                                </li>
                            </ul>
                        </div>
                        <header className="py-4">
                            <h2 className="font-semibold text-slate-800">Add new Policy</h2>
                        </header>
                    </div>
                    <div className='col-lg-5 mb-4'>
                        <label className="block text-sm font-medium mb-1"  >Title </label>
                        <input {...register('title', { required: true })} placeholder="Title" className={`border p-[6px] focus:outline-blue-500 rounded-sm w-full    ${errors.title ? "border-red-400" : "border-gray-400"} `} />

                    </div>
                    <div className='col-lg-2 mb-4'>
                        <label className="block text-sm font-medium mb-1"  >Active/Deactive </label>

                        <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" value="" id="default-toggle" class="sr-only peer"/>
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">active</span>
                        </label>

                        {/* <div className="flex items-center">
                            <div className="form-switch">
                                <input type="checkbox" id="switch-1" checked className="sr-only" {...register('status')} />
                                <label className="bg-slate-400" htmlFor="switch-1">
                                    <span className="bg-white shadow-sm" aria-hidden="true"></span>
                                    <span className="sr-only">Switch label</span>
                                </label>
                            </div>

                        </div> */}
                    </div>
                    <div className='col-lg-10 mb-4'>
                        <label className="block text-sm font-medium mb-1"  >Description </label>
                        <textarea rows={4}{...register('description', { required: true })} placeholder="Description" className={`border p-2 focus:outline-blue-500 rounded-sm w-full    ${errors.description ? "border-red-400" : "border-gray-400"} `} />

                    </div>


                    <div className='col-lg-10 mb-4'>
                        <label className="block text-sm font-medium mb-1"  >Added by </label>
                        <select {...register('addedby', { required: true })} className={`border p-2 focus:outline-blue-500 rounded-sm w-full    ${errors.addedby ? "border-red-400" : "border-gray-400"} `} >
                            <option>{useername}</option>
                        </select>
                    </div>
                    <div className='col-lg-12'>
                        <button className="p-2 bg-red-500 hover:bg-green-600 text-white" >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreatePolicy