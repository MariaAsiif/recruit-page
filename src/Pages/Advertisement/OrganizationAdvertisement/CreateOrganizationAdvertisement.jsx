import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { FcCheckmark } from 'react-icons/fc'
import { MdClose } from 'react-icons/md'
import { toast, ToastContainer } from 'react-toastify'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { callApi } from '../../../utils/CallApi';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';

const CreateOrganizationAdvertisement = () => {
    const useername = useSelector((state) => state.userAuth.userInfo.name);
    const schema = yup.object({
        name: yup.string().required("User Name is Required"),
        email: yup.string().email("Invalid email").required("Email is Required"),
        desc: yup.string().required(" Feedback is Required"),


    });
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    const [startDate, setstartDate] = useState({
        day: dd,
        month: mm,
        year: yyyy,
    });
    const [endDate, setendDate] = useState({
        day: dd,
        month: mm,
        year: yyyy,
    });
    const [file, setFile] = useState('')
    const { register, watch, reset, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

    const onSubmit = async (data) => {
        try {
            let formdata = new FormData()
            formdata.append('feedbackimg', file);
            formdata.append('request', JSON.stringify({
                userEmail: data.email,
                feedbackDescription: data.desc,
                userName: data.name,
            }));
            const res = await callApi("/feedbacks/createAdminFeedback", "post", formdata)
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
    // ****************** Datepicker Content ***********
    const renderStartCustomInput = ({ ref }) => (
        <div className='relative w-full cursor-pointe'>
            <input readOnly ref={ref} value={startDate ? `${startDate.year}/${startDate.month}/${startDate.day}` : ''} className={` border p-2 focus:outline-blue-500 rounded-sm w-full cursor-pointer z-30  px-2 py-2 `} />
            <div className={`visible absolute top-3 cursor-pointer right-5`}>   <FcCheckmark />   </div>
        </div>
    );
    const renderEndCustomInput = ({ ref }) => (
        <div className='relative w-full cursor-pointe'>
            <input readOnly ref={ref} value={endDate ? `${endDate.year}/${endDate.month}/${endDate.day}` : ''} className={` border p-2 focus:outline-blue-500 rounded-sm w-full cursor-pointer z-30  px-2 py-2 `} />
            <div className={`visible absolute top-3 cursor-pointer right-5`}>   <FcCheckmark />   </div>
        </div>
    );
    return (
        <div className='bscontainer-fluid'>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row p-11'>
                    <div className='mb-6 col-12'>
                        <header className="py-4">
                            <h2 className="font-semibold text-slate-800">Add new Organization Advertisement</h2>
                        </header>
                    </div>
                    <div className='relative mb-4 col-lg-3'>
                        <label className="block mb-1 text-sm font-medium" htmlFor="name">Organization name</label>
                        <div className='absolute right-5 top-10'>
                            {!errors.name && watch("name") ? <FcCheckmark /> : errors.name ? <div className='text-red-500 '><MdClose /></div> : null}
                        </div>
                        <input   {...register('name')} autoComplete="off" className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.name && "border-red-400"}`} name='name' id="name" type="text" placeholder="Business Name" />
                        <span hidden={watch("name")} className='absolute text-red-400 text-lg font-medium  top-9 left-[125px]'>*</span>

                        {errors.name && (<p className="text-sm text-red-500">{errors.name.message}</p>)}
                    </div>
                    <div className='relative mb-4 col-lg-3'>
                        <label className="block mb-1 text-sm font-medium" htmlFor="secondFname">Image </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.logo && watch('logo') ? <FcCheckmark /> : errors.logo ? <div className='text-red-500 '><MdClose /></div> : null}
                        </div>
                        <input onChange={(e) => setFile(e.target.files[0])} type="file" className={`border p-2 focus:outline-blue-500 rounded-sm w-full h-[42px]  ${errors.logo && 'border-red-500'}`} name='logo' id="logo" />
                        <small className='text-red-500'>only png, svg images can be added</small>
                    </div>
                    <div className='mb-4 col-lg-3'>
                        <label className="block mb-1 text-sm font-medium"  >Added by </label>
                        <select {...register('addedby', { required: true })} className={`border p-2 focus:outline-blue-500 rounded-sm w-full    ${errors.addedby ? "border-red-400" : "border-gray-400"} `} >
                            <option>{useername}</option>
                        </select>
                    </div>
                    <div className='mb-4 col-lg-3 '>
                        <label className='block mb-1 text-sm font-medium '>Start Date</label>
                        <div className='relative'>
                            <DatePicker
                                value={startDate}
                                name='startDate'
                                onChange={(date) => setstartDate(date)}
                                renderInput={renderStartCustomInput} // render a custom input
                                shouldHighlightWeekends
                                calendarPopperPosition='top'
                            />
                        </div>
                    </div>
                    <div className='mb-4 col-lg-3 '>
                        <label className='block mb-1 text-sm font-medium '>    End Date   </label>
                        <div className='relative'>
                            <DatePicker
                                value={endDate}
                                name='endDate'
                                onChange={(date) => setendDate(date)}
                                renderInput={renderEndCustomInput} // render a custom input
                                shouldHighlightWeekends
                                calendarPopperPosition='top'
                            />
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <button className="p-2 text-white bg-red-500 hover:bg-green-600" >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateOrganizationAdvertisement