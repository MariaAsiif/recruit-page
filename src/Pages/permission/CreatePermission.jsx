import React from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { MdClose } from 'react-icons/md';
import { toast , ToastContainer } from 'react-toastify';
import { useForm, } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { callApi } from '../../utils/CallApi';

const schema = yup.object({
    permission: yup.string().required("Permission is Required"),
    module: yup.string().required(" Module is Required"),


});

const CreatePermission = () => {


    const userId = useSelector((state) => state.userAuth.userInfo.userid);


    const { register, watch,reset ,  handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });




    const onSubmit = async (data) => {
        console.log("Data", data)
        try {
            let payload = {
                permissionName: data.permission,
                moduleName: data.module,
                addedby : userId
                
            }
            const res = await callApi("/permissions/createPermission", "post", payload)
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
                                    <Link to="/admindashboard" className="text-slate-500 cursor-pointer hover:text-indigo-500" >Dashboard </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/permission" className="text-slate-500 cursor-pointer hover:text-indigo-500" >Permission </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <div  className="text-slate-500  hover:text-indigo-500" >Create Permission</div>
                                </li>
                            </ul>
                        </div>
                        <header className="py-4">
                            <h2 className="font-semibold text-slate-800">Add new Permission</h2>
                        </header>
                    </div>

                    <div className='col-lg-6 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="permission">Permisson Name </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.permission && watch("permission") ? <FcCheckmark /> : errors.permission ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('permission')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.permission && "border-red-400" }`}
                            name='permission' id="permission"
                            type="text"
                            placeholder="Permission Name"

                        />
                        <span hidden={watch("permission")} className='absolute text-red-400 text-lg font-medium  top-9 left-[175px]'>*</span>

                        {errors.permission && (
                            <p className="text-red-500 text-sm">{errors.permission.message}</p>
                        )}
                    </div>

                    <div className='col-lg-6 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="module">Module Name </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.module && watch("module") ? <FcCheckmark /> : errors.module ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <input
                            {...register('module')}
                            autoComplete="off"
                            className={`border p-[6px] focus:outline-blue-500 rounded-sm w-full  ${errors.name && "border-red-400"}`}
                            name='module' id="module"
                            type="text"
                            placeholder="Module Name"

                        />
                        <span hidden={watch("module")} className='absolute text-red-400 text-lg font-medium  top-9 left-[145px]'>*</span>

                        {errors.module && (
                            <p className="text-red-500 text-sm">{errors.module.message}</p>
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

export default CreatePermission