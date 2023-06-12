import React, { useRef, useEffect, useState } from 'react'
import Transition from '../../utils/Transition';
import { callApi } from '../../utils/CallApi';
// ========================= 3rd party packages

import { toast, ToastContainer } from 'react-toastify';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
const schema = yup.object({
    question: yup.string().required(),
    marks: yup.string().required(),
    industry: yup.string().required()
}).required();


// const initialState =
const ViewEditQuestion = ({ id, modalOpen, onClose, mode, data }) => {
    const modalContent = useRef(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const [answers, setAnswers] = useState([
        { answerText: "", correctness: false },
        { answerText: "", correctness: false },
        { answerText: "", correctness: false },
        { answerText: "", correctness: false },
    ])

    const [industry, setIndustry] = useState([])


    const handleAnswerOption = (e, i) => {
        const { name, value } = e.target;
        let list = [...answers];
        for (let j = 0; j < list.length; j++) {
            const elements = list[j];
            if (j === i) {
                elements.correctness = true;
            }
            else {
                elements.correctness = false
            }

        }
        setAnswers(list)
    }


    const handleAnswer = (e, i) => {
        const { name, value } = e.target;
        let list = [...answers];
        list[i][name] = value;
        setAnswers(list)
    }



    useEffect(() => {
        let fetch = async () => {
            let payload = {
                "sortproperty": "created_at",
                "sortorder": -1,
                "offset": 0,
                "limit": 50,
                "query": {
                    "critarion": { "active": true },

                    "addedby": "_id email first_name",
                    "questionsFields": "_id questionText answers marks",
                    "lastModifiedBy": "_id email first_name"
                }

            }

            let res = await callApi('/industries/getIndustriesWithFullDetails', 'post', payload);
            setIndustry(res?.data?.industries)
        }
        fetch()
    }, [])


    const onSubmit = async (values) => {
        let value = {
            "questionid": data?.id,
            "questionText": values?.questionText,
            "answers": answers

        }
        const res = await callApi("/questions/updateQuestion", "post", value)
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
        setAnswers(data?.answers)
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
                            <div className="font-semibold text-slate-800">{mode === "view" ? "View Category" : "Edit Category"}</div>
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

                                <div className="flex justify-between items-center">
                                    <label className='block text-sm font-medium mb-1' htmlFor='name'>
                                        Industry
                                    </label>
                                </div>
                                <select
                                    {...register('industry')}
                                    name="industry"
                                    id="industry"
                                    className={`border p-2 focus:outline-blue-500 rounded-sm w-full  ${errors.industry && 'border-red-500'}`}
                                >
                                    <option value="">Select Industry</option>
                                    {
                                        industry.map((item, i) => (
                                            <option key={i} value={item?._id}>{item?.industryName}</option>
                                        ))
                                    }
                                </select>
                                {errors.industry && (
                                    <p className="text-red-500 text-sm">{errors.industry.message}</p>
                                )}

                                <div className="flex justify-between items-center">
                                    <label className='block text-sm font-medium mb-1' htmlFor='name'>
                                        Question
                                    </label>
                                </div>
                                <input
                                    className={`border p-2 focus:outline-blue-500 rounded-sm w-full `}
                                    name='questionText'
                                    id='questionText'
                                    {...register('question')}
                                    type='text'
                                    placeholder='Question Title '
                                />
                                {errors.question && (
                                    <p className="text-red-500 text-sm">{errors.question.message}</p>
                                )}

                                {
                                    answers?.map((item, i) => (
                                        <div className='row pt-5'>

                                            <div className='col-lg-6' key={i}>
                                                <label className='block text-sm font-medium mb-1' htmlFor='name'>
                                                    Answer Option
                                                </label>
                                                <input
                                                    className={`border p-2 focus:outline-blue-500 rounded-sm w-full `}
                                                    name='answerText'
                                                    id='answerText'
                                                    type='text'
                                                    onChange={(e) => handleAnswer(e, i)}
                                                    value={item.answerText}
                                                    placeholder='Answer'
                                                />
                                            </div>
                                            <div className='col-lg-6 mb-4 relative'>
                                                <div>
                                                    <div className='text-sm text-slate-800 font-semibold mb-3'>
                                                        Correctness
                                                    </div>
                                                    <div className='flex items-center'>

                                                        <label className="inline-flex relative items-center cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                name="correctness"
                                                                checked={item?.correctness}
                                                                onChange={(e) => handleAnswerOption(e, i)}
                                                                className="sr-only peer" />
                                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                            <div className='text-sm text-slate-400 italic ml-2'>
                                                                {/* { ? 'True' : 'False'} */}
                                                            </div>
                                                        </label>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                                <div className="flex justify-between items-center">
                                    <label className='block text-sm font-medium mb-1' htmlFor='name'>
                                        Marks
                                    </label>
                                </div>
                                <input
                                    className={`border p-2 focus:outline-blue-500 rounded-sm w-full `}
                                    name='marks'
                                    id='marks'
                                    {...register('marks')}
                                    type='text'
                                    placeholder='Marks '
                                />
                                {errors.marks && (
                                    <p className="text-red-500 text-sm">{errors.marks.message}</p>
                                )}



                                {
                                    mode !== "view" ? (
                                        <div className='col-lg-12'>
                                            <button type='submit' className="p-2 bg-red-500 hover:bg-green-600 text-white" >Update Question</button>
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

export default ViewEditQuestion