import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { callApi } from '../../utils/CallApi';

const schema = yup.object({
    industryName: yup.string().required(),
    industryType: yup.string().required(),
    description: yup.string().required(),
});
const CreateIndustry = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

    const onSubmit = async (data) => {
        try {
            let payload = {
                "industryName": data.industryName,
                "industryType": data.industryType,
                "description": data.description,
                "questions": [],

            }
            let response = await callApi('/industries/createIndustry', 'post', payload);
            if (response.status === "Success") {
                reset()
                toast.success(response.message);

            }
            else {
                toast.error(response.message);
            }

        } catch (error) {
            console.log(error);
        }
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
                                    <Link to="/industry" className="text-slate-500 hover:text-indigo-500" >Industry </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/industry/create-industry" className="text-slate-500 hover:text-indigo-500" href="#0">Create Industry</Link>
                                </li>
                            </ul>
                        </div>
                        <header className="py-4">
                            <h2 className="font-semibold text-slate-800">Add new Industry</h2>
                        </header>
                    </div>

                    <div className='col-lg-6 mb-4'>
                        <label className="block text-sm font-medium mb-1"  >Industry Name  </label>
                        <input {...register('industryName')} className={`border p-2 focus:outline-blue-500 w-full rounded-sm    ${errors.industryName ? "border-red-400" : "border-gray-400"} `} />
                        {errors.industryName && (
                            <p className='text-red-500 text-sm'>{errors.industryName.message}</p>
                        )}
                    </div>
                    <div className='col-lg-6 mb-4'>
                        <label className="block text-sm font-medium mb-1"  >Industry Type  </label>
                        <input {...register('industryType')} className={`border p-2 focus:outline-blue-500 w-full rounded-sm   ${errors.industryType ? "border-red-400" : "border-gray-400"} `} />

                        {errors.industryType && (
                            <p className='text-red-500 text-sm'>{errors.industryType.message}</p>
                        )}
                    </div>
                    <div className='col-lg-12 mb-4'>
                        <label className="block text-sm font-medium mb-1"  >Description </label>
                        <textarea row={4} {...register('description')} className={`border p-2 focus:outline-blue-500 w-full rounded-sm   ${errors.industryType ? "border-red-400" : "border-gray-400"} `} />

                        {errors.description && (
                            <p className='text-red-500 text-sm'>{errors.description.message}</p>
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

export default CreateIndustry