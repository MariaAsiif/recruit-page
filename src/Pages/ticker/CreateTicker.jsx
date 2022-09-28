import React, { useState, useEffect } from 'react'
import { FcCheckmark } from 'react-icons/fc'
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { callApi } from '../../utils/CallApi';
import { Link } from "react-router-dom"
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
const schema = yup.object({
    name: yup.string().required("Ticker Text is Required"),
    // businessName: yup.string().required()


});

const CreateTicker = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    const [expiryDate, setexpiryDate] = useState({ day: dd, month: mm, year: yyyy })
    const [startDate, setStartDate] = useState({ day: dd, month: mm, year: yyyy })
    const [companySetting, setCompanySetting] = useState(true)
    const [name, setNames] = useState({})
    const [allbusinesses, setallbusinesses] = useState([])

    const { register, watch, reset, control, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(schema) });


    const handleChange = (e) => {
        let find = allbusinesses.find((f) => f._id === e.target.value)
        setNames(find)
    }



    const onSubmit = async (data) => {
        try {

            let startedDate = `${startDate.year}-${startDate.month}-${startDate.day}`;
            let endDate = `${expiryDate.year}-${expiryDate.month}-${expiryDate.day}`;

            let payload = {
                phonebookid: name?._id,
                logoFile: name?.logoFile,
                tickerText: data.name,
                startDate: startedDate,
                expiryDate: endDate,
                "active": true
            }

            const res = await callApi("/tickers/createTicker", "post", payload)
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

    console.log("error", errors)
    console.log("name", name)

    useEffect(() => {
        (async () => {
            try {
                const payload = {
                    sortproperty: "created_at",
                    sortorder: -1,
                    offset: 0,
                    limit: 50,
                    query: {
                        critarion: { active: true },
                        fields: "_id businessPhoneBookText logoFile"
                    }
                }
                const res = await callApi("/phonebooks/getPhoneBooksList", "post", payload)
                setallbusinesses(res.data.phonebooks)
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])


    // ****************** Datepicker Content ***********
    const renderStartDate = ({ ref }) => (
        < div className='relative cursor-pointe w-full'>
            <input readOnly ref={ref} // necessary  placeholder="yyy-mm-dd"
                value={startDate ? `${startDate.year}/${startDate.month}/${startDate.day}` : ''}
                className={`border p-2 focus:outline-blue-500 rounded-sm w-full cursor-pointer z-30  px-2 py-2  border-gray-400`}
            />
            <div className={`visible absolute top-3 cursor-pointer right-5`}>   <FcCheckmark />   </div>

        </div >
    )


    // ****************** Datepicker Content ***********
    const renderEndDate = ({ ref }) => (
        < div className='relative cursor-pointe w-full'>
            <input readOnly ref={ref} // necessary  placeholder="yyy-mm-dd"
                value={expiryDate ? `${expiryDate.year}/${expiryDate.month}/${expiryDate.day}` : ''}
                className={`border p-2 focus:outline-blue-500 rounded-sm w-full cursor-pointer z-30  px-2 py-`}
            />
            <div className={`visible absolute top-3 cursor-pointer right-5`}>   <FcCheckmark />   </div>

        </div >
    )


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
                                    <Link to="/ticker" className="text-slate-500 hover:text-indigo-500" >Ticker </Link>
                                    <svg className="h-4 w-4 fill-current text-slate-400 mx-3" viewBox="0 0 16 16">
                                        <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                                    </svg>
                                </li>
                                <li className="flex items-center">
                                    <Link to="/ticker/create-ticker" className="text-slate-500 hover:text-indigo-500" href="#0">Create ticker</Link>
                                </li>
                            </ul>
                        </div>
                        <header className="py-4">
                            <h2 className="font-semibold text-slate-800">Add new Ticker</h2>
                        </header>
                    </div>


                    <div className='col-lg-6 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="businessName">Business Name </label>
                        <div className='absolute right-5 top-10'>
                            {!errors.businessName && watch('businessName') ? <FcCheckmark className='mr-5' /> : errors.businessName ? <div className=' text-red-500'><MdClose className='mr-5' /></div> : null}
                        </div>
                        <select onChange={handleChange} className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.businessName && "border-red-400" }`}>
                            {allbusinesses.map((business) => <option key={business._id} value={business._id}  >
                                <span >{business.businessPhoneBookText}</span>
                            </option>)}
                        </select>

                        {errors.businessName && (
                            <p className="text-red-500 text-sm">{errors.businessName.message}</p>
                        )}
                    </div>

                    <div className='col-lg-6 mb-4 relative'>
                        <div>
                            <div className="text-sm text-slate-800 font-semibold mb-3">Active/Deactivate</div>
                            <div className="flex items-center">

                                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                                    <input type="checkbox"
                                       checked={companySetting}
                                       onChange={() => setCompanySetting(!companySetting)}
                                        id="default-toggle"
                                        class="sr-only peer"
                                    />
                                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <div className="text-sm text-slate-400 italic ml-2">{companySetting ? 'Active' : 'Deactivate'}</div>
                                </label>

                             
                               
                            </div>
                        </div>
                    </div>


                

                    <div className='col-lg-6 mb-4 '>
                        <label className="block text-sm font-medium mb-1 "  >Start Date</label>
                        <div className="relative">
                            <Controller
                                control={control}
                                name="expiryDate"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <DatePicker
                                        value={value}
                                        onChange={setStartDate}
                                        renderInput={renderStartDate} // render a custom input
                                        shouldHighlightWeekends
                                    />
                                )}
                            />
                        </div>


                    </div>
                    <div className='col-lg-6 mb-4 '>
                        <label className="block text-sm font-medium mb-1 "  >End Date</label>
                        <div className="relative">
                            <Controller
                                control={control}
                                name="expiryDate"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <DatePicker
                                        value={value}
                                        onChange={setexpiryDate}
                                        renderInput={renderEndDate} // render a custom input
                                        shouldHighlightWeekends
                                    />
                                )}
                            />
                        </div>


                    </div>

                   
                    <div className='col-lg-12 mb-4 relative'>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">Text</label>
                        <div className='absolute right-5 top-10'>
                            {!errors.name && watch("name") ? <FcCheckmark /> : errors.name ? <div className=' text-red-500'><MdClose /></div> : null}
                        </div>
                        <textarea
                            {...register('name')}
                            autoComplete="off"
                            className={`border p-2 focus:outline-blue-500 rounded-sm w-full ${errors.name && "border-red-400"}`}
                            name='name' id="name"
                            type="text"
                            placeholder="Ticker text"

                        ></textarea>
                        <span hidden={watch("name")} className='absolute text-red-400 text-lg font-medium  top-9 left-[110px]'>*</span>

                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name.message}</p>
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

export default CreateTicker