import React, { useRef, useEffect, useState } from 'react'
import Transition from '../../utils/Transition';
import { callApi } from '../../utils/CallApi';
import { FcCheckmark } from 'react-icons/fc'

// ========================= 3rd party packages
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { useForm } from "react-hook-form";
import moment from "moment"
// import { FcCheckmark } from 'react-icons/fc'
import { toast, ToastContainer } from 'react-toastify';




const ViewEditInspire = ({ id, modalOpen, onClose, mode, data }) => {
    const modalContent = useRef(null);
    const { register, reset, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange ', });
    const [quoteDate, setquoteDate] = useState({ day: 10, month: 8, year: 2022 })

    console.log(`hello i am in pop up`)


    console.log("quts", quoteDate)


    const handleChangeDate = (data) => {
        const date = moment(data).format('yyyy-M-D').split('-')

        // setquoteDate({ day: +date[2], month: +date[1], year: +date[0] })
        console.log("quots", date)
    }



    const onSubmit = async (values) => {
        let updated = `${quoteDate.year}-${quoteDate.month}-${quoteDate.day}`;
        let value = {
            quoteid: data._id,
            quoteText: values.quoteText,
            authorName: values.authorName,
            quoteColor: values.quoteColor,
            quoteDate: updated,

            active: true

        }
        const res = await callApi("/quotes/updateQuote", "post", value)
        if (res.status === "Success") {
            console.log("Res", res)
            toast.success(res.message);
            onClose()
        }
        else {
            toast.error(res.message);

        }
    }


    // ****************** Datepicker Content ***********
    const renderCustomInput = ({ ref }) => (
        < div className='relative cursor-pointer'>
            <input readOnly ref={ref} // necessary  placeholder="yyy-mm-dd"
                value={quoteDate ? `${quoteDate.year}/${quoteDate.month}/${quoteDate.day}` : ''}
                className={`date_picker border p-2 w-full focus:outline-blue-500 rounded-sm  z-30  px-2 py-2  `}
            />
            <div className={`visible absolute top-3 cursor-pointer right-5`}>   <FcCheckmark />   </div>

        </div >
    )


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
        // var parts = data?.quoteDate?.split('-');
        // var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
        const date = moment(data?.quoteDate).format('yyyy-M-D').split('-')
        setquoteDate({ day: +date[2], month: +date[1], year: +date[0] })
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
                            <div className="font-semibold text-slate-800">View Inspire</div>
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
                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description">AUTHOR NAME</label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.authorName}</p>
                                        ) : (

                                            <input  {...register("authorName", { required: true })} className={`border p-2 w-full focus:outline-blue-500 rounded-sm  ${errors.authorName ? "border-red-500" : "border-green-500"}`} />
                                        )}
                                    {errors.authorName && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description">QUOTATION</label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.quoteText}</p>
                                        ) : (

                                            <input  {...register("quoteText", { required: true })} className={`border p-2 w-full focus:outline-blue-500 rounded-sm  ${errors.quoteText ? "border-red-500" : "border-green-500"}`} />
                                        )}
                                    {errors.quoteText && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description">QUOTE COLOR</label>
                                    {mode === "view" ?
                                        (
                                            <p>{data.quoteColor}</p>
                                        ) : (

                                            <input    {...register("quoteColor", { required: true })} className={`border p-2 w-full focus:outline-blue-500 rounded-sm  ${errors.quoteColor ? "border-red-500" : "border-green-500"}`} />
                                        )}
                                    {errors.quoteColor && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className='col-lg-4 mb-5'>
                                    <label className="block text-lg font-medium mb-1" htmlFor="description">QUOTE DATE</label>
                                    {mode === "view" ?
                                        (
                                            <p>{moment(data.quoteDate).format('MM/DD/YYYY')}</p>
                                        ) : (
                                            <DatePicker
                                                value={quoteDate}
                                                onChange={(date) => setquoteDate(date)}
                                                renderInput={renderCustomInput} // render a custom input
                                                shouldHighlightWeekends
                                            // calendarPopperPosition="bottom"
                                            />
                                        )}
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