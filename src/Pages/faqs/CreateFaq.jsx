import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

const CreateFaq = () => {
    const useername = useSelector((state) => state.userAuth.userInfo.name);
    const { register, handleSubmit, formState: { errors } } = useForm();

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
                                    <Link to="/dashboard" className="text-slate-500 hover:text-indigo-500" >Dashboard </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/faq" className="text-slate-500 hover:text-indigo-500" >FAQS </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/faq/create-faq" className="text-slate-500 hover:text-indigo-500" href="#0">Create faqs</Link>
                                </li>
                            </ul>
                        </div>
                        <header className="py-4">
                            <h2 className="font-semibold text-slate-800">Add new FAQ</h2>
                        </header>
                    </div>
                    <div className='col-lg-10 mb-4'>
                        <label className="block text-sm font-medium mb-1"  >Section </label>
                        <select {...register('section', { required: true })} className={`border p-2 focus:outline-blue-500 w-full rounded-sm    ${errors.section ? "border-red-400" : "border-gray-400"} `} >
                            <option>Finance</option>
                            <option>Security</option>
                            <option>Ecommerce </option>
                        </select>
                    </div>
                    <div className='col-lg-10 mb-4'>
                        <label className="block text-sm font-medium mb-1"  >Question </label>
                        <textarea rows={4}{...register('question', { required: true })} className={`border p-2 focus:outline-blue-500 w-full rounded-sm    ${errors.question ? "border-red-400" : "border-gray-400"} `} />

                    </div>
                    <div className='col-lg-10 mb-4'>
                        <label className="block text-sm font-medium mb-1"  >Answer </label>
                        <textarea rows={4}{...register('answer', { required: true })} className={`border p-2 focus:outline-blue-500 w-full rounded-sm   ${errors.answer ? "border-red-400" : "border-gray-400"} `} />
                    </div>

                    <div className='col-lg-10 mb-4'>
                        <label className="block text-sm font-medium mb-1"  >Added by </label>
                        <select {...register('addedby', { required: true })} className={`border p-2 focus:outline-blue-500 w-full rounded-sm    ${errors.addedby ? "border-red-400" : "border-gray-400"} `} >
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

export default CreateFaq