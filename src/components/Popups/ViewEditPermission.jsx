import React, { useRef, useEffect, useState } from 'react'
import Transition from '../../utils/Transition';
import { callApi } from '../../utils/CallApi';
import { FcCheckmark } from 'react-icons/fc'

// ========================= 3rd party packages
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';




const ViewEditInspire = ({ id, modalOpen, onClose, mode, data }) => {
    const modalContent = useRef(null);
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange ', });



    const onSubmit = async (values) => {

        let value = {
            permissionid: data?._id,
            moduleName: values.moduleName || data?.moduleName,
            permissionName: values.permissionName || data?.permissionName,
            active: true

        }
        const res = await callApi("/permissions/updatePermission", "post", value)
        if (res.status === "Success") {
            toast.success(res.message);
            onClose()
        }
        else {
            toast.error(res.message);

        }
    }



    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!modalOpen || keyCode !== 27) return;
            onClose();
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });
    useEffect(() => {
        reset(data);

    }, [data, reset]);

    return (
        <>
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
            {/* Modal backdrop */}
            <Transition
                className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
                show={modalOpen}
                enter="transition ease-out duration-200"
                enterStart="opacity-0"
                enterEnd="opacity-100"
                leave="transition ease-out duration-100"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
                aria-hidden="true"
            />
            {/* Modal dialog */}
            <Transition
                id={id}
                className="fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center px-4 sm:px-6"
                role="dialog"
                aria-modal="true"
                show={modalOpen}
                enter="transition ease-in-out duration-200"
                enterStart="opacity-0 translate-y-4"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-200"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 translate-y-4"
            >
                <div ref={modalContent} className="bg-white rounded shadow-lg overflow-auto w-3/4 h-2/3">
                    {/* Modal header */}
                    <div className="px-5 py-3 border-b border-slate-200">
                        <div className="flex justify-between items-center">
                            <div className="font-semibold text-slate-800">{ mode === "view" ? "View Permission" : "Edit Permission"}</div>
                            <button className="text-slate-400 hover:text-slate-500" onClick={onClose}>
                                <div className="sr-only">Close</div>
                                <svg className="w-4 h-4 fill-current">
                                    <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='bscontainer'>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='row p-5'>
                                <div className='col-lg-6 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description">PERMISSION NAME</label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.permissionName}</p>
                                        ) : (

                                            <input  {...register("permissionName", { required: true })} className={`border p-2 w-full focus:outline-blue-500 rounded-sm ${errors.permissionName ? "border-red-500" : "border-green-500"}`} />
                                        )}
                                    {errors.permissionName && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className='col-lg-6 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description">MODULE NAME</label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.moduleName}</p>
                                        ) : (

                                            <input  {...register("moduleName", { required: true })} className={`border p-2 w-full focus:outline-blue-500 rounded-sm ${errors.moduleName ? "border-red-500" : "border-green-500"}`} />
                                        )}
                                    {errors.moduleName && <span className='text-red-500'>This field is required</span>}
                                </div>

                                {
                                    mode !== "view" ? (
                                        <div className='col-lg-12'>
                                            <button type='submit' className="p-2 bg-red-500 hover:bg-green-600 text-white" >Update Inspire</button>
                                        </div>
                                    ) : null
                                }
                            </div>
                        </form>

                    </div>
                </div>
            </Transition>
        </>
    )
}

export default ViewEditInspire