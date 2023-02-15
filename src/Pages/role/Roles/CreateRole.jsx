import React from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import { useForm, } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { callApi } from '../../../utils/CallApi';

const schema = yup.object({
    name: yup.string().required("Role Name is Required"),


});

let rolesList = [ 'subscriber', 'superadmin', 'jobapplicant', 'hr', 'interviewer', 'itsales', 'botonist', 'marketing', 'businessdevelopment', 'doctor', 'lawyer', 'chemist', 'pharmacist', 'vendor', 'agriculturescientist', 'customersupport', 'customer', 'individualtasker', 'companytasker']

const CreateRole = () => {

    const userId = useSelector((state) => state.userAuth.userInfo.userid);

    const { register, watch, reset, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


    const onSubmit = async (data) => {
        try {
            let payload = {
                roleName: data.name,
                addedby: userId

            }
            const res = await callApi("/roles/createRole", "post", payload)
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
                                    <Link to="/roles" className="text-slate-500 hover:text-indigo-500" >Role </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    Create Role
                                </li>
                            </ul>
                        </div>
                        <header className="py-4">
                            <h2 className="font-semibold text-slate-800">Add new Role</h2>
                        </header>
                    </div>

                    <div className='col-lg-12 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">Role Name </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.name && watch("name") ? <FcCheckmark /> : errors.name ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>

                        <select
                            // value={recruitModel.country}
                            // onChange={handleChange}
                            {...register('name')}
                            name="name"
                            id="name"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full   ${errors.name && 'border-red-500'}`}
                        >

                            <option defaultChecked disabled>Select Country </option>
                            {rolesList.map((contry) => {
                                return (
                                    <option value={contry}>{contry}</option>

                                )
                            })
                            }

                        </select>
                        {/* <input
                            {...register('name')}
                            autoComplete="off"
                            className={`w-full  ${errors.name ? "border-red-400" : "border-gray-400"}`}
                            name='name' id="name"
                            type="text"
                            placeholder="Role Name"

                        /> */}
                        {/* <span hidden={watch("name")} className='absolute text-red-400 text-lg font-medium  top-9 left-[125px]'>*</span> */}

                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name.message}</p>
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

export default CreateRole